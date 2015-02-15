/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var marvelousApp = angular.module("marvelousApp", []);
marvelousApp.factory("column1", function () {
    var items = {};
    items.data = [{title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}];
    return items;
});
marvelousApp.factory("column2", function () {
    var items = {};
    items.data = [{title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}, {title: 'ITEM'}];
    return items;
});

function ItemsController($scope, column1, column2) {

    $scope.column1 = column1;
    $scope.column2 = column2;

    $scope.deleteItem = function (index, column) {
        eval("$scope." + column + ".data").splice(index, 1);
    }

    $scope.addItem = function (index) {

        var column = $scope.newItemColumn;
        column = column.replace(/\s+/g, '');
        column = column.toLowerCase();

        var text = $scope.newItemName;
        var id = eval("$scope." + column + ".data").length + 1;

        eval("$scope." + column + ".data").push({
            id: id,
            title: text
        });

    };
}
