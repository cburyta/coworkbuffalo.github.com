
$(function() {
  var $header, $herd, $window, lastPosition, layer, location, map;
  $window = $(window);
  $('#nav').localScroll(800);
  RepositionNav();
  $window.resize(function() {
    return RepositionNav();
  });
  $header = $('h1');
  $herd = $('#herd');
  layer = new MM.StamenTileLayer("toner");
  map = new MM.Map(document.getElementById("tile"), layer, null, null);
  location = new MM.Location(42.890595, -78.876607);
  map.setCenterZoom(location, 16);
  lastPosition = 0;
  return $window.bind('scroll', function() {
    var currentPosition, pos;
    pos = $window.scrollTop();
    if (pos <= 800) {
      $header.css({
        'background-position-x': pos - 72
      });
    }
    if (pos >= 861 && pos <= 1800) {
      currentPosition = Math.floor((pos - 860) / 2) + 1;
      return $herd.css({
        'background-position-y': currentPosition
      });
    }
  });
});
