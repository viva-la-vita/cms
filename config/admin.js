module.exports = ({ env }) => {
  let config = {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
  };
  if (env('NODE_ENV') === 'production') {
    return {
      url: '/',
      serveAdminPanel: false,
      ...config
    };
  } else {
    return config;
  }
};
