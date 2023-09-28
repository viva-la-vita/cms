export default ({ env }) => ({
  // ...
  navigation: {
    enabled: true,
    config: {
      contentTypes: ['api::article.article'],
      contentTypesNameFields: {
        'api::article.article': ['title']
      },
      allowedLevels: 2,
    }
  },
  upload: {
    config: {
      provider: 'strapi-provider-upload-aws-s3-advanced',
      providerOptions: {
        accessKeyId: env('ACCESS_KEY_ID'),
        secretAccessKey: env('SECRET_ACCESS_KEY'),
        region: 'auto',
        endpoint: env('ENDPOINT'),
        params: {
          Bucket: env('BUCKET'),
        },
        baseUrl: env("ASSETS_URL"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
