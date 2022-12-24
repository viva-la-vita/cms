export default ({ env }) => ({
  connection: {
    client: 'mysql',

    connection: {
      host: 'mysql',
      port: 3306,
      database: 'strapi',
      user: 'strapi',
      password: env("DATABASE_PASSWORD"),
    },
    debug: false,
  },
});
