//de modificat
var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;

function ProductRepository(dbContext)
 {
     function getProducts(req, res)
      {
          dbContext.get("getProducts", function (error, data) {
                return res.json(response(data, error));
            });}
            
            function getProduct(req, res) {
       if (req.params.ProductId) {
            var parameters = [];
            parameters.push({ name: 'ProductId', type: TYPES.Int, val: req.params.ProductId });
            dbContext.getQuery("GetProducts", parameters, false, function (error, data) {
                if (data) {
                    req.data = data[0];
                    return res.json(response(data, error));
                }
                return res.sendStatus(404);
            });
        }
    }
    
    function postProduct(req, res) 
    {
        var parameters = [];
        parameters.push({ name: 'ProductName', type: TYPES.nVarChar, val: req.body.ProductName });
        parameters.push({ name: 'SupplierID', type: TYPES.int, val: req.body.SupplierID });
        parameters.push({ name: 'CategoryID', type: TYPES.int, val: req.body.CategoryID });
        parameters.push({ name: 'QuantityPerUnit', type: TYPES.int, val: req.body.QuantityPerUnit });
        parameters.push({ name: 'UnitPrice', type: TYPES.Decimal, val: req.body.UnitPrice });
        parameters.push({ name: 'UnitsInStock', type: TYPES.int, val: req.body.UnitsInStock });
        parameters.push({ name: 'UnitsOnOrder', type: TYPES.int, val: req.body.UnitsOnOrder });
        parameters.push({ name: 'ReorderLevel', type: TYPES.int, val: req.body.ReorderLevel });
        parameters.push({ name: 'Discontinued', type: TYPES.Bit, val: req.body.Discontinued });
        dbContext.post("InsertUpdateProducts", parameters, function (error, data) {
            return res.json(response(data, error));
        });
    }
    return {
        getAll: getProducts,
        get: getProduct,
        post: postProduct 
    }
}

module.exports = ProductRepository;