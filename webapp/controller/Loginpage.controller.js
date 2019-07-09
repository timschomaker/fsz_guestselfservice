sap.ui.define([
	"sap/m/MessageBox",
	"sap/ui/core/mvc/Controller"
], function (MessageBox, Controller) {
	"use strict";

	return Controller.extend("acando.fzj.FZJ_GastSelfService_Mock.controller.Loginpage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf acando.fzj.FZJ_GastSelfService_Mock.view.Loginpage
		 */
		onInit: function () {

		},

		onLogin: function () {
			if (this._checkLogin()) {
				this.getOwnerComponent().getRouter().navTo("Targetdetail", {});
			} else {
				this._showPopup();
			}
		},

		_checkLogin: function () {
			if (this.getView().byId("useridInput").getValue() === "fzj_mehmet_uenal") {
				return true;
			} else {
				return false;
			}
		},

		_showPopup: function () {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.warning(
				"Falscher Username oder Passwort", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},

		onLiveChangeUser: function (oEvent) {
			this._checkInputNotEmpty();
		},

		onLiveChangePassword: function (oEvent) {
			this._checkInputNotEmpty();
		},

		_checkInputNotEmpty: function () {
			if (this.getView().byId("passwordInput").getValue() !== "" && this.getView().byId("useridInput").getValue() !== "") {
				this.getView().byId("acceptButton").setEnabled(true);
			} else {
				this.getView().byId("acceptButton").setEnabled(false);
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf acando.fzj.FZJ_GastSelfService_Mock.view.Loginpage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf acando.fzj.FZJ_GastSelfService_Mock.view.Loginpage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf acando.fzj.FZJ_GastSelfService_Mock.view.Loginpage
		 */
		//	onExit: function() {
		//
		//	}

	});

});