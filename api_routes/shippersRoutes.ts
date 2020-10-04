
    const _shippersRepository = require('./shippersRepository');
    //const dbContext = require('../../database/dbContext');
    
    module.exports = function (router) {
        const categoryRepository = _categoryRepository(dbContext);router.route('api_routes/shippersRoutes')
            .get(categoryRepository.getAll)
            .post(categoryRepository.post);
            
    }

