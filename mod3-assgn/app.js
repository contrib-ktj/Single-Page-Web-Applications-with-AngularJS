(function () {
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('apiBasePath','https://davids-restaurant.herokuapp.com')
  .directive('foundItems',foundItems);

  MenuSearchService.$inject=['$http','apiBasePath'];
  function MenuSearchService($http,apiBasePath) {
    var service=this;
    service.getMatchedMenuItems = function(searchTerm){
    service.foundItems=[];
    var promise=  $http({
        method:"GET",
        url:(apiBasePath+"/menu_items.json")
      })
    promise.then( function (response){
        for (var i=0; i<response.data.menu_items.length;i++) {
          if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !=-1) {
            service.foundItems.push(response.data.menu_items[i]);
          }
        }
      });
    return service.foundItems;
    }

  }

NarrowItDownController.$inject=['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var narrower=this;
   narrower.find = function(){
  if (narrower.searchTerm===undefined || narrower.searchTerm ===''){
    narrower.found=[];
  }else {
     narrower.found = MenuSearchService.getMatchedMenuItems(narrower.searchTerm);
  }
   //console.log(narrower.searchTerm);
   //console.log(narrower.found);
   }
   narrower.remove=function (index){
      narrower.found.splice(index,1);
    }
}

function foundItems (){
  return {
    templateUrl:'/loader/itemsloaderindicator.template.html',
    scope : {
      items: '<',
      remove: '&method'
    }
  };
  }

})()
