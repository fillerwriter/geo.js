test( "area test", function() {
  var polygon = {
    type: 'Polygon',
    coordinates: [[[-102, 37], [-109, 37], [-109, 41], [-102, 41]]]
  };
  ok(Math.floor(geoJS.area(polygon)) == 269596871775, "Area of polygon is " + geoJS.area(polygon));
  // @TODO: Add 
});