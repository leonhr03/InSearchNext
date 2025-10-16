
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/add"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 496, hash: '17eb3d7c98897414c6970cc0985f84004c298de95c6326b1593f09683d8696a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: 'a1c6f5d43e311b46944e9c3cd6b40aca3d535b577eaac767cc272078d79610fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2693, hash: 'e6d2232f2c047b330923ec09148f74166e080d77e6ad3f6679c5bb0cca393bcc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add/index.html': {size: 2936, hash: '808b7f32f2d89bd72988acdd45036a6d184d41c7461e75a906ffe821de1f22dc', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
