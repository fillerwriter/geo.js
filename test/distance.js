test( "distance test", function() {
  var nashville = {
    type: 'Point',
    coordinates: [-86.7878, 36.1538]
  };
  var chicago = {
    type: 'Point',
    coordinates: [-87.6718, 41.865]
  };
  ok(Math.round(geoJS.distance(nashville, chicago)) == 640 , "Distance between Nashville and Chicago is roughly 640 km. ");
});