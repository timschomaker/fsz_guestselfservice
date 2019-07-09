/*global QUnit*/

sap.ui.define([
	"acando/fzj/FZJ_GastSelfService_Mock/controller/detail.controller"
], function (Controller) {
	"use strict";

	QUnit.module("detail Controller");

	QUnit.test("I should test the detail controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});