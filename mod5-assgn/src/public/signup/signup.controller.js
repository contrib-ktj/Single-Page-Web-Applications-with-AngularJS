(function() {
    'use strict';
    angular.module('public').
    controller('SignupController', signupController);

    signupController.$inject = ['MenuService'];

    function signupController (MenuService) {
        var formCtrl = this;

        formCtrl.user = {};
        formCtrl.favoriteDish = {};

        formCtrl.showError = false;       // When this value is true error about the favorite dish wiil be shown
        formCtrl.showMessage = false;     // When this value is true message about successfull signup will be shown

        formCtrl.signup = function(form) {
            formCtrl.showError = false;
            formCtrl.showMessage = false;
            // If the form is not valid don't submit
            if(form.$invalid) {
                //console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish(formCtrl.user.favoriteDish).then(function(response) {
                formCtrl.user.favoriteDishDetails = response.data;
                //console.log(formCtrl.favoriteDish);
                MenuService.saveUser(formCtrl.user);
                formCtrl.showMessage = true;
            }, function(error) {
                //console.log(error);
                formCtrl.showError = true;
            });

        }
    };
})();