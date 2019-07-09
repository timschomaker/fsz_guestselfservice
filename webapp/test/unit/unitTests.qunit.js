/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"acando/fzj/FZJ_GastSelfService_Mock/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});