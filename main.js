const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  // Create the browser window and hide the default menu bar
  win = new BrowserWindow({ width: 1080, height: 720 })
  win.setMenuBarVisibility(false)
  // Load main layout HTML
  win.loadFile('main.html')

  win.on('closed', () => {
    // Unstore the window when not open
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed *exception for Macs
app.on('window-all-closed', () => {
  // Prevent quitting on Mac OS until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
