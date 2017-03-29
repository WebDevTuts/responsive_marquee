var marqueeVars = {

  screenSize : '',
  width : 0,
  mobileSize : 600,
  autoPlay : true,
  currentPanel : 1,
  totalPanels : 0,
  timePassed : 0,
  timeToChange : 60,
  duration : 1250,
  inTransition : false,
  panelContent : Array

}

var debugTimer = setInterval(setDebugger, 100)

function setDebugger() {

  $('.var1').html('screenSize = '+marqueeVars.screenSize);
  $('.var2').html('width = '+marqueeVars.width);
  $('.var3').html('mobileSize = '+marqueeVars.mobileSize);
  $('.var4').html('autoPlay = '+marqueeVars.autoPlay);
  $('.var5').html('currentPanel = '+marqueeVars.currentPanel);
  $('.var6').html('totalPanels = '+marqueeVars.totalPanels);
  $('.var7').html('timePassed = '+marqueeVars.timePassed);
  $('.var8').html('timeToChange = '+marqueeVars.timeToChange);
  $('.var9').html('inTransition = '+marqueeVars.inTransition);

}
