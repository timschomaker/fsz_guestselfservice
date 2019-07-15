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
			var that = this;
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.information(
				"Möchten Sie den Antrag wirklich abschließen?", {
					actions: ["Abschließen", sap.m.MessageBox.Action.CLOSE],
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					onClose: function (sAction) {
						MessageToast.show("Antrag wurde abgeschlossen und weitergeleitet!");
						that._disableCompleteButton();
					}
				}
			);
		},

		_disableCompleteButton: function () {
			this.getView().byId("Forward").setEnabled(false);
		},

		onLogout: function () {
			var that = this;
			MessageBox.show(
				"Möchten Sie sich ausloggen?", {
					icon: MessageBox.Icon.QUESTION,
					actions: [MessageBox.Action.YES, MessageBox.Action.NO],
					onClose: function (sAction) {
						if (sAction === "YES") {
							var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
							oRouter.navTo("Loginpage", true);
						}
					}
				});
		}
	});
});