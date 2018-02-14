let piemenu = new wheelnav('piemenu');
piemenu.spreaderInTitle = icon.plus;
piemenu.spreaderOutTitle = icon.cross;
piemenu.spreaderRadius = piemenu.wheelRadius * 0.34;
piemenu.wheelRadius = piemenu.wheelRadius * 0.83;
piemenu.navItemsContinuous = true;
piemenu.sliceAngle = 45;
piemenu.createWheel();
piemenu.setTooltips(['check', 'image', 'checkbox', 'checked']);
// (function () {
// })();