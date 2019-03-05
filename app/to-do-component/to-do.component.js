angular.module('toDoApp')
    .component('toDoApp', {
        templateUrl: 'app/to-do-component/to-do.template.html',
        controller: function ToDoController($scope) {
            $scope.li = false;

            $scope.tasks = []

            $scope.addToDoTask = function(taskItem) {
                if ($scope.newTask) {
                    $scope.tasks.push({
                        taskName: taskItem,
                        id: new Date().getTime()
                    });
                }
                $scope.newTask = "";
                // console.log($scope.li);
            }

            $scope.removeToDoTask = function(taskItem) {
                $scope.taskIndex = $scope.tasks.indexOf(taskItem);
                $scope.tasks.splice($scope.taskIndex, 1);
            }
        }
    });