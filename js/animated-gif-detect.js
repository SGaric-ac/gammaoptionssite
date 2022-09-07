/**
 * @author Zakir Tariverdiev
 * @class animatedGifDetect
 * @description
 * GIF file reader that checks whether GIF image is animated, or not.
 * Uses information gathered from the website below:
 * http://www.matthewflickinger.com/lab/whatsinagif/bits_and_bytes.asp
 */
 (function(window, undefined) {
    'use strict';

    // Prevent redefinition of animatedGifDetect
    if (typeof window.animatedGifDetect !== 'undefined') {
        return;
    }

    var HEADER_LEN = 6;                 // offset bytes for the header section
    var LOGICAL_SCREEN_DESC_LEN = 7;    // offset bytes for logical screen description section
    var fileReader = new FileReader();  // we'll re-use this object
    var callbackConfig = {
        animatedCb: null,
        nonAnimatedCb: null,
        context: window
    };

    fileReader.addEventListener('load', _checkForAnimation, false);

    window.animatedGifDetect = {
        process: process
    };

    /**
     * @method process
     * @memberof animatedGifDetect
     * @description Converts the provided GIF file into array buffer and checks whether it is
     * animated, or not.
     * @param {File} gifFile - GIF file to check for animation
     * @param {function} animatedCb - callback to fire if GIF is animated
     * @param {function} [nonAnimatedCb] - callback to fire if GIF is not animated
     * @param {object} [context] - context for the callbacks. Defaults to window
     */
    function process(gifFile, animatedCb, nonAnimatedCb, context) {
        if (gifFile) {
            callbackConfig.animatedCb = animatedCb;
            callbackConfig.nonAnimatedCb = nonAnimatedCb;
            callbackConfig.context = context;
            fileReader.readAsArrayBuffer(gifFile);
        }
    }

    /**
     * @method _checkForAnimation
     * @private
     * @memberof animatedGifDetect
     * @description Looks for the "delay" bytes in the GIF file. These bytes will be set to non 0 value
     * if the GIF file is animated.
     */
    function _checkForAnimation() {
        var buffer = fileReader.result;
        // Start from last 4 bytes of the Logical Screen Descriptor
        var dv = new DataView(buffer, HEADER_LEN + LOGICAL_SCREEN_DESC_LEN - 3);
        var offset = 0;
        var globalColorTable = dv.getUint8(0);	// aka packet byte
        var bgColorIndex = dv.getUint8(1);
        var pixelAspectRatio = dv.getUint8(2);
        var globalColorTableSize = 0;

        // check first bit, if 0, then we don't have a Global Color Table
        if (globalColorTable & 0x80) {
            // grab the last 3 bits, to calculate the global color table size -> RGB * 2^(N+1)
            // N is the value in the last 3 bits.
            globalColorTableSize = 3 * Math.pow(2, (globalColorTable & 0x7) + 1);
        }

        // move on to the Graphics Control Extension
        offset = 3 + globalColorTableSize;

        var extensionIntroducer = dv.getUint8(offset);
        var graphicsConrolLabel = dv.getUint8(offset + 1);
        var delayTime = 0;

        // Graphics Control Extension section is where GIF animation data is stored
        // First 2 bytes must be 0x21 and 0xF9
        if ((extensionIntroducer & 0x21) && (graphicsConrolLabel & 0xF9)) {
            // skip to the 2 bytes with the delay time
            delayTime = dv.getUint16(offset + 4);
        }

        if (delayTime && typeof callbackConfig.animatedCb === 'function') {
            callbackConfig.animatedCb.apply(callbackConfig.context || window);
        }
        else if (!delayTime && typeof callbackConfig.nonAnimatedCb === 'function') {
            callbackConfig.nonAnimatedCb.apply(callbackConfig.context || window);
        }
    }
})(window);