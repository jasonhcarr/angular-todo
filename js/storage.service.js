angular.module('todoList').service('storageService', function (localStorageService) {
  function getTodos() {
    return localStorageService.get('localStorageTodos') || [];
  }

  function setTodos(todos) {
    localStorageService.set('localStorageTodos', todos);
  }

  function findTodoById(todosInStorage, id) {
    var todoToReturn;
    todosInStorage.forEach(function (item) {
      if (item.id === id) {
        todoToReturn = item;
      }
    });
    return todoToReturn;
  }

  function toggleCompleted(todo) {
    todo.completed = !todo.completed;
    var todosInStorage = getAllTodos();
    var todoToUpdate = findTodoById(todosInStorage, todo.id);

    angular.copy(todo, todoToUpdate);

    setAllTodos(todosInStorage);
  }

  function updateText(todo, todoText) {
    todo.text = todoText;
    var todosInStorage = getAllTodos();
    var todoToUpdate = findTodoById(todosInStorage, todo.id);

    angular.copy(todo, todoToUpdate);

    setAllTodos(todosInStorage);
  }
});
