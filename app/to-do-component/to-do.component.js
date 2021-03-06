angular.module('toDoApp')
    .component('toDoApp', {
        templateUrl: 'app/to-do-component/to-do.template.html',
        controller: function ToDoController($scope) {
            $scope.li = false;

            $scope.tasks = [];

            // To-Do tasks will be saved on local storage
            var localStorageData = localStorage['data'];

            if (localStorageData !== undefined) {
                $scope.tasks = JSON.parse(localStorageData);
            }

            $scope.addToDoTask = function(taskItem) {
                if ($scope.newTask) {
                    $scope.tasks.push({
                        taskName: taskItem,
                        id: new Date().getTime()
                    });
                }
                $scope.newTask = "";
                
                localStorage['data'] = JSON.stringify($scope.tasks);
            }

            $scope.removeToDoTask = function(taskItem) {
                $scope.taskIndex = $scope.tasks.indexOf(taskItem);
                $scope.tasks.splice($scope.taskIndex, 1);

                localStorage['data'] = JSON.stringify($scope.tasks);
            }
        }
    });