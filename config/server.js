module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
<<<<<<< HEAD
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '828811e8aace1aa789067dffc85af376'),
    },
=======
  app: {
    keys: env.array('APP_KEYS')
>>>>>>> 8a0cf8309f75fae57d0a32f612e2daa68d6943f8
  },
});
