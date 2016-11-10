angular.module('todoList').controller('ToDoCtrl', function($scope, storageService) {
    $scope.allTodos = storageService.get();

    $scope.createNewTodo = function() {
        storageService.create($scope.text);
        $scope.allTodos = storageService.get();
        $scope.text = null;
    };

    $scope.toggleCompleted = function (todo) {
      console.log(todo);
      storageService.overwrite(todo);
    };

    $scope.triggerUpdate = function (keypress, todo) {
    if (event.keyCode === 13){
      event.preventDefault();
      storageService.overwrite(todo);
      keypress.target.blur();
    }
    };

    $scope.deleteTodo = function(todo) {
      $scope.allTodos = storageService.delete(todo);
    };

    $scope.clearCompleted = function () {
      $scope.allTodos = storageService.completed();
    };

    $scope.showAll = function () {
      $scope.allTodos = storageService.get();
    };

    $scope.showActive = function () {
      $scope.allTodos = storageService.getBy(false);
    };

    $scope.showCompleted = function () {
      $scope.allTodos = storageService.getBy(true);
    };

});
