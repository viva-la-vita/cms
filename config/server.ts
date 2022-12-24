export default ({ env }) => ({
  host: '0.0.0.0',
  port: 3000,
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('NODE_ENV') === 'production' ? 'https://api.viva-la-vita.org' : 'http://localhost:3000'
});
