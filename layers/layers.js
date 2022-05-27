var wms_layers = [];

var lyr_2009_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Gilbert/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "2009",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2009",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2009_0, 0]);
var lyr_2013_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Gilbert/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "2013",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2013",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2013_1, 0]);
var lyr_2015_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Gilbert/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "2015",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2015",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2015_2, 0]);
var lyr_2017_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Gilbert/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "2017",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2017",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2017_3, 0]);
var lyr_2019_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Gilbert/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "2019",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2019",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2019_4, 0]);
var lyr_2022_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Gilbert/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "2022",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2022",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2022_5, 0]);
var format_Planningoverlay_6 = new ol.format.GeoJSON();
var features_Planningoverlay_6 = format_Planningoverlay_6.readFeatures(json_Planningoverlay_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planningoverlay_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planningoverlay_6.addFeatures(features_Planningoverlay_6);
var lyr_Planningoverlay_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Planningoverlay_6, 
                style: style_Planningoverlay_6,
                interactive: false,
    title: 'Planning overlay<br />\
    <img src="styles/legend/Planningoverlay_6_0.png" /> DEVELOPMENT CONTRIBUTIONS PLAN OVERLAY - SCHEDULE 4<br />\
    <img src="styles/legend/Planningoverlay_6_1.png" /> HERITAGE OVERLAY (HO104)<br />\
    <img src="styles/legend/Planningoverlay_6_2.png" /> HERITAGE OVERLAY (HO105)<br />\
    <img src="styles/legend/Planningoverlay_6_3.png" /> HERITAGE OVERLAY (HO143)<br />\
    <img src="styles/legend/Planningoverlay_6_4.png" /> HERITAGE OVERLAY (HO144)<br />\
    <img src="styles/legend/Planningoverlay_6_5.png" /> HERITAGE OVERLAY (HO262)<br />\
    <img src="styles/legend/Planningoverlay_6_6.png" /> LAND SUBJECT TO INUNDATION OVERLAY<br />\
    <img src="styles/legend/Planningoverlay_6_7.png" /> PARKING OVERLAY - PRECINCT 2<br />\
    <img src="styles/legend/Planningoverlay_6_8.png" /> PUBLIC ACQUISITION OVERLAY 3<br />'
        });
var format_Planningzones_7 = new ol.format.GeoJSON();
var features_Planningzones_7 = format_Planningzones_7.readFeatures(json_Planningzones_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planningzones_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planningzones_7.addFeatures(features_Planningzones_7);
var lyr_Planningzones_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Planningzones_7, 
                style: style_Planningzones_7,
                interactive: false,
    title: 'Planning zones<br />\
    <img src="styles/legend/Planningzones_7_0.png" /> TRANSPORT ZONE 1 - STATE TRANSPORT INFRASTRUCTURE<br />\
    <img src="styles/legend/Planningzones_7_1.png" /> TRANSPORT ZONE 2 - PRINCIPAL ROAD NETWORK<br />\
    <img src="styles/legend/Planningzones_7_2.png" /> URBAN GROWTH ZONE - SCHEDULE 3<br />\
    <img src="styles/legend/Planningzones_7_3.png" /> URBAN GROWTH ZONE - SCHEDULE 4<br />'
        });
var format_Properties_8 = new ol.format.GeoJSON();
var features_Properties_8 = format_Properties_8.readFeatures(json_Properties_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Properties_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Properties_8.addFeatures(features_Properties_8);
var lyr_Properties_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Properties_8, 
                style: style_Properties_8,
                interactive: false,
                title: '<img src="styles/legend/Properties_8.png" /> Properties'
            });
var format_Environmentquality_9 = new ol.format.GeoJSON();
var features_Environmentquality_9 = format_Environmentquality_9.readFeatures(json_Environmentquality_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Environmentquality_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Environmentquality_9.addFeatures(features_Environmentquality_9);
var lyr_Environmentquality_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Environmentquality_9, 
                style: style_Environmentquality_9,
                interactive: true,
    title: 'Environment quality<br />\
    <img src="styles/legend/Environmentquality_9_0.png" /> Excellent<br />\
    <img src="styles/legend/Environmentquality_9_1.png" /> Good<br />\
    <img src="styles/legend/Environmentquality_9_2.png" /> Average<br />\
    <img src="styles/legend/Environmentquality_9_3.png" /> Fair<br />\
    <img src="styles/legend/Environmentquality_9_4.png" /> Poor<br />'
        });
