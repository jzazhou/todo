const { app, BrowserWindow } = require("electron");
const path = require("path");
const { pathToFileURL } = require("url");

// The typewriter font ships with the app, so it looks right even offline.
const fontUrl = pathToFileURL(path.join(__dirname, "fonts", "SpecialElite-Regular.ttf")).href;
const appCss = `
  @font-face { font-family: "Special Elite"; src: url("${fontUrl}"); }
  /* drag the window by the gray area around the card */
  body { -webkit-app-region: drag; user-select: none; }
  .app { -webkit-app-region: no-drag; user-select: text; }
`;

function createWindow() {
  const win = new BrowserWindow({
    width: 440,
    height: 860,
    minWidth: 420,
    minHeight: 600,
    show: false,
    backgroundColor: "#e9e9e9",
    titleBarStyle: "hiddenInset",
    title: "My To-Do",
    webPreferences: { contextIsolation: true, sandbox: true },
  });

  win.webContents.on("did-finish-load", () => win.webContents.insertCSS(appCss));
  win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  win.once("ready-to-show", () => win.show());
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);

// Mac convention: clicking the Dock icon reopens the window.
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
