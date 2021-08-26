var Shopper = require('./Shopper');
var { InventoryItem, GoldenInventoryItem, DiamondInventoryItem } = require('./InventoryItem');

var alex = new Shopper('Alex', 5000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var golden_necklace = new GoldenInventoryItem(necklace)
var diamond_golden_necklace = new DiamondInventoryItem(golden_necklace)

var diamond_walkman = new DiamondInventoryItem(walkman)

alex.purchase(diamond_golden_necklace);
alex.purchase(diamond_walkman);

alex.printStatus();

diamond_walkman.print()