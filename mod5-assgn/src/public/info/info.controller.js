(function() {
    'use strict';

    angular.module('public')
    .controller('InfoController', infoController);

    infoController.$inject = ['MenuService', 'ApiPath'];

    function infoController(MenuService, ApiPath) {
        var infoCtrl = this;
        infoCtrl.apiPath = ApiPath;

        infoCtrl.signedUp = false;

        infoCtrl.user = MenuService.getUser();
        //console.log('User is', infoCtrl.user);
        if (angular.equals(infoCtrl.user, {})) {
            infoCtrl.signedUp = false;
        } else {
            infoCtrl.signedUp = true;
        }
    };
})();