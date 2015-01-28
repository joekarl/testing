var shp = require('shapefile');
var topojson = require('topojson');

shp.read('/Users/karl/Downloads/SDBoundaries/SDBoundaries.shp', function(err, data){
  if (err) return console.log(err);

  var topo = topojson.topology({
    collection: data
  },{
    'property-transform': function propertyTransform(feature) {
      return feature.properties;
    }
  });
  console.log(JSON.stringify(topo));
});
