// const square = document.querySelector('#square');
//
// const animation = square.animate(
//     [{transform: 'translateX(0px)'}, {transform: 'translateX(100px)'}],
//     {
//         duration: 2000,
//         iterations: Infinity,
//         direction: 'alternate',
//         easing: 'ease-in-out',
//     }
// )

// const canvas = document.getElementById("my-canvas");
// const ctx = canvas.getContext("2d");
//

// ctx.fillStyle = "crimson";
// ctx.fillRect(1, 1, 150, 100);

const textCanvas = document.getElementById("my-text-canvas");
const textCanvasCtx = textCanvas.getContext("2d");

textCanvasCtx.font = "30px Arial";
textCanvasCtx.fillStyle = "crimson";
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);

console.log(textCanvasCtx);
