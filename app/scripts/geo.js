// El navegador soporta geolocalización
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//         successHandler, // manejador de respuesta correcta
//         function() {}, // manejado de errores 
//         {} // opciones
//     );
// }
// El navegador no soporta geolocalización
// else { /* Código*/ }

function successHandler(data) {
    var coords = data.coords;
    // console.log('Latitud', coords.latitude);
    // console.log('Longitud', coords.longitude);
    // console.log('Precisión', coords.accuracy);
    // console.log('Altitud', coords.altitude);
    // console.log('Precisión de altitud', coords.altitudeAccuracy);
    // // The heading as degrees clockwise from North
    // console.log('Preguntar a marinero', coords.heading);
    // console.log('Velocidad', coords.speed);

    var map;

    var position = { lat: coords.latitude, lng: coords.longitude };

    var styledMapType = new google.maps.StyledMapType(this.getBWMapStyle(), { name: 'Styled Map' });

    map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 15,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    var marker = new google.maps.Marker({
        map: map,
        position: position
    });
}

function getDarkMapStyle() {
    return [{
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': [{
                    'saturation': 36
                },
                {
                    'color': '#000000'
                },
                {
                    'lightness': 40
                }
            ]
        },
        {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                    'visibility': 'on'
                },
                {
                    'color': '#000000'
                },
                {
                    'lightness': 16
                }
            ]
        },
        {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 20
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 17
                },
                {
                    'weight': 1.2
                }
            ]
        },
        {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 20
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 21
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 17
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 29
                },
                {
                    'weight': 0.2
                }
            ]
        },
        {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 18
                }
            ]
        },
        {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 16
                }
            ]
        },
        {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 19
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#000000'
                },
                {
                    'lightness': 17
                }
            ]
        }
    ];
}

function getWhiteMapStyle() {
    return [{
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#e9e9e9'
                },
                {
                    'lightness': 17
                }
            ]
        },
        {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#f5f5f5'
                },
                {
                    'lightness': 20
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [{
                    'color': '#ffffff'
                },
                {
                    'lightness': 17
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [{
                    'color': '#ffffff'
                },
                {
                    'lightness': 29
                },
                {
                    'weight': 0.2
                }
            ]
        },
        {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#ffffff'
                },
                {
                    'lightness': 18
                }
            ]
        },
        {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#ffffff'
                },
                {
                    'lightness': 16
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#f5f5f5'
                },
                {
                    'lightness': 21
                }
            ]
        },
        {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#dedede'
                },
                {
                    'lightness': 21
                }
            ]
        },
        {
            'elementType': 'labels.text.stroke',
            'stylers': [{
                    'visibility': 'on'
                },
                {
                    'color': '#ffffff'
                },
                {
                    'lightness': 16
                }
            ]
        },
        {
            'elementType': 'labels.text.fill',
            'stylers': [{
                    'saturation': 36
                },
                {
                    'color': '#333333'
                },
                {
                    'lightness': 40
                }
            ]
        },
        {
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        },
        {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [{
                    'color': '#f2f2f2'
                },
                {
                    'lightness': 19
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [{
                    'color': '#fefefe'
                },
                {
                    'lightness': 20
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [{
                    'color': '#fefefe'
                },
                {
                    'lightness': 17
                },
                {
                    'weight': 1.2
                }
            ]
        }
    ];
}

function getBWMapStyle() {
    return [{
            'featureType': 'administrative',
            'elementType': 'all',
            'stylers': [{
                'saturation': '-100'
            }]
        },
        {
            'featureType': 'administrative.province',
            'elementType': 'all',
            'stylers': [{
                'visibility': 'off'
            }]
        },
        {
            'featureType': 'landscape',
            'elementType': 'all',
            'stylers': [{
                    'saturation': -100
                },
                {
                    'lightness': 65
                },
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': [{
                    'saturation': -100
                },
                {
                    'lightness': '50'
                },
                {
                    'visibility': 'simplified'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'all',
            'stylers': [{
                'saturation': '-100'
            }]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'all',
            'stylers': [{
                'visibility': 'simplified'
            }]
        },
        {
            'featureType': 'road.arterial',
            'elementType': 'all',
            'stylers': [{
                'lightness': '30'
            }]
        },
        {
            'featureType': 'road.local',
            'elementType': 'all',
            'stylers': [{
                'lightness': '40'
            }]
        },
        {
            'featureType': 'transit',
            'elementType': 'all',
            'stylers': [{
                    'saturation': -100
                },
                {
                    'visibility': 'simplified'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [{
                    'hue': '#ffff00'
                },
                {
                    'lightness': -25
                },
                {
                    'saturation': -97
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'labels',
            'stylers': [{
                    'lightness': -25
                },
                {
                    'saturation': -100
                }
            ]
        }
    ];
}