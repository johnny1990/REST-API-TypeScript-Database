const _categoryRepository = require('./categoryRepository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const categoryRepository = _categoryRepository(dbContext);router.route('api_routes/categoryRoutes')
        .get(categoryRepository.getAll)
        .post(categoryRepository.post);
        
}