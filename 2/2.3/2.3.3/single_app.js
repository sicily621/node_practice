var Single = require('./single_class');
var singleObj1 = new Single('2018-05-31');
var singleClass1 = singleObj1.getInstance('2018-05-31');
singleClass1.show();
var singleObj2 = new Single('2018-05-30');
var singleClass2 = singleObj2.getInstance('2018-05-30');
singleClass2.show();