var format_Roads_10 = new ol.format.GeoJSON();
var features_Roads_10 = format_Roads_10.readFeatures(json_Roads_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_10.addFeatures(features_Roads_10);
var lyr_Roads_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_10, 
                style: style_Roads_10,
                interactive: false,
                title: '<img src="styles/legend/Roads_10.png" /> Roads'
            });
var format_Watercourse_11 = new ol.format.GeoJSON();
var features_Watercourse_11 = format_Watercourse_11.readFeatures(json_Watercourse_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Watercourse_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watercourse_11.addFeatures(features_Watercourse_11);
var lyr_Watercourse_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Watercourse_11, 
                style: style_Watercourse_11,
                interactive: false,
                title: '<img src="styles/legend/Watercourse_11.png" /> Watercourse'
            });

lyr_2009_0.setVisible(true);lyr_2013_1.setVisible(true);lyr_2015_2.setVisible(true);lyr_2017_3.setVisible(true);lyr_2019_4.setVisible(true);lyr_2022_5.setVisible(true);lyr_Planningoverlay_6.setVisible(false);lyr_Planningzones_7.setVisible(false);lyr_Properties_8.setVisible(true);lyr_Environmentquality_9.setVisible(true);lyr_Roads_10.setVisible(true);lyr_Watercourse_11.setVisible(true);
var layersList = [lyr_2009_0,lyr_2013_1,lyr_2015_2,lyr_2017_3,lyr_2019_4,lyr_2022_5,lyr_Planningoverlay_6,lyr_Planningzones_7,lyr_Properties_8,lyr_Environmentquality_9,lyr_Roads_10,lyr_Watercourse_11];
lyr_Planningoverlay_6.set('fieldAliases', {'pfi': 'pfi', 'schemecode': 'schemecode', 'lga_code': 'lga_code', 'lga': 'lga', 'zone_num': 'zone_num', 'zonestatus': 'zonestatus', 'zone_code': 'zone_code', 'zone_desc': 'zone_desc', 'gaz_b_date': 'gaz_b_date', 'pfi_cr': 'pfi_cr', 'ufi': 'ufi', 'ufi_cr': 'ufi_cr', });
lyr_Planningzones_7.set('fieldAliases', {'pfi': 'pfi', 'schemecode': 'schemecode', 'lga_code': 'lga_code', 'lga': 'lga', 'zone_num': 'zone_num', 'zonestatus': 'zonestatus', 'zone_code': 'zone_code', 'zone_desc': 'zone_desc', 'gaz_b_date': 'gaz_b_date', 'pfi_cr': 'pfi_cr', 'ufi': 'ufi', 'ufi_cr': 'ufi_cr', });
lyr_Properties_8.set('fieldAliases', {'pfi': 'pfi', 'base_pfi': 'base_pfi', 'c_pfi': 'c_pfi', 'status': 'status', 'graph_type': 'graph_type', 'z_level': 'z_level', 'pfi_cr': 'pfi_cr', 'ufi': 'ufi', 'ufi_cr': 'ufi_cr', 'ufi_old': 'ufi_old', 'task_id': 'task_id', });
lyr_Environmentquality_9.set('fieldAliases', {'__gid': '__gid', 'id': 'id', 'category': 'category', });
lyr_Roads_10.set('fieldAliases', {'pfi': 'pfi', 'ufi': 'ufi', 'ftype_code': 'ftype_code', 'nfeat_id': 'nfeat_id', 'ezi_rdname': 'ezi_rdname', 'ezirdnmlbl': 'ezirdnmlbl', 'road_name': 'road_name', 'road_type': 'road_type', 'rd_suf': 'rd_suf', 'rdnameuse': 'rdnameuse', 'rd_name1': 'rd_name1', 'rd_type1': 'rd_type1', 'rd_suf1': 'rd_suf1', 'rdnameuse1': 'rdnameuse1', 'rd_name2': 'rd_name2', 'rd_type2': 'rd_type2', 'rd_suf2': 'rd_suf2', 'rdnameuse2': 'rdnameuse2', 'rd_name3': 'rd_name3', 'rd_type3': 'rd_type3', 'rd_suf3': 'rd_suf3', 'rdnameuse3': 'rdnameuse3', 'rd_name4': 'rd_name4', 'rd_type4': 'rd_type4', 'rd_suf4': 'rd_suf4', 'rdnameuse4': 'rdnameuse4', 'rd_name5': 'rd_name5', 'rd_type5': 'rd_type5', 'rd_suf5': 'rd_suf5', 'rdnameuse5': 'rdnameuse5', 'rd_name6': 'rd_name6', 'rd_type6': 'rd_type6', 'rd_suf6': 'rd_suf6', 'rdnameuse6': 'rdnameuse6', 'rd_name7': 'rd_name7', 'rd_type7': 'rd_type7', 'rd_suf7': 'rd_suf7', 'rdnameuse7': 'rdnameuse7', 'left_loc': 'left_loc', 'right_loc': 'right_loc', 'class_code': 'class_code', 'dir_code': 'dir_code', 'route_no': 'route_no', 'structname': 'structname', 'ht_limit': 'ht_limit', 'restrictn': 'restrictn', 'phys_cond': 'phys_cond', 'const_type': 'const_type', 'road_seal': 'road_seal', 'div_rd': 'div_rd', 'rd_status': 'rd_status', 'vecaccess': 'vecaccess', 'seasclsedt': 'seasclsedt', 'seasopendt': 'seasopendt', 'load_limit': 'load_limit', 'ldlmtassdt': 'ldlmtassdt', 'cons_mat': 'cons_mat', 'length_m': 'length_m', 'width_m': 'width_m', 'deck_area': 'deck_area', 'respauthcd': 'respauthcd', 'coordauthc': 'coordauthc', 'urban': 'urban', 'nre_route': 'nre_route', 'from_ufi': 'from_ufi', 'to_ufi': 'to_ufi', 'fqid': 'fqid', 'crdate_pfi': 'crdate_pfi', 'super_pfi': 'super_pfi', 'crdate_ufi': 'crdate_ufi', });
lyr_Watercourse_11.set('fieldAliases', {'pfi': 'pfi', 'ufi': 'ufi', 'ftype_code': 'ftype_code', 'nfeat_id': 'nfeat_id', 'origin': 'origin', 'const': 'const', 'usage': 'usage', 'hierarchy': 'hierarchy', 'fqid': 'fqid', 'crdate_pfi': 'crdate_pfi', 'super_pfi': 'super_pfi', 'crdate_ufi': 'crdate_ufi', });
lyr_Planningoverlay_6.set('fieldImages', {'pfi': 'TextEdit', 'schemecode': 'TextEdit', 'lga_code': 'TextEdit', 'lga': 'TextEdit', 'zone_num': 'TextEdit', 'zonestatus': 'TextEdit', 'zone_code': 'TextEdit', 'zone_desc': 'TextEdit', 'gaz_b_date': 'TextEdit', 'pfi_cr': 'TextEdit', 'ufi': 'TextEdit', 'ufi_cr': 'TextEdit', });
lyr_Planningzones_7.set('fieldImages', {'pfi': 'TextEdit', 'schemecode': 'TextEdit', 'lga_code': 'TextEdit', 'lga': 'TextEdit', 'zone_num': 'TextEdit', 'zonestatus': 'TextEdit', 'zone_code': 'TextEdit', 'zone_desc': 'TextEdit', 'gaz_b_date': 'TextEdit', 'pfi_cr': 'TextEdit', 'ufi': 'TextEdit', 'ufi_cr': 'TextEdit', });
lyr_Properties_8.set('fieldImages', {'pfi': 'TextEdit', 'base_pfi': 'TextEdit', 'c_pfi': 'TextEdit', 'status': 'TextEdit', 'graph_type': 'TextEdit', 'z_level': 'TextEdit', 'pfi_cr': 'TextEdit', 'ufi': 'TextEdit', 'ufi_cr': 'TextEdit', 'ufi_old': 'TextEdit', 'task_id': 'TextEdit', });
lyr_Environmentquality_9.set('fieldImages', {'__gid': 'TextEdit', 'id': 'TextEdit', 'category': 'TextEdit', });
lyr_Roads_10.set('fieldImages', {'pfi': 'TextEdit', 'ufi': 'TextEdit', 'ftype_code': 'TextEdit', 'nfeat_id': 'TextEdit', 'ezi_rdname': 'TextEdit', 'ezirdnmlbl': 'TextEdit', 'road_name': 'TextEdit', 'road_type': 'TextEdit', 'rd_suf': 'TextEdit', 'rdnameuse': 'TextEdit', 'rd_name1': 'TextEdit', 'rd_type1': 'TextEdit', 'rd_suf1': 'TextEdit', 'rdnameuse1': 'TextEdit', 'rd_name2': 'TextEdit', 'rd_type2': 'TextEdit', 'rd_suf2': 'TextEdit', 'rdnameuse2': 'TextEdit', 'rd_name3': 'TextEdit', 'rd_type3': 'TextEdit', 'rd_suf3': 'TextEdit', 'rdnameuse3': 'TextEdit', 'rd_name4': 'TextEdit', 'rd_type4': 'TextEdit', 'rd_suf4': 'TextEdit', 'rdnameuse4': 'TextEdit', 'rd_name5': 'TextEdit', 'rd_type5': 'TextEdit', 'rd_suf5': 'TextEdit', 'rdnameuse5': 'TextEdit', 'rd_name6': 'TextEdit', 'rd_type6': 'TextEdit', 'rd_suf6': 'TextEdit', 'rdnameuse6': 'TextEdit', 'rd_name7': 'TextEdit', 'rd_type7': 'TextEdit', 'rd_suf7': 'TextEdit', 'rdnameuse7': 'TextEdit', 'left_loc': 'TextEdit', 'right_loc': 'TextEdit', 'class_code': 'Range', 'dir_code': 'TextEdit', 'route_no': 'TextEdit', 'structname': 'TextEdit', 'ht_limit': 'TextEdit', 'restrictn': 'TextEdit', 'phys_cond': 'TextEdit', 'const_type': 'TextEdit', 'road_seal': 'TextEdit', 'div_rd': 'TextEdit', 'rd_status': 'TextEdit', 'vecaccess': 'TextEdit', 'seasclsedt': 'TextEdit', 'seasopendt': 'TextEdit', 'load_limit': 'TextEdit', 'ldlmtassdt': 'TextEdit', 'cons_mat': 'TextEdit', 'length_m': 'TextEdit', 'width_m': 'TextEdit', 'deck_area': 'TextEdit', 'respauthcd': 'TextEdit', 'coordauthc': 'TextEdit', 'urban': 'TextEdit', 'nre_route': 'TextEdit', 'from_ufi': 'TextEdit', 'to_ufi': 'TextEdit', 'fqid': 'TextEdit', 'crdate_pfi': 'TextEdit', 'super_pfi': 'TextEdit', 'crdate_ufi': 'TextEdit', });
lyr_Watercourse_11.set('fieldImages', {'pfi': 'TextEdit', 'ufi': 'TextEdit', 'ftype_code': 'TextEdit', 'nfeat_id': 'TextEdit', 'origin': 'TextEdit', 'const': 'TextEdit', 'usage': 'TextEdit', 'hierarchy': 'TextEdit', 'fqid': 'TextEdit', 'crdate_pfi': 'TextEdit', 'super_pfi': 'TextEdit', 'crdate_ufi': 'TextEdit', });
lyr_Planningoverlay_6.set('fieldLabels', {'pfi': 'no label', 'schemecode': 'no label', 'lga_code': 'no label', 'lga': 'no label', 'zone_num': 'no label', 'zonestatus': 'no label', 'zone_code': 'no label', 'zone_desc': 'no label', 'gaz_b_date': 'no label', 'pfi_cr': 'no label', 'ufi': 'no label', 'ufi_cr': 'no label', });
lyr_Planningzones_7.set('fieldLabels', {'pfi': 'no label', 'schemecode': 'no label', 'lga_code': 'no label', 'lga': 'no label', 'zone_num': 'no label', 'zonestatus': 'no label', 'zone_code': 'no label', 'zone_desc': 'no label', 'gaz_b_date': 'no label', 'pfi_cr': 'no label', 'ufi': 'no label', 'ufi_cr': 'no label', });
lyr_Properties_8.set('fieldLabels', {'pfi': 'no label', 'base_pfi': 'no label', 'c_pfi': 'no label', 'status': 'no label', 'graph_type': 'no label', 'z_level': 'no label', 'pfi_cr': 'no label', 'ufi': 'no label', 'ufi_cr': 'no label', 'ufi_old': 'no label', 'task_id': 'no label', });
lyr_Environmentquality_9.set('fieldLabels', {'__gid': 'no label', 'id': 'no label', 'category': 'no label', });
lyr_Roads_10.set('fieldLabels', {'pfi': 'no label', 'ufi': 'no label', 'ftype_code': 'no label', 'nfeat_id': 'no label', 'ezi_rdname': 'no label', 'ezirdnmlbl': 'no label', 'road_name': 'no label', 'road_type': 'no label', 'rd_suf': 'no label', 'rdnameuse': 'no label', 'rd_name1': 'no label', 'rd_type1': 'no label', 'rd_suf1': 'no label', 'rdnameuse1': 'no label', 'rd_name2': 'no label', 'rd_type2': 'no label', 'rd_suf2': 'no label', 'rdnameuse2': 'no label', 'rd_name3': 'no label', 'rd_type3': 'no label', 'rd_suf3': 'no label', 'rdnameuse3': 'no label', 'rd_name4': 'no label', 'rd_type4': 'no label', 'rd_suf4': 'no label', 'rdnameuse4': 'no label', 'rd_name5': 'no label', 'rd_type5': 'no label', 'rd_suf5': 'no label', 'rdnameuse5': 'no label', 'rd_name6': 'no label', 'rd_type6': 'no label', 'rd_suf6': 'no label', 'rdnameuse6': 'no label', 'rd_name7': 'no label', 'rd_type7': 'no label', 'rd_suf7': 'no label', 'rdnameuse7': 'no label', 'left_loc': 'no label', 'right_loc': 'no label', 'class_code': 'no label', 'dir_code': 'no label', 'route_no': 'no label', 'structname': 'no label', 'ht_limit': 'no label', 'restrictn': 'no label', 'phys_cond': 'no label', 'const_type': 'no label', 'road_seal': 'no label', 'div_rd': 'no label', 'rd_status': 'no label', 'vecaccess': 'no label', 'seasclsedt': 'no label', 'seasopendt': 'no label', 'load_limit': 'no label', 'ldlmtassdt': 'no label', 'cons_mat': 'no label', 'length_m': 'no label', 'width_m': 'no label', 'deck_area': 'no label', 'respauthcd': 'no label', 'coordauthc': 'no label', 'urban': 'no label', 'nre_route': 'no label', 'from_ufi': 'no label', 'to_ufi': 'no label', 'fqid': 'no label', 'crdate_pfi': 'no label', 'super_pfi': 'no label', 'crdate_ufi': 'no label', });
lyr_Watercourse_11.set('fieldLabels', {'pfi': 'no label', 'ufi': 'no label', 'ftype_code': 'no label', 'nfeat_id': 'no label', 'origin': 'no label', 'const': 'no label', 'usage': 'no label', 'hierarchy': 'no label', 'fqid': 'no label', 'crdate_pfi': 'no label', 'super_pfi': 'no label', 'crdate_ufi': 'no label', });
lyr_Watercourse_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});