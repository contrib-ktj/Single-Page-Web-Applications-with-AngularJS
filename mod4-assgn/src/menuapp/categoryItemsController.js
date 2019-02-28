(function () {
'use strict';

angular.module('MenuApp')
.controller('categoryItemsController', categoryItemsController);

// 'item' is injected through state's resolve
categoryItemsController.$inject = ['items','$stateParams']
function categoryItemsController(items,$stateParams) {
  var categoryItems = this;
  categoryItems.items=items;
  categoryItems.category=$stateParams.categoryName;
}

})();
