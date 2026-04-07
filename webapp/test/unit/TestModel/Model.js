/*global QUnit*/

sap.ui.define([
    "com/sap/btp/zunit/model/models"
], function (models) {
    "use strict";

    QUnit.module("Model Folder");

    QUnit.test("I should test the Model file", function (assert) {
        models.oReadModel("Unit Tests Triggered")
        assert.ok(true, "Model loaded Successfully");
    });

});
