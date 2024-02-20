import { ipcMain } from 'electron';
import { setSystemTheme, toggleTheme } from './themeServices';

export const themeListerners = () => {
  ipcMain.handle('dark-mode:toggle', toggleTheme);
  ipcMain.handle('dark-mode:system', setSystemTheme);
};
