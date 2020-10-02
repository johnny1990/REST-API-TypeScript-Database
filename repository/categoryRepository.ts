var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;

function CategoryRepository(dbContext)
 {
     function getCategories(req, res)
      {
          dbContext.get("getCategories", function (error, data) {
                return res.json(response(data, error));
            });}
            
            function getCategory(req, res) {
       if (req.params.categoryID) {
            var parameters = [];
            parameters.push({ name: 'CategoryID', type: TYPES.Int, val: req.params.categoryID });
            dbContext.getQuery("GetCategory", parameters, false, function (error, data) {
                if (data) {
                    req.data = data[0];
                    return res.json(response(data, error));
                }
                return res.sendStatus(404);
            });
        }
    }
    
    function postCategory(req, res) 
    {
        var parameters = [];
        parameters.push({ name: 'CategoryName', type: TYPES.nVarChar, val: req.body.CategoryName });
        parameters.push({ name: 'Description', type: TYPES.nText, val: req.body.Description });
        parameters.push({ name: 'Picture', type: TYPES.Image, val: req.body.Picture });
        dbContext.post("InsertUpdateCategory", parameters, function (error, data) {
            return res.json(response(data, error));
        });
    }
    return {
        getAll: getCategories,
        get: getCategory,
        post: postCategory 
    }
}

module.exports = CategoryRepository;