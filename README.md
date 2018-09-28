# Getting Started

Clone this repo to a new directory:

```bash
git clone https://github.com/edgeworkscreative/stencil-electron-app-starter my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the app for production, run:

```bash
sudo docker run --rm -ti --env ELECTRON_CACHE="/root/.cache/electron"  --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder"  -v ${PWD}:/project  -v ${PWD##*/}-node-modules:/project/node_modules  -v ~/.cache/electron:/root/.cache/electron  -v ~/.cache/electron-builder:/root/.cache/electron-builder  electronuserland/builder:wine
```

```bash
./node_modules/.bin/electron-builder --win
```

```bash
./node_modules/.bin/electron-builder --linux deb
```

### Thanks to
- [@davembush](https://medium.com/@davembush/typescript-and-electron-the-right-way-141c2e15e4e1)
- [TypeStrong/ts-node](https://github.com/TypeStrong/ts-node)
- [shelljs/shelljs](https://github.com/shelljs/shelljs)
- [sindresorhus/electron-serve](https://github.com/sindresorhus/electron-serve)
- [yan-foto/electron-reload](https://github.com/yan-foto/electron-reload)


### TODO
- https://github.com/ArekSredzki/electron-release-server