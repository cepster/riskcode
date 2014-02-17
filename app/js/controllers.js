'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);

controllers.controller('RiskCodes', function($scope, DataService){
	$scope.title = "Risk Assessment Tool";

	$scope.categories = DataService.getCategories;
	$scope.risks = DataService.getRisks;

	$scope.searchRisks = {};

	$scope.getRisksByCategory = function(categoryCode){
		var returnArr = [];
		angular.forEach($scope.risks, function(risk){
			if(risk.category == categoryCode){
				returnArr.push(risk);
			}
		});

		return returnArr;
	};

	$scope.getSelectedRisks = function(){
		var returnArr = [];

		angular.forEach($scope.risks, function(risk){
			if(risk.selected === 'true'){
				returnArr.push(risk);
			}
		});

		return returnArr;
	};

	$scope.clearSelected = function(){
		angular.forEach($scope.risks, function(risk){
			risk.selected = 'false';
		});
	}
});

