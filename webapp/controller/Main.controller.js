sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.btp.zunit.controller.Main", {
        onInit() {
        },
        onButtonPress: function(){

            sap.m.MessageToast.show("Hello World");
        }
    });
});