module.exports = ({ env }) => {
  let config = {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    url: '/',
    serveAdminPanel: false,
  };
  return config;
};
