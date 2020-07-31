ol.proj.get("EPSG:32632").setExtent([644190.896765, 600195.249750, 696569.163235, 629752.760250]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_h1_0 = new ol.format.GeoJSON();
var features_h1_0 = format_h1_0.readFeatures(json_h1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_h1_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_h1_0.addFeatures(features_h1_0);var lyr_h1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_h1_0, 
                style: style_h1_0,
                title: '<img src="styles/legend/h1_0.png" /> h[1]'
            });

lyr_h1_0.setVisible(true);
var layersList = [baseLayer,lyr_h1_0];
lyr_h1_0.set('fieldAliases', {'�tabissement de sant�': '�tabissement de sant�', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_h1_0.set('fieldImages', {'�tabissement de sant�': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_h1_0.set('fieldLabels', {'�tabissement de sant�': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', });
lyr_h1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});