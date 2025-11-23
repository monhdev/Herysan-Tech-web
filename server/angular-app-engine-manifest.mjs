
export default {
  basePath: 'https://monhdev.github.io/Herysan-Tech-web',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
