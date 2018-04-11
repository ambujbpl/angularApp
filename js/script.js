var myApp = angular.module("MyApp",[]);
myApp.controller('MyController', function ($scope) {
  $scope.ShowMe = false;
  $scope.ShowHide = function(attr){
    console.log("attr>>>",attr);
    if(attr == 'Intro'){
      console.log("attr>>>",attr);
      var x = data.Intro;
      $scope.names = x;

    }
    else if (attr == 'Features'){
      console.log("attr>>>",attr);
      var x = data.Features;
      $scope.names = x;

    }
    else{
      console.log("attr>>>",attr);
      var x = data.Advantages;
      $scope.names = x;

    }
    if($scope.ShowMe == false){
        $scope.ShowMe = true;
    }
  };
});

myApp.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
myApp.directive("w3TestDirective", function() {
    return {
        template : "Hello, This is my own Directive!"
    };
});
myApp.controller("myCtrlTWDB", function($scope){
  $scope.firstname1 = "John";
});
myApp.controller("myCtrlTime",function($scope,$timeout){
  $scope.myHeader = "Hello World!";
$timeout(function () {
    $scope.myHeader = "How are you today?";
}, 5000);
});
myApp.controller("myCtrlInterval", function($scope,$interval){
  $scope.theTime = new Date().toLocaleTimeString();
$interval(function () {
    $scope.theTime = new Date().toLocaleTimeString();
}, 1000);
});
myApp.controller("myCtrlHttp", function($scope, $http){
  $http.get("ajax.json")
.then(function(res) {
  console.log(res);
    $scope.myWelcome = res.data;
});
});
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});
