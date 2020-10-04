var TYPES = require('tedious').TYPES;
const Category = {
    categoryId: TYPES.Int,
    categoryName: TYPES.nVarChar,
    Description: TYPES.VarChar,
    Picture: TYPES.Image
}