const { 
  app, 
  BrowserWindow,
  Tray,
  Menu,
  nativeImage,
  dialog
 } = require('electron'); 
const path = require('path');
const {app: express, server} = require('./server')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

const createTray = () => {
  const iconPath = path.join(__dirname, './icon/settings.png')
  const trayIcon = nativeImage.createFromPath(iconPath).resize({ width: 24, height: 24 })
  const tray = new Tray(trayIcon)


    
    menuTemplate = [
    {
      label: null,
      enabled: false
      
    },
    {
      label: 'Start Service',
      enabled: true,
      click: () => {
        server.listen(express.get('Port'), express.get('Host'), () => {
          menuTemplate[1].enabled = false
          menuTemplate[2].enabled = true
          buildTrayMenu(menuTemplate)
          console.log(`Server running at http://${express.get('Host')}:${express.get('Port')}/`)
        })
      }
      
    },
    {
      label: 'Stop Service',
      enabled: false,
      click: () => {
        server.close((e)=>{
          console.log('Error: ',e);
          menuTemplate[1].enabled = true
          menuTemplate[2].enabled = false
          dialog.showMessageBox({
            type: 'info',
            title: 'warning',
            message: 'Server has been stopped'
          })
          buildTrayMenu(menuTemplate)
          console.log("server closed")
        })
      }

      
    },
    
    {
      label: 'Open',
      click: () => {
        createWindow()
      }
    },
    {
      label: 'About',
      click: () => {
        dialog.showMessageBox({
          type: 'info',
          title: 'Wise Gate Application V.1.0.0',
          message: 'Gate Software for Wise Application\n CopyRight 2021 Wise Application\n Manager for swing gate system'
        })
      }
    },
    {
      label: 'Exit',
      click: () => {
        app.quit()
      }

    }
  ]


  const buildTrayMenu = menu => {
    let lblstatus = 'Active'
    let iconStatus = './icon/green.png'
    if (menu[1].enabled) {
      iconStatus = './icon/red.png'
      lblstatus = 'Inactive'
    }
    const iconStatusPath = path.join(__dirname, iconStatus)
    menu[0].label = `Service Status: ${lblstatus}`
    menu[0].icon = nativeImage.createFromPath(iconStatusPath).resize({ width: 24, height: 24 })
    const trayMenu = Menu.buildFromTemplate(menu)
    tray.setContextMenu(trayMenu)
  }
  buildTrayMenu(menuTemplate)

}

app.whenReady().then(createWindow).then(createTray)


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createTray);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


app.on('quit',() => {
  server.close()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
