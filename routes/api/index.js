const router = require('express').Router();

const routes = ['brands', 'likedSneakers', 'orders','sneakers', 'users'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
