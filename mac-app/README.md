# My To-Do — Mac app

Wraps `../index.html` in an Electron window with its own Dock icon. The build copies the latest `index.html` in automatically.

## One-time setup
Install Node.js (the "LTS" version) from https://nodejs.org

## Build the app
In **Terminal**, from the repository folder:

```
cd mac-app
npm install
npm run build
```

A Finder window opens with **My To-Do.app**. Drag it into your **Applications** folder.
Open it from Launchpad or Spotlight, then right-click its Dock icon → Options → Keep in Dock.

## Notes
- `npm run start` opens the app without building, handy for trying changes.
- Your to-dos are saved inside the app and stay there between launches.
- After changing `index.html`, run `npm run build` again and replace the old app in Applications.
