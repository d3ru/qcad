// Auto generated by Testing Dashboard
// File        : scripts/Draw/Ellipse/EllipseDD/Tests/EllipseDDTest00.js
// Timestamp   : 2015-04-21 18:04:39
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function EllipseDDTest00() {
    TdbTest.call(this, 'scripts/Draw/Ellipse/EllipseDD/Tests/EllipseDDTest00.js');
}

EllipseDDTest00.prototype = new TdbTest();

EllipseDDTest00.prototype.test00 = function() {
    qDebug('running EllipseDDTest00.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::EllipseToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::EllipseToolsPanel::EllipseDDButton');
    this.setToolOption('EllipseDD/XDiameter', '100');
    this.setToolOption('EllipseDD/YDiameter', '50');
    this.setToolOption('EllipseDD/Angle', '0');
    this.setToolOption('EllipseDD/ReferencePoint', '4');
    this.updateToolOptions();
    var p = new RVector(30.3, 22.3);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    // key: '1'
    this.pressAndReleaseKeyOnGv(0x31, 0);
    this.setZoom(10, new RVector(7, 4.6, 0, true));
    var p = new RVector(0.2, 29.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKeyOnGv(0x2d, 0);
    // key: '2'
    this.pressAndReleaseKeyOnGv(0x32, 0);
    this.setZoom(1.1215665478461516, new RVector(217.568, 177.963, 0, true));
    var p = new RVector(160.474387, 30.674151);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(172.956928, 58.314062);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    // key: '3'
    this.pressAndReleaseKeyOnGv(0x33, 0);
    this.setZoom(1.1215665478461516, new RVector(98.9841, 229.676, 0, true));
    var p = new RVector(320.072585, 25.32449);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '4'
    this.pressAndReleaseKeyOnGv(0x34, 0);
    this.setZoom(1.1215665478461516, new RVector(98.9841, 229.676, 0, true));
    var p = new RVector(0.876189, -61.161684);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '5'
    this.pressAndReleaseKeyOnGv(0x35, 0);
    this.setZoom(1.1215665478461516, new RVector(98.9841, 229.676, 0, true));
    var p = new RVector(156.907947, -57.595244);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '6'
    this.pressAndReleaseKeyOnGv(0x36, 0);
    this.setZoom(1.1215665478461516, new RVector(98.9841, 229.676, 0, true));
    var p = new RVector(320.072585, -62.053294);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '7'
    this.pressAndReleaseKeyOnGv(0x37, 0);
    this.setZoom(1.1215665478461516, new RVector(98.9841, 229.676, 0, true));
    var p = new RVector(-1.798641, -146.756248);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '8'
    this.pressAndReleaseKeyOnGv(0x38, 0);
    this.setZoom(1.1215665478461516, new RVector(98.9841, 229.676, 0, true));
    var p = new RVector(160.474387, -147.647858);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '9'
    this.pressAndReleaseKeyOnGv(0x39, 0);
    this.setZoom(1.1215665478461516, new RVector(98.9841, 229.676, 0, true));
    var p = new RVector(320.964195, -150.322688);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(306.698434, -81.668715);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(172.956928, 65.446942);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('EllipseDDTest00_000.dxf');
    this.tearDown();
    qDebug('finished EllipseDDTest00.test00()');
};

