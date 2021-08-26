var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup')

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup('Shoes n such', [boots, sneakers, flipFlops])

var group_food = new CatalogGroup('Food for while you try on shoes', [
    new CatalogItem('Milkshake', 5.99),
    new CatalogItem('French Fries', 3.99 )
])

var keychain = new CatalogItem('key Chain', .99)

var catalog = new CatalogGroup('Food and Shoes', [group_shoes, group_food, keychain])


catalog.print()
console.log(catalog.total)


// console.log( 'boots total: ', `$${boots.total}` );
// console.log('shoes total: ', `$${group_shoes.total}`)

// boots.print();
// sneakers.print();

// group_shoes.print()
// console.log(group_shoes.total)