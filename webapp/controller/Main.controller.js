sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("com.sap.btp.zunit.controller.Main", {
        onInit() {
        },
        onButtonPress: function(){

            MessageToast.show("Hello World");
        }
    });
});