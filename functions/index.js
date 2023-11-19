import api from './router.js';



export default {

  async fetch(request, env, ctx) {

    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/')) {

      return api.handle(request);
    }
  },
};