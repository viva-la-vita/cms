module.exports = ({ env }) => {
  let config = {
    host: '0.0.0.0',
    port: 3000,
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
  if (env('NODE_ENV') === 'production') {
    return {
      url: 'https://api.viva-la-vita.org',
      ...config
    };
  } else {
    return config;
  }
};
