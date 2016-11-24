var enough;

function crumbing () {
  opener();
  where2begin_run();
  typing();
  var where2begin_full = "<div class=pager>" + where2begin + "</div>";
  $(".printer").prepend(where2begin_full);
  where2begin = " ";
}

function typing () {
  $('.typing').hide();
  setTimeout(function() { $('.typing').show(); }, 2000);
}

function begin() {
  crumbing();
  enough = window.setInterval(function(){ crumbing(); }, 6000);
  $('.stopper').show();
  $('.beginner').hide();
}

function stop() {
  clearInterval(enough);
  $('.stopper').hide();
  $('.typing').hide();
  $('.beginner').show();
}

begin();

$('.beginner').hide();
