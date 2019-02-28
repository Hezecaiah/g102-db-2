module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/vuehumans'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
