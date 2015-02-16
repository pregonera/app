angular.module('starter.controllers', [])

.controller('RadioCtrl', function($scope,$cordovaMedia, $ionicLoading) {
    
    var media;
    
    $scope.data = { 'volume' : '50' };
    
    $scope.play = function(src) {
        media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
        mediaPlayer.setVolume(0.2);
    }
    
    $scope.setVolume = function(volume) {
        mediaPlayer.setVolume(1/volume);
    }
 
    var timeoutId = null;
    
    $scope.$watch('data.volume', function() {
        
        
        console.log('Has changed');
        
        if(timeoutId !== null) {
            console.log('Ignoring this movement');
            return;
        }
        
        console.log('Not going to ignore this one');
        timeoutId = $timeout( function() {
            
            console.log('It changed recently!');
            
            $timeout.cancel(timeoutId);
            timeoutId = null;
            
            mediaPlayer.setVolume(1/$scope.data.volume);
        }, 1000); 
        
    })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
