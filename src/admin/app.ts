import favicon from './extensions/favicon.png';
import logo from './extensions/logo.png';

export default {
  config: {
    auth: { logo },
    head: { favicon },
    menu: { logo },
    locales: ['zh-Hans', 'zh'],
  },
  bootstrap(app) {
    console.log(app);
  },
};
