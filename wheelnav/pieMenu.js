let piemenu = new wheelnav('piemenu');
piemenu.spreaderInTitle = icon.plus;
piemenu.spreaderOutTitle = icon.cross;
piemenu.spreaderRadius = piemenu.wheelRadius * 0.26;
piemenu.wheelRadius = piemenu.wheelRadius * 0.78;
// piemenu.spreaderRadius = piemenu.wheelRadius * 0.34;
// piemenu.wheelRadius = piemenu.wheelRadius * 0.83;

piemenu.slicePathFunction = slicePath().DonutSlice;
piemenu.slicePathCustom = slicePath().DonutSliceCustomization();
piemenu.slicePathCustom.minRadiusPercent = 0.40;
piemenu.slicePathCustom.maxRadiusPercent = 0.80;
piemenu.sliceSelectedPathCustom = piemenu.slicePathCustom;
piemenu.sliceInitPathCustom = piemenu.slicePathCustom;

piemenu.animatetime = 250;
piemenu.animateeffect = 'linear';
piemenu.markerEnable = false;

piemenu.navItemsContinuous = true;
piemenu.sliceAngle = 45;
piemenu.createWheel();
piemenu.setTooltips(['check', 'image', 'checkbox', 'checked']);

// (function () {
// })();