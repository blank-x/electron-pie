// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // 创建了一个 BrowserWindow 对象，指定了大小和功能设置。
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // String (可选) - 在页面运行其他脚本之前预先加载指定的脚本
      // 此脚本都可以访问所有 Node API 脚本路径为文件的绝对路径
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration:true,
      contextIsolation:false, // 在
    }
  })

  //加载了同级目录下的 index.html 文件。也可以加载服务器资源（部署好的网页），比如 mainWindow.loadURL('https://www.baidu.com')
  // mainWindow.loadURL('https://www.baidu.com')
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
