(function(){
	'use strict'
	angular.module('MenuApp')
	.config(RoutesConfig);
	RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

	function RoutesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'src/menuapp/templates/home.template.html'
		})
		.state('categories',{
			url:'/categories',
			templateUrl: 'src/menuapp/templates/categories.state.template.html',
			controller: 'mainCategoriesController as mainCategories',
			resolve:{
				categories: ['MenuDataService', function (MenuDataService){
					 return MenuDataService.getAllCategories();			
				}]
			}
		}
		)
		.state('items',{
			url: '/items/{catId}',
			templateUrl: 'src/menuapp/templates/items.state.template.html',
    		controller: 'categoryItemsController as categoryItems',
    		resolve: {
      		items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
               return MenuDataService.getItemsForCategory($stateParams.catId)
                .then(function (response) {
                  return response.data['menu_items'];
                });
            }]
    	}
		})
	}
})();