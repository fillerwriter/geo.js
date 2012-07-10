// geoJavascript

(function () {
  var root = this;

  root.geoJS = {
    rad: function (x) {return x*Math.PI/180;},
    // Calculates distance between 2 GeoJSON points.
    distance: function (point1, point2) {
      return this.haversine(point1.coordinates[0], point1.coordinates[1], point2.coordinates[0], point2.coordinates[1]);
    },
    length: function (line) {
      var length = 0;
      for (var i = 0; i < line.coordinates.length - 1; i++) {
        length += this.haversine(line.coordinates[i][0], line.coordinates[i][1], line.coordinates[i + 1][0], line.coordinates[i + 1][1]);
      }
      return length;
    },
    // Javascript implementation of Haversine formula.
    haversine: function(x1, y1, x2, y2) {
      return 6371 * Math.acos(Math.cos(this.rad(y1)) * Math.cos(this.rad(y2)) * Math.cos(this.rad(x2) - this.rad(x1)) + Math.sin(this.rad(y1)) * Math.sin(this.rad(y2))); 
    }
  };
}).call(this);
