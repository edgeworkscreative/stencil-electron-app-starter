const {exec} = require('shelljs');

exec('tsc ./Electron/App.ts --lib es2015,dom --target es5', {async: true}).stdout.on('end', () => {
  exec('npx stencil build --dev --watch --serve --es5 --open=false', {async: true}).stdout.on('data', (data) => {
    if (data.includes('build finished') && !data.includes('rebuild finished')) {
      console.log('build finished - launching electron');
      exec('npx electron ./Electron/App.js', {async: true});
    }
  });
});


