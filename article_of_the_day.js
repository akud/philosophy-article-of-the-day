(function() {
  var date = new Date();
  date.setHours(0,0,0,0);
  Math.seedrandom(date);
  var index = Math.floor(Math.random()*ARTICLES.length);
  window.location = ARTICLES[index];
})();
