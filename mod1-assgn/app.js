(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.inp="";
    $scope.msg="";
    $scope.msg_col="";
    $scope.border_col="";
    $scope.DisplayMsg=function () {
      if($scope.inp===''){
        $scope.msg="Please enter data first";
        $scope.msg_col="Red"
        $scope.border_col="Red";
      }
      else {
        var words=$scope.inp.split(',');
        var count=0;
        for(var i in words)
          if(words[i]==='')
            continue;
          else
            count++;
        if(count===0){
          $scope.msg="Please enter data first";
          $scope.msg_col="Red"
          $scope.border_col="Red";
        }
        else if (count<=3){
          $scope.msg="Enjoy!";
          $scope.msg_col="Green"
          $scope.border_col="Green";
        }
        else{
          $scope.msg="Too much!";
          $scope.msg_col="Green"
          $scope.border_col="Green";
        }
      }
    }
  }
}
)();
