
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/InSearchNext/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/InSearchNext"
  },
  {
    "renderMode": 2,
    "route": "/InSearchNext/add"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: 'bd595e86aa85235f88426b41845f9acd0063cd0881987e8126cd5f19816238e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '7489dc5b52a4b8670cad6fcba2723a6e58e8ae18e8b9e470e79166968784e57c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'add/index.html': {size: 2949, hash: '30419f9a2a6936f5acf20914ecf6335bdf4421ea52ac24c0644ea3af8a33eb25', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2710, hash: 'bae820d026f8d869e2d53c37a7444cfbb928b1405f160b50ffa306d343ad163d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
