
  var TYPES = require('tedious').TYPES;
const Product = {
    ProductId: TYPES.Int,
    ProductName: TYPES.nVarChar,
    SupplierID: TYPES.Int,
    CategoryID: TYPES.Int,
    QuantityPerUnit: TYPES.Int,
    UnitPrice: TYPES.Decimal,
    UnitsInStock: TYPES.Int,
    UnitsOnOrder: TYPES.Int,
    ReorderLevel:TYPES.Int,
    Discontinued:TYPES.Boolean
}