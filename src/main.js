const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title:"卫生室电子处方系统",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  // 程序最先加载登录页 index.html
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})