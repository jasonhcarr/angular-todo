angular.module('todoList').factory('ListItem', function () {
  return function ListItem(properties) {
    properties = properties || {};
    this.id = Date.now();
    this.text = properties.text || '';
    this.completed = properties.completed || false;
};

});
