angular
	.module('app')
	.factory('Tasks', function() {
		return {
			getLocalStorage: function (key) {
				var list = localStorage.getItem(key);

			  if (!list) {
			    list = [];
			  } else {
			    list = JSON.parse(list);
			  }
			  
			  return list;
			},
			setLocalStorage: function (todos) {
				localStorage.setItem("tasksList", JSON.stringify(todos));
			}
		};
	});