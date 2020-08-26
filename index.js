const { app, BrowserWindow } = require('electron')

function createWindow () {
   // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 785,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // y carga el index.html de la aplicación.
  win.loadFile('index.html')
}
// Este método se llamará cuando Electron haya finalizado
// la inicialización y esté preparado para crear la ventana del navegador.
// Algunas APIs pueden usarse sólo después de que este evento ocurra.
app.whenReady().then(createWindow)

