angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'Tasks', function($scope, Tasks) {
		//Some Labels
		$scope.emptyMessage = "Sure you have a lot to do. Let's start!";
		$scope.panelTitle = "Your tasks";
		//Retreive task form local storage if exists any
		$scope.todos = Tasks.getLocalStorage("tasksList");
		$scope.showEmptyMsg = !taskChecker($scope.todos);

		/*
		@Description: Save into local storage taskList array new task added on input.
		*/
		$scope.save = function() {
			var me = $scope,
					list = me.todos;

			list.push(me.newToDo);
			Tasks.setLocalStorage(list);
			me.newToDo = "";
			//TODO: Find better way to track if exists tasks in order to hide or show empty message.
			$scope.showEmptyMsg = false;
		};

		/*
		@Description: Delete in local storage indicated task.
		*/
		$scope.delete = function(taskIndex) {
			var list = $scope.todos;

			list.splice(taskIndex,1);
			Tasks.setLocalStorage(list);
			$scope.showEmptyMsg = !taskChecker($scope.todos);
		};

		function taskChecker (totalTasks) {
			var exisitsTasks = false;

			if (totalTasks.length > 0) {
				exisitsTasks = true;
			}

			return exisitsTasks;
		};

	}]);