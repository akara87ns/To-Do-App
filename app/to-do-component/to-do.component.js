angular.module('toDoApp')
    .component('toDoApp', {
        templateUrl: 'app/to-do-component/to-do.template.html',
        controller: function ToDoController($scope) {
            $scope.tasks = []

            $scope.addToDoTask = function(task) {
                if ($scope.newTask) {
                    $scope.tasks.push(task);
                }
                $scope.newTask = "";
            }

            $scope.removeToDoTask = function(task) {

            }
        }
    });