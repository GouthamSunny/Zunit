/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/sap/btp/zunit/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
