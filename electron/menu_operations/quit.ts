import { ipcMain, app } from 'electron';

ipcMain.on('quit-app', () => {
    app.quit();
});