var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OpenMapSurfer adminb',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://openmapsurfer.uni-hd.de/tiles/adminb/x={x}&y={y}&z={z}',
        attributions: [new ol.Attribution({html: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @University of Heidelberg</a> &mdash; Map data:&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_gadm36_BFA_3 = new ol.format.GeoJSON();
var features_gadm36_BFA_3 = format_gadm36_BFA_3.readFeatures(geojson_gadm36_BFA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm36_BFA_3 = new ol.source.Vector();
jsonSource_gadm36_BFA_3.addFeatures(features_gadm36_BFA_3);var lyr_gadm36_BFA_3 = new ol.layer.Vector({
                source:jsonSource_gadm36_BFA_3, 
                style: style_gadm36_BFA_3,
                title: "gadm36_BFA_3"
            });var format_test_carte_en_ligneFeuil1 = new ol.format.GeoJSON();
var features_test_carte_en_ligneFeuil1 = format_test_carte_en_ligneFeuil1.readFeatures(geojson_test_carte_en_ligneFeuil1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_test_carte_en_ligneFeuil1 = new ol.source.Vector();
jsonSource_test_carte_en_ligneFeuil1.addFeatures(features_test_carte_en_ligneFeuil1);var lyr_test_carte_en_ligneFeuil1 = new ol.layer.Vector({
                source:jsonSource_test_carte_en_ligneFeuil1, 
                style: style_test_carte_en_ligneFeuil1,
                title: "test_carte_en_ligne-Feuil1"
            });

lyr_gadm36_BFA_3.setVisible(true);lyr_test_carte_en_ligneFeuil1.setVisible(true);
var layersList = [baseLayer,lyr_gadm36_BFA_3,lyr_test_carte_en_ligneFeuil1];
lyr_gadm36_BFA_3.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_test_carte_en_ligneFeuil1.set('fieldAliases', {'type_evenement': 'type_evenement', });
lyr_gadm36_BFA_3.set('fieldImages', {'GID_0': 'WebView', 'NAME_0': 'WebView', 'GID_1': 'Hidden', 'NAME_1': 'WebView', 'NL_NAME_1': 'Hidden', 'GID_2': 'Hidden', 'NAME_2': 'WebView', 'NL_NAME_2': 'Hidden', 'GID_3': 'Hidden', 'NAME_3': 'WebView', 'VARNAME_3': 'Hidden', 'NL_NAME_3': 'Hidden', 'TYPE_3': 'Hidden', 'ENGTYPE_3': 'Hidden', 'CC_3': 'Hidden', 'HASC_3': 'Hidden', });
lyr_test_carte_en_ligneFeuil1.set('fieldImages', {'type_evenement': 'WebView', });
lyr_gadm36_BFA_3.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', });
lyr_test_carte_en_ligneFeuil1.set('fieldLabels', {'type_evenement': 'no label', });
lyr_test_carte_en_ligneFeuil1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});