const server = require('./index');

const PORT = 8012;

server.listen(PORT, () => {
  console.log('Dashboard listening on %s', PORT);
});
