(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', MyToBuyController)
.controller('AlreadyBoughtController', MyAlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


MyToBuyController.$inject = ['ShoppingListCheckOffService'];

function MyToBuyController(ShoppingListCheckOffService) {

  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();
  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

}


/////////////

MyAlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function MyAlreadyBoughtController(ShoppingListCheckOffService) {

  var showList2 = this;
  showList2.boughtItems = ShoppingListCheckOffService.getItemsBought();
  }


function ShoppingListCheckOffService() {
var service = this;

  // List of shopping items
var items = [];
var boughtItems = [];

var item1 = {
  name: 'cookies',
  quantity: '10'
};
var item2 = {
  name: 'Chips',
  quantity: '20'
};
var item3 = {
  name: 'Soda',
  quantity: '1'
};
var item4 = {
  name: 'Jellies',
  quantity: '2'
};
var item5 = {
  name: 'Nuts',
  quantity: '4'
};
items.push(item1);
items.push(item2);
items.push(item3);
items.push(item4);
items.push(item5);

service.getItems = function () {
    return items;
  };

service.getItemsBought = function () {
      return boughtItems;
};

service.removeItem = function (itemIdex) {
  boughtItems.push(items[itemIdex]);
  items.splice(itemIdex, 1);
  };

}


})();
