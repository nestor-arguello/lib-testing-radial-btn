let globemenu = new wheelnav('globemenu');
globemenu.spreaderInTitle = icon.plus;
globemenu.spreaderOutTitle = icon.cross;
globemenu.spreaderRadius = globemenu.wheelRadius * 0.26;
globemenu.wheelRadius = globemenu.wheelRadius * 0.83;

globemenu.animatetime = 250;
globemenu.animateeffect = 'linear';
globemenu.markerEnable = false;

globemenu.navItemsContinuous = true;
globemenu.sliceAngle = 45;
globemenu.createWheel();
globemenu.setTooltips(['check', 'image', 'checkbox', 'checked']);



// globemenu.spreaderInTitle = icon.plus;
// globemenu.spreaderOutTitle = icon.cross;
// globemenu.spreaderRadius = globemenu.wheelRadius * 0.26;
// globemenu.wheelRadius = globemenu.wheelRadius * 0.78;
// // globemenu.spreaderRadius = globemenu.wheelRadius * 0.34;
// // globemenu.wheelRadius = globemenu.wheelRadius * 0.83;

// globemenu.slicePathFunction = slicePath().DonutSlice;
// globemenu.slicePathCustom = slicePath().DonutSliceCustomization();
// globemenu.slicePathCustom.minRadiusPercent = 0.40;
// globemenu.slicePathCustom.maxRadiusPercent = 0.80;
// globemenu.sliceSelectedPathCustom = globemenu.slicePathCustom;
// globemenu.sliceInitPathCustom = globemenu.slicePathCustom;

// globemenu.animatetime = 250;
// globemenu.animateeffect = 'linear';
// globemenu.markerEnable = false;

// globemenu.navItemsContinuous = true;
// globemenu.sliceAngle = 45;
// globemenu.createWheel();
// globemenu.setTooltips(['check', 'image', 'checkbox', 'checked']);