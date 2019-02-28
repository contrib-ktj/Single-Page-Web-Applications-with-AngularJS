(function () {
'use strict';

angular.module('MenuApp')
.controller('mainCategoriesController', mainCategoriesController);

// 'item' is injected through state's resolve
mainCategoriesController.$inject = ['categories']
function mainCategoriesController(categories) {
  var mainCategories = this;
  mainCategories.items=categories;
}

})();
