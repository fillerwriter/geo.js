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
    area: function(polygon) {
      var area = 0.0; 
      var point1, point2;
      // @TODO: break out calculations into helper function.
      for (var i = 0; i < polygon.coordinates[0].length - 1; i++) {
        point1 = polygon.coordinates[0][i];
        point2 = polygon.coordinates[0][i+1];
        area += this.rad(point2[0] - point1[0]) * (2 + Math.sin(this.rad(point1[1])) + Math.sin(this.rad(point2[1])));
      }

      // @TODO: This won't work. We need to calculate the final area of each part first.
      for (var i = 1; i < polygon.coordinates.length; i++) {
        for (var j = 0; j < polygon.coordinates[i].length - 1; j++) {
          point1 = polygon.coordinates[i][j];
          point2 = polygon.coordinates[i][j+1];
          area -= this.rad(point2[0] - point1[0]) * (2 + Math.sin(this.rad(point1[1])) + Math.sin(this.rad(point2[1])));
        }
      }

      area = Math.abs(area * 6378137.0 * 6378137.0 / 2.0);
      return area;
    },
    // Javascript implementation of Haversine formula.
    haversine: function(x1, y1, x2, y2) {
      return 6371 * Math.acos(Math.cos(this.rad(y1)) * Math.cos(this.rad(y2)) * Math.cos(this.rad(x2) - this.rad(x1)) + Math.sin(this.rad(y1)) * Math.sin(this.rad(y2))); 
    }
  };
}).call(this);
