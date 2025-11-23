
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://monhdev.github.io/Herysan-Tech-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Herysan-Tech-web"
  },
  {
    "renderMode": 2,
    "route": "/Herysan-Tech-web/carousel"
  },
  {
    "renderMode": 2,
    "route": "/Herysan-Tech-web/scroll"
  },
  {
    "renderMode": 2,
    "route": "/Herysan-Tech-web/software"
  },
  {
    "renderMode": 2,
    "route": "/Herysan-Tech-web/hardware"
  },
  {
    "renderMode": 2,
    "route": "/Herysan-Tech-web/inicio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Herysan-Tech-web",
    "route": "/Herysan-Tech-web/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 670, hash: 'f8139811824226cb9bacd366457ad73322ded24f5388c1ad5064755b2a7cb0df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 991, hash: '35c4ac44b9d5acafa5b8a1a06019cfacbb5c11b307652d7328116bbba8430de0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'carousel/index.html': {size: 9189, hash: '62924495edcf358d1a45a0e1e6217d8e758fa1265bdb0127bd016b6f557eaddc', text: () => import('./assets-chunks/carousel_index_html.mjs').then(m => m.default)},
    'hardware/index.html': {size: 4667, hash: 'b31a8abc3ec4fe5b69291907d2f43b5835c73cab00ebf873309a7038f5fb3432', text: () => import('./assets-chunks/hardware_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 1924, hash: '91ba789cca9c63e24580e0a73dda7670e05aefaf48360c4565a2f0c457d188d3', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5413, hash: '420d9a4f9c31d8b7231f1dca0dd17c53b73b17c710bd3988dda052481f601b9e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'software/index.html': {size: 4594, hash: '0fd4b36528497ea2b80e071d5605ded415eee0e1f20f045f272301b3a333e2a7', text: () => import('./assets-chunks/software_index_html.mjs').then(m => m.default)},
    'scroll/index.html': {size: 7859, hash: '12e48d1633994031b781cbb3c8c44ad74fae441945c3cef87066735242d2f7c9', text: () => import('./assets-chunks/scroll_index_html.mjs').then(m => m.default)},
    'styles-JL36JXQO.css': {size: 67, hash: 'OizGlelK/TQ', text: () => import('./assets-chunks/styles-JL36JXQO_css.mjs').then(m => m.default)}
  },
};
