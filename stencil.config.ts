import {Config} from '@stencil/core';

export const config: Config = {
  globalScript:  'src/global/globalScript.ts',
  globalStyle:   'src/global/app.css',
  outputTargets: [
    {
      type: 'www'
    }
  ],
  devServer:     {
    openBrowser: false
  }
};
