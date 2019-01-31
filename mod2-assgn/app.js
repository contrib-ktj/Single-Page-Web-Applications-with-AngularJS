( function() {
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',Shopping);

ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){
  var toBuy=this;
  toBuy.items = ShoppingListCheckOffService.get_to_buy();
  toBuy.buyItem= function (itemIndex) { ShoppingListCheckOffService.buy(itemIndex); }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought=this;
  alreadyBought.items = ShoppingListCheckOffService.get_bought();
}

function Shopping(){
  var serv=this;
  var to_buy=[{name:'cookies', qty:10},
              {name:'chips', qty:10},
              {name:'chocolates', qty:5},
              {name:'milk', qty:2},
              {name:'donuts', qty:3}];

  var bought=[];

  serv.buy=function(itemIndex){
    bought.push(to_buy[itemIndex]);
    to_buy.splice(itemIndex,1);
  }

  serv.get_to_buy=function(){
    return to_buy;
  }
  serv.get_bought=function(){
    return bought;
  }
}


})();
