/*global QUnit*/

sap.ui.define([
	"app/salesorderdisplay/controller/SalesOrderView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SalesOrderView Controller");

	QUnit.test("I should test the SalesOrderView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
