var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;

function ShippersRepository(dbContext)
 {
     function getShippers(req, res)
      {
          dbContext.get("getShipper", function (error, data) {
                return res.json(response(data, error));
            });}
            
            function getShipper(req, res) {
       if (req.params.shipperID) {
            var parameters = [];
            parameters.push({ name: 'ShipperID', type: TYPES.Int, val: req.params.shipperID });
            dbContext.getQuery("GetShippers", parameters, false, function (error, data) {
                if (data) {
                    req.data = data[0];
                    return res.json(response(data, error));
                }
                return res.sendStatus(404);
            });
        }
    }
    
    function postShipper(req, res) 
    {
        var parameters = [];
        parameters.push({ name: 'CompanyName', type: TYPES.nVarChar, val: req.body.CompanyName });
        parameters.push({ name: 'Phone', type: TYPES.nText, val: req.body.Phone });
        dbContext.post("InsertUpdateShipper", parameters, function (error, data) {
            return res.json(response(data, error));
        });
    }
    return {
        getAll: getShippers,
        get: getShipper,
        post: postShipper 
    }
}

module.exports = ShippersRepository;