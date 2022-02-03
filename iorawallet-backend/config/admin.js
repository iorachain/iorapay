module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e6117b1a4c671d2934486c44af6470c'),
  },
});
