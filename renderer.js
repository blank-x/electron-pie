// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// 页面看到的内容是渲染进程，所以事件相关的逻辑代码应该写在 html 引入的 render.js 中。

console.log(process.cwd());
