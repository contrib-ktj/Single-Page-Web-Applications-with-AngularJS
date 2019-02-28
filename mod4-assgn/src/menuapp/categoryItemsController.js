(function () {
'use strict';

angular.module('MenuApp')
.controller('categoryItemsController', categoryItemsController);

// 'item' is injected through state's resolve
categoryItemsController.$inject = ['items']
function categoryItemsController(items) {
  var categoryItems = this;
  categoryItems.items=items;
  //categoryItems.category=category;
}

})();
