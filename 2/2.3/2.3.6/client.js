var ProductFactory = require('./productFactory');
var ProductA = ProductFactory.createProduct('productA');
ProductA.getProduct();
var ProductB = ProductFactory.createProduct('productA');
ProductB.getProduct();
