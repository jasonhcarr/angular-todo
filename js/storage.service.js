angular.module('todoList').service('storageService', function (localStorageService, ListItem) {
  function getTodos() {
    return localStorageService.get('localStorageTodos') || [];
  }

  function setTodos(todos) {
     localStorageService.set('localStorageTodos', todos);
  }

  function deleteTodo(todo) {
    var todosInStorage = getTodos();
    for (var i = 0; i < todosInStorage.length; i++) {
      if (todosInStorage[i].id === todo.id) {
        todosInStorage.splice(i, 1);
      }
    }
    setTodos(todosInStorage);
    return todosInStorage;
  }

  function overwriteTodo(todo) {
    var todosInStorage = getTodos();
    for (var i = 0; i < todosInStorage.length; i++) {
      if (todosInStorage[i].id === todo.id) {
        todosInStorage[i] = todo;
      }
    }
    setTodos(todosInStorage);
  }

   function create(todoText) {
    var todosStorage = getTodos();
    todosStorage.push(new ListItem({text: todoText}));
    setTodos(todosStorage);
    return todosStorage;
}

  function clearCompleted() {
    var todosInStorage = getTodos();
    for (var i = todosInStorage.length-1; i >= 0; i--) {
      if (todosInStorage[i].completed) {
        todosInStorage.splice(i, 1);
      }
    }
    setTodos(todosInStorage);
    return todosInStorage;

  }

  function getByCompleted (value) {
    todosReturn = [];
    var todos = getTodos();
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].completed === value)
      todosReturn.push(todos[i]);
    }
    return todosReturn;
  }

  return {
  get: getTodos,
  set: setTodos,
  overwrite: overwriteTodo,
  create: create,
  delete: deleteTodo,
  completed: clearCompleted,
  getBy: getByCompleted
};

});
