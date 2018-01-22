function GlitterBG(selector) {
    var newBG = {
        canvas: null,
        stones: null,
        init: function (canvasSelector) {
            canvas = {};
            stones = [];
            canvas.element = document.querySelector(canvasSelector);
            canvas.context = canvas.element.getContext('2d');
            canvas.width = canvas.context.width;
            canvas.height = canvas.context.height;
        },
        test: function() {
            console.log(canvas);
            console.log(stones);
        },
        drawStone: function (x, y, z) {
            var newStone = {
                x: x,
                y: y,
                radius: z
            };
        },
        resize: function () {

        },
        update: function () {

        },
        gfx: {
            clear: function () {
                canvas.context.globalCompositeOperation = 'destination-out';
                canvas.context.fillStyle = 'rgba(0, 0, 0, .1)';
                canvas.context.fillRect(0, 0, cw, ch);
                canvas.context.globalCompositeOperation = 'lighter';
            },
            loop: function () {
                gfx.clear();
            }
        }
    }
    newBG.init(selector);
    return newBG;
}

var glitter = new GlitterBG('#glitterbg');
glitter.test();