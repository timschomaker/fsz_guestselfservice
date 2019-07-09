sap.ui.define([
	"sap/m/MessageBox",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (MessageBox, Controller, MessageToast) {
	"use strict";

	return Controller.extend("acando.fzj.FZJ_GastSelfService_Mock", {

		onSeeeef: function () {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.success(
				"Antrag wurde gespeichert", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},

		onComplete: function () {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.information(
				"Möchten Sie den Antrag wirklich abschließen?", {
					actions: ["Abschließen", sap.m.MessageBox.Action.CLOSE],
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					onClose: function (sAction) {
						MessageToast.show("Antrag wurde abgeschlossen und weitergeleitet!");
					}
				}
			);
		}
	});
});