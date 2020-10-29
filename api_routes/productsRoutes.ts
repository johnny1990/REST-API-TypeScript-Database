const _productRepository = require('./productRepository');

module.exports = function (router) {
    const productRepository = _productRepository(dbContext);router.route('api_routes/productsRoutes')
        .get(productRepository.getAll)
        .post(productRepository.post);
        
}