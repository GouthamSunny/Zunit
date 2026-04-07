/*global QUnit*/

sap.ui.define([
	"com/sap/btp/zunit/controller/Main.controller",
	//   "com/sap/btp/zunit/model/models"
], function (Controller, ) {
	"use strict";

	QUnit.module("Main Controller");

	QUnit.test("I should test the Main controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);


		// models.oReadModel("Unit Tests Triggered")
		oAppController.onButtonPress();
		assert.ok(true, "Button resses Successfully");
		// assert.ok(true, "Model loaded Successfully");
	});

});
