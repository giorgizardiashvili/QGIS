var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_stadioni_1 = new ol.format.GeoJSON();
var features_stadioni_1 = format_stadioni_1.readFeatures(json_stadioni_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stadioni_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stadioni_1.addFeatures(features_stadioni_1);
var lyr_stadioni_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stadioni_1, 
                style: style_stadioni_1,
                interactive: true,
                title: '<img src="styles/legend/stadioni_1.png" /> stadioni'
            });
var format_nakvetebi_2 = new ol.format.GeoJSON();
var features_nakvetebi_2 = format_nakvetebi_2.readFeatures(json_nakvetebi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nakvetebi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nakvetebi_2.addFeatures(features_nakvetebi_2);
var lyr_nakvetebi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nakvetebi_2, 
                style: style_nakvetebi_2,
                interactive: true,
                title: '<img src="styles/legend/nakvetebi_2.png" /> nakvetebi'
            });
var format_mdinare_3 = new ol.format.GeoJSON();
var features_mdinare_3 = format_mdinare_3.readFeatures(json_mdinare_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mdinare_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mdinare_3.addFeatures(features_mdinare_3);
var lyr_mdinare_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mdinare_3, 
                style: style_mdinare_3,
                interactive: true,
                title: '<img src="styles/legend/mdinare_3.png" /> mdinare'
            });
var format_gzebi_4 = new ol.format.GeoJSON();
var features_gzebi_4 = format_gzebi_4.readFeatures(json_gzebi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gzebi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gzebi_4.addFeatures(features_gzebi_4);
var lyr_gzebi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gzebi_4, 
                style: style_gzebi_4,
                interactive: true,
                title: '<img src="styles/legend/gzebi_4.png" /> gzebi'
            });
var format_eklesia_5 = new ol.format.GeoJSON();
var features_eklesia_5 = format_eklesia_5.readFeatures(json_eklesia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eklesia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eklesia_5.addFeatures(features_eklesia_5);
var lyr_eklesia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eklesia_5, 
                style: style_eklesia_5,
                interactive: true,
                title: '<img src="styles/legend/eklesia_5.png" /> eklesia'
            });
var format_saxlebi_6 = new ol.format.GeoJSON();
var features_saxlebi_6 = format_saxlebi_6.readFeatures(json_saxlebi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saxlebi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saxlebi_6.addFeatures(features_saxlebi_6);
var lyr_saxlebi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saxlebi_6, 
                style: style_saxlebi_6,
                interactive: true,
                title: '<img src="styles/legend/saxlebi_6.png" /> saxlebi'
            });
var format_stadioni_wertilovani_7 = new ol.format.GeoJSON();
var features_stadioni_wertilovani_7 = format_stadioni_wertilovani_7.readFeatures(json_stadioni_wertilovani_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stadioni_wertilovani_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stadioni_wertilovani_7.addFeatures(features_stadioni_wertilovani_7);
var lyr_stadioni_wertilovani_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stadioni_wertilovani_7, 
                style: style_stadioni_wertilovani_7,
                interactive: true,
                title: '<img src="styles/legend/stadioni_wertilovani_7.png" /> stadioni_wertilovani'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_stadioni_1.setVisible(true);lyr_nakvetebi_2.setVisible(true);lyr_mdinare_3.setVisible(true);lyr_gzebi_4.setVisible(true);lyr_eklesia_5.setVisible(true);lyr_saxlebi_6.setVisible(true);lyr_stadioni_wertilovani_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_stadioni_1,lyr_nakvetebi_2,lyr_mdinare_3,lyr_gzebi_4,lyr_eklesia_5,lyr_saxlebi_6,lyr_stadioni_wertilovani_7];
lyr_stadioni_1.set('fieldAliases', {'id': 'id', 'edit': 'edit', });
lyr_nakvetebi_2.set('fieldAliases', {'id': 'id', 'edit': 'edit', });
lyr_mdinare_3.set('fieldAliases', {'id': 'id', });
lyr_gzebi_4.set('fieldAliases', {'id': 'id', 'edit': 'edit', });
lyr_eklesia_5.set('fieldAliases', {'id': 'id', });
lyr_saxlebi_6.set('fieldAliases', {'id': 'id', });
lyr_stadioni_wertilovani_7.set('fieldAliases', {'id': 'id', });
lyr_stadioni_1.set('fieldImages', {'id': '', 'edit': '', });
lyr_nakvetebi_2.set('fieldImages', {'id': '', 'edit': '', });
lyr_mdinare_3.set('fieldImages', {'id': '', });
lyr_gzebi_4.set('fieldImages', {'id': '', 'edit': '', });
lyr_eklesia_5.set('fieldImages', {'id': '', });
lyr_saxlebi_6.set('fieldImages', {'id': '', });
lyr_stadioni_wertilovani_7.set('fieldImages', {'id': '', });
lyr_stadioni_1.set('fieldLabels', {'id': 'no label', 'edit': 'no label', });
lyr_nakvetebi_2.set('fieldLabels', {'id': 'no label', 'edit': 'no label', });
lyr_mdinare_3.set('fieldLabels', {'id': 'no label', });
lyr_gzebi_4.set('fieldLabels', {'id': 'no label', 'edit': 'no label', });
lyr_eklesia_5.set('fieldLabels', {'id': 'no label', });
lyr_saxlebi_6.set('fieldLabels', {'id': 'no label', });
lyr_stadioni_wertilovani_7.set('fieldLabels', {'id': 'no label', });
lyr_stadioni_wertilovani_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});