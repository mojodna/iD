iD.data.presets = {
    "presets": {
        "access/canoe": {
            "geometry": [
                "point"
            ],
            "tags": {
                "access": "canoe"
            },
            "name": "Canoe Access",
            "icon": "canoe-access-black",
            "maki": "npmaki",
            "searchable": true
        },
        "address": {
            "fields": [
                "address"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "addr:housenumber": "*"
            },
            "addTags": {},
            "removeTags": {},
            "matchScore": 0.2,
            "searchable": false,
            "name": "Address"
        },
        "aerialway": {
            "fields": [
                "aerialway"
            ],
            "geometry": [
                "point",
                "vertex",
                "line"
            ],
            "tags": {
                "aerialway": "*"
            },
            "terms": [
                "ski lift",
                "funifor",
                "funitel"
            ],
            "searchable": false,
            "name": "Aerialway"
        },
        "aerialway/cable_car": {
            "geometry": [
                "line"
            ],
            "terms": [
                "tramway",
                "ropeway"
            ],
            "fields": [
                "aerialway/occupancy",
                "aerialway/capacity",
                "aerialway/duration",
                "aerialway/heating"
            ],
            "tags": {
                "aerialway": "cable_car"
            },
            "searchable": false,
            "name": "Cable Car"
        },
        "aerialway/chair_lift": {
            "geometry": [
                "line"
            ],
            "fields": [
                "aerialway/occupancy",
                "aerialway/capacity",
                "aerialway/duration",
                "aerialway/bubble",
                "aerialway/heating"
            ],
            "tags": {
                "aerialway": "chair_lift"
            },
            "searchable": false,
            "name": "Chair Lift"
        },
        "aerialway/gondola": {
            "geometry": [
                "line"
            ],
            "fields": [
                "aerialway/occupancy",
                "aerialway/capacity",
                "aerialway/duration",
                "aerialway/bubble",
                "aerialway/heating"
            ],
            "tags": {
                "aerialway": "gondola"
            },
            "searchable": false,
            "name": "Gondola"
        },
        "aerialway/magic_carpet": {
            "geometry": [
                "line"
            ],
            "fields": [
                "aerialway/capacity",
                "aerialway/duration",
                "aerialway/heating"
            ],
            "tags": {
                "aerialway": "magic_carpet"
            },
            "searchable": false,
            "name": "Magic Carpet Lift"
        },
        "aerialway/platter": {
            "geometry": [
                "line"
            ],
            "terms": [
                "button lift",
                "poma lift"
            ],
            "fields": [
                "aerialway/capacity",
                "aerialway/duration"
            ],
            "tags": {
                "aerialway": "platter"
            },
            "searchable": false,
            "name": "Platter Lift"
        },
        "aerialway/pylon": {
            "geometry": [
                "point",
                "vertex"
            ],
            "fields": [
                "ref"
            ],
            "tags": {
                "aerialway": "pylon"
            },
            "searchable": false,
            "name": "Aerialway Pylon"
        },
        "aerialway/rope_tow": {
            "geometry": [
                "line"
            ],
            "terms": [
                "handle tow",
                "bugel lift"
            ],
            "fields": [
                "aerialway/capacity",
                "aerialway/duration"
            ],
            "tags": {
                "aerialway": "rope_tow"
            },
            "searchable": false,
            "name": "Rope Tow Lift"
        },
        "aerialway/station": {
            "geometry": [
                "point",
                "vertex"
            ],
            "fields": [
                "aerialway/access",
                "aerialway/summer/access",
                "elevation"
            ],
            "tags": {
                "aerialway": "station"
            },
            "searchable": false,
            "name": "Aerialway Station"
        },
        "aerialway/t-bar": {
            "geometry": [
                "line"
            ],
            "fields": [
                "aerialway/capacity",
                "aerialway/duration"
            ],
            "tags": {
                "aerialway": "t-bar"
            },
            "searchable": false,
            "name": "T-bar Lift"
        },
        "aeroway": {
            "icon": "airport",
            "fields": [
                "aeroway"
            ],
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "aeroway": "*"
            },
            "searchable": false,
            "name": "Aeroway"
        },
        "aeroway/aerodrome": {
            "icon": "airport-black",
            "maki": "npmaki",
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "airplane",
                "airport",
                "aerodrome"
            ],
            "fields": [
                "ref",
                "iata",
                "icao",
                "operator"
            ],
            "tags": {
                "aeroway": "aerodrome"
            },
            "name": "Airport",
            "searchable": true
        },
        "aeroway/apron": {
            "icon": "airport",
            "geometry": [
                "area"
            ],
            "terms": [
                "ramp"
            ],
            "fields": [
                "ref",
                "surface"
            ],
            "tags": {
                "aeroway": "apron"
            },
            "searchable": false,
            "name": "Apron"
        },
        "aeroway/gate": {
            "icon": "airport",
            "geometry": [
                "point"
            ],
            "fields": [
                "ref"
            ],
            "tags": {
                "aeroway": "gate"
            },
            "searchable": false,
            "name": "Airport gate"
        },
        "aeroway/hangar": {
            "geometry": [
                "area"
            ],
            "fields": [
                "building_area"
            ],
            "tags": {
                "aeroway": "hangar"
            },
            "searchable": false,
            "name": "Hangar"
        },
        "aeroway/helipad": {
            "icon": "heliport",
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "helicopter",
                "helipad",
                "heliport"
            ],
            "tags": {
                "aeroway": "helipad"
            },
            "searchable": false,
            "name": "Helipad"
        },
        "aeroway/runway": {
            "geometry": [
                "line",
                "area"
            ],
            "terms": [
                "landing strip"
            ],
            "fields": [
                "ref",
                "surface",
                "length",
                "width"
            ],
            "tags": {
                "aeroway": "runway"
            },
            "searchable": false,
            "name": "Runway"
        },
        "aeroway/taxiway": {
            "geometry": [
                "line"
            ],
            "fields": [
                "ref",
                "surface"
            ],
            "tags": {
                "aeroway": "taxiway"
            },
            "searchable": false,
            "name": "Taxiway"
        },
        "aeroway/terminal": {
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "airport",
                "aerodrome"
            ],
            "fields": [
                "operator",
                "building_area"
            ],
            "tags": {
                "aeroway": "terminal"
            },
            "searchable": false,
            "name": "Airport terminal"
        },
        "amenity": {
            "fields": [
                "amenity"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "amenity": "*"
            },
            "searchable": false,
            "name": "Amenity"
        },
        "amenity/amphitheater": {
            "icon": "amphitheater-black",
            "maki": "npmaki",
            "searchable": true,
            "fields": [
                "operator",
                "building_area",
                "address"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [
                "amphitheater",
                "theatre",
                "performance",
                "play",
                "musical"
            ],
            "tags": {
                "amenity": "theatre",
                "theatre:type": "amphi"
            },
            "name": "Amphitheater"
        },
        "amenity/arts_centre": {
            "searchable": false,
            "name": "Arts Center",
            "icon": "theatre",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "amenity": "arts_centre"
            }
        },
        "amenity/atm": {
            "icon": "bank",
            "fields": [
                "operator",
                "drive_through"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "terms": [
                "money",
                "cash",
                "machine"
            ],
            "tags": {
                "amenity": "atm"
            },
            "searchable": false,
            "name": "ATM"
        },
        "amenity/bank": {
            "icon": "bank",
            "fields": [
                "atm",
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "drive_through"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "credit union",
                "check",
                "deposit",
                "fund",
                "investment",
                "repository",
                "reserve",
                "safe",
                "savings",
                "stock",
                "treasury",
                "trust",
                "vault"
            ],
            "tags": {
                "amenity": "bank"
            },
            "searchable": false,
            "name": "Bank"
        },
        "amenity/bar": {
            "icon": "bar",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "dive",
                "beer",
                "bier",
                "booze"
            ],
            "tags": {
                "amenity": "bar"
            },
            "searchable": false,
            "name": "Bar"
        },
        "amenity/bbq": {
            "fields": [
                "covered",
                "fuel"
            ],
            "geometry": [
                "point"
            ],
            "terms": [
                "bbq"
            ],
            "searchable": false,
            "tags": {
                "amenity": "bbq"
            },
            "name": "Barbecue/Grill"
        },
        "amenity/bench": {
            "fields": [
                "backrest"
            ],
            "geometry": [
                "point",
                "vertex",
                "line"
            ],
            "tags": {
                "amenity": "bench"
            },
            "name": "Bench",
            "searchable": false
        },
        "amenity/bicycle_parking": {
            "icon": "bike-trail-black",
            "maki": "npmaki",
            "searchable": false,
            "fields": [
                "bicycle_parking",
                "capacity",
                "operator",
                "covered",
                "access_simple"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [
                "bike"
            ],
            "tags": {
                "amenity": "bicycle_parking"
            },
            "name": "Bicycle Parking"
        },
        "amenity/bicycle_rental": {
            "icon": "bicycle",
            "fields": [
                "capacity",
                "network",
                "operator"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [
                "bike"
            ],
            "tags": {
                "amenity": "bicycle_rental"
            },
            "searchable": false,
            "name": "Bicycle Rental"
        },
        "amenity/bicycle_repair_station": {
            "searchable": false,
            "icon": "bicycle",
            "fields": [
                "operator",
                "brand",
                "opening_hours",
                "fee",
                "service/bicycle/chain_tool",
                "service/bicycle/pump"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [
                "bike"
            ],
            "tags": {
                "amenity": "bicycle_repair_station"
            },
            "name": "Bicycle Repair Station"
        },
        "amenity/boat_rental": {
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "boat_rental"
            },
            "searchable": false,
            "name": "Boat Rental"
        },
        "amenity/bureau_de_change": {
            "icon": "bank",
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "terms": [
                "bureau de change",
                "money changer"
            ],
            "tags": {
                "amenity": "bureau_de_change"
            },
            "name": "Currency Exchange",
            "searchable": false
        },
        "amenity/bus_station": {
            "icon": "bus",
            "fields": [
                "building_area",
                "operator"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "bus_station"
            },
            "name": "Bus Station",
            "searchable": false
        },
        "amenity/cafe": {
            "icon": "cafe",
            "fields": [
                "cuisine",
                "internet_access",
                "address",
                "building_area",
                "opening_hours",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "coffee",
                "tea"
            ],
            "tags": {
                "amenity": "cafe"
            },
            "searchable": false,
            "name": "Cafe"
        },
        "amenity/car_rental": {
            "icon": "car",
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "car_rental"
            },
            "searchable": false,
            "name": "Car Rental"
        },
        "amenity/car_sharing": {
            "icon": "car",
            "fields": [
                "operator",
                "capacity"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "car_sharing"
            },
            "searchable": false,
            "name": "Car Sharing"
        },
        "amenity/car_wash": {
            "icon": "car",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "car_wash"
            },
            "searchable": false,
            "name": "Car Wash"
        },
        "amenity/charging_station": {
            "icon": "car",
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "charging_station"
            },
            "terms": [
                "EV",
                "Electric Vehicle",
                "Supercharger"
            ],
            "name": "Charging Station",
            "searchable": false
        },
        "amenity/childcare": {
            "icon": "school",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "daycare",
                "orphanage",
                "playgroup"
            ],
            "tags": {
                "amenity": "childcare"
            },
            "searchable": false,
            "name": "Nursery/Childcare"
        },
        "amenity/cinema": {
            "icon": "cinema",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "drive-in",
                "film",
                "flick",
                "movie",
                "theater",
                "picture",
                "show",
                "screen"
            ],
            "tags": {
                "amenity": "cinema"
            },
            "searchable": false,
            "name": "Cinema"
        },
        "amenity/clock": {
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "amenity": "clock"
            },
            "searchable": false,
            "name": "Clock"
        },
        "amenity/college": {
            "icon": "college",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "university"
            ],
            "tags": {
                "amenity": "college"
            },
            "searchable": false,
            "name": "College Grounds"
        },
        "amenity/community_centre": {
            "icon": "town-hall",
            "fields": [
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "event",
                "hall"
            ],
            "tags": {
                "amenity": "community_centre"
            },
            "name": "Community Center"
        },
        "amenity/compressed_air": {
            "icon": "car",
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "compressed_air"
            },
            "name": "Compressed Air",
            "searchable": false
        },
        "amenity/courthouse": {
            "icon": "town-hall",
            "fields": [
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "courthouse"
            },
            "searchable": false,
            "name": "Courthouse"
        },
        "amenity/dentist": {
            "searchable": false,
            "icon": "hospital",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "tooth",
                "teeth"
            ],
            "tags": {
                "amenity": "dentist"
            },
            "name": "Dentist"
        },
        "amenity/doctor": {
            "searchable": false,
            "icon": "hospital",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "medic*"
            ],
            "tags": {
                "amenity": "doctors"
            },
            "name": "Doctor"
        },
        "amenity/dojo": {
            "icon": "pitch",
            "fields": [
                "sport",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "martial arts",
                "dojang"
            ],
            "tags": {
                "amenity": "dojo"
            },
            "searchable": false,
            "name": "Dojo / Martial Arts Academy"
        },
        "amenity/drinking_water": {
            "icon": "drinking-water-black",
            "maki": "npmaki",
            "geometry": [
                "point"
            ],
            "tags": {
                "amenity": "drinking_water"
            },
            "terms": [
                "fountain",
                "potable"
            ],
            "name": "Drinking Water",
            "searchable": true
        },
        "amenity/dumpstation": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "amenity": "dumpstation"
            },
            "icon": "sanitary-dump-station-black",
            "maki": "npmaki",
            "name": "Sanitary Disposal Station",
            "searchable": true
        },
        "amenity/embassy": {
            "icon": "embassy",
            "fields": [
                "country",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "embassy"
            },
            "searchable": false,
            "name": "Embassy"
        },
        "amenity/fast_food": {
            "icon": "fast-food",
            "fields": [
                "cuisine",
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "takeaway",
                "delivery",
                "drive_through",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "fast_food"
            },
            "searchable": false,
            "terms": [
                "restaurant"
            ],
            "name": "Fast Food"
        },
        "amenity/ferry_terminal": {
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "amenity": "ferry_terminal"
            },
            "name": "Ferry Terminal",
            "searchable": false
        },
        "amenity/fire_station": {
            "icon": "fire-station",
            "fields": [
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "amenity": "fire_station"
            },
            "searchable": false,
            "name": "Fire Station"
        },
        "amenity/first_aid": {
            "icon": "first-aid-black",
            "maki": "npmaki",
            "name": "First Aid Station",
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "First Aid",
                "medical"
            ],
            "tags": {
                "amenity": "first_aid"
            },
            "searchable": true
        },
        "amenity/food_court": {
            "icon": "food-service-black",
            "maki": "npmaki",
            "geometry": [
                "point"
            ],
            "tags": {
                "amenity": "food_court"
            },
            "name": "Food Service",
            "searchable": true
        },
        "amenity/fountain": {
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "fountain"
            },
            "searchable": false,
            "name": "Fountain"
        },
        "amenity/fuel": {
            "icon": "gas-station-black",
            "maki": "npmaki",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "petrol",
                "fuel",
                "propane",
                "diesel",
                "lng",
                "cng",
                "biodiesel"
            ],
            "tags": {
                "amenity": "fuel"
            },
            "name": "Gas Station",
            "searchable": true
        },
        "amenity/grave_yard": {
            "icon": "cemetery",
            "fields": [
                "religion",
                "denomination"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "grave_yard"
            },
            "searchable": false,
            "name": "Graveyard"
        },
        "amenity/grit_bin": {
            "searchable": false,
            "fields": [
                "access_simple"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "amenity": "grit_bin"
            },
            "terms": [
                "salt",
                "sand"
            ],
            "name": "Grit Bin"
        },
        "amenity/hospital": {
            "icon": "hospital-black",
            "maki": "npmaki",
            "fields": [
                "operator",
                "address",
                "emergency"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "clinic",
                "doctor",
                "emergency room",
                "health service",
                "hospice",
                "infirmary",
                "institution",
                "nursing home",
                "sanatorium",
                "sanitarium",
                "sick",
                "surgery",
                "ward"
            ],
            "tags": {
                "amenity": "hospital"
            },
            "searchable": true,
            "name": "Hospital Grounds"
        },
        "amenity/kindergarten": {
            "icon": "school",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "kindergarden",
                "pre-school"
            ],
            "tags": {
                "amenity": "kindergarten"
            },
            "searchable": false,
            "name": "Preschool/Kindergarten Grounds"
        },
        "amenity/library": {
            "icon": "library",
            "fields": [
                "operator",
                "building_area",
                "address",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "book"
            ],
            "tags": {
                "amenity": "library"
            },
            "searchable": false,
            "name": "Library"
        },
        "amenity/marketplace": {
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "marketplace"
            },
            "searchable": false,
            "name": "Marketplace"
        },
        "amenity/nightclub": {
            "icon": "bar",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "nightclub"
            },
            "terms": [
                "disco*",
                "night club",
                "dancing",
                "dance club"
            ],
            "name": "Nightclub",
            "searchable": false
        },
        "amenity/parking": {
            "icon": "parking-black",
            "maki": "npmaki",
            "searchable": true,
            "fields": [
                "operator",
                "parking",
                "capacity",
                "fee",
                "access_simple",
                "supervised",
                "park_ride",
                "address"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "amenity": "parking"
            },
            "terms": [],
            "name": "Parking"
        },
        "amenity/parking_entrance": {
            "icon": "entrance",
            "fields": [
                "access_simple",
                "ref"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "amenity": "parking_entrance"
            },
            "searchable": false,
            "name": "Parking Garage Entrance/Exit"
        },
        "amenity/pharmacy": {
            "icon": "pharmacy",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "drive_through"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "pharmacy"
            },
            "searchable": false,
            "terms": [
                "drug",
                "medicine"
            ],
            "name": "Pharmacy"
        },
        "amenity/place_of_worship": {
            "icon": "place-of-worship",
            "fields": [
                "religion",
                "denomination",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "abbey",
                "basilica",
                "bethel",
                "cathedral",
                "chancel",
                "chantry",
                "chapel",
                "church",
                "fold",
                "house of God",
                "house of prayer",
                "house of worship",
                "minster",
                "mission",
                "mosque",
                "oratory",
                "parish",
                "sacellum",
                "sanctuary",
                "shrine",
                "synagogue",
                "tabernacle",
                "temple"
            ],
            "tags": {
                "amenity": "place_of_worship"
            },
            "searchable": false,
            "name": "Place of Worship"
        },
        "amenity/place_of_worship/buddhist": {
            "icon": "place-of-worship",
            "fields": [
                "denomination",
                "building_area",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "stupa",
                "vihara",
                "monastery",
                "temple",
                "pagoda",
                "zendo",
                "dojo"
            ],
            "tags": {
                "amenity": "place_of_worship",
                "religion": "buddhist"
            },
            "searchable": false,
            "name": "Buddhist Temple"
        },
        "amenity/place_of_worship/christian": {
            "icon": "religious-christian",
            "fields": [
                "denomination",
                "building_area",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "christian",
                "abbey",
                "basilica",
                "bethel",
                "cathedral",
                "chancel",
                "chantry",
                "chapel",
                "fold",
                "house of God",
                "house of prayer",
                "house of worship",
                "minster",
                "mission",
                "oratory",
                "parish",
                "sacellum",
                "sanctuary",
                "shrine",
                "tabernacle",
                "temple"
            ],
            "tags": {
                "amenity": "place_of_worship",
                "religion": "christian"
            },
            "searchable": false,
            "name": "Church"
        },
        "amenity/place_of_worship/jewish": {
            "icon": "religious-jewish",
            "fields": [
                "denomination",
                "building_area",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "jewish"
            ],
            "tags": {
                "amenity": "place_of_worship",
                "religion": "jewish"
            },
            "searchable": false,
            "name": "Synagogue"
        },
        "amenity/place_of_worship/muslim": {
            "icon": "religious-muslim",
            "fields": [
                "denomination",
                "building_area",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "muslim"
            ],
            "tags": {
                "amenity": "place_of_worship",
                "religion": "muslim"
            },
            "searchable": false,
            "name": "Mosque"
        },
        "amenity/police": {
            "icon": "police",
            "fields": [
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "badge",
                "constable",
                "constabulary",
                "cop",
                "detective",
                "fed",
                "law",
                "enforcement",
                "officer",
                "patrol"
            ],
            "tags": {
                "amenity": "police"
            },
            "searchable": false,
            "name": "Police"
        },
        "amenity/post_box": {
            "icon": "post",
            "fields": [
                "operator",
                "collection_times",
                "drive_through"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "amenity": "post_box"
            },
            "terms": [
                "letter",
                "post"
            ],
            "searchable": false,
            "name": "Mailbox"
        },
        "amenity/post_office": {
            "icon": "post-office-black",
            "maki": "npmaki",
            "fields": [
                "operator",
                "address",
                "building_area",
                "collection_times"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "letter",
                "mail"
            ],
            "tags": {
                "amenity": "post_office"
            },
            "searchable": true,
            "name": "Post Office"
        },
        "amenity/pub": {
            "icon": "beer",
            "fields": [
                "address",
                "building_area",
                "opening_hours",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "amenity": "pub"
            },
            "searchable": false,
            "terms": [
                "dive",
                "beer",
                "bier",
                "booze"
            ],
            "name": "Pub"
        },
        "amenity/public_bookcase": {
            "searchable": false,
            "icon": "library",
            "fields": [
                "name",
                "operator",
                "capacity",
                "website"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "library",
                "bookcrossing"
            ],
            "tags": {
                "amenity": "public_bookcase"
            },
            "name": "Public Bookcase"
        },
        "amenity/ranger_station": {
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "permit center",
                "permit centre",
                "backcountry office",
                "warden office",
                "warden center"
            ],
            "tags": {
                "amenity": "ranger_station"
            },
            "icon": "ranger-station-black",
            "maki": "npmaki",
            "name": "Ranger Station",
            "searchable": true
        },
        "amenity/recycling": {
            "fields": [
                "operator",
                "address",
                "recycling/cans",
                "recycling/glass",
                "recycling/paper",
                "recycling/clothes"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "can",
                "bottle",
                "garbage",
                "scrap",
                "trash"
            ],
            "tags": {
                "amenity": "recycling"
            },
            "name": "Recycling",
            "icon": "recycling-black",
            "maki": "npmaki",
            "searchable": true
        },
        "amenity/register_office": {
            "icon": "town-hall",
            "fields": [
                "address",
                "building_area",
                "opening_hours",
                "operator"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "amenity": "register_office"
            },
            "name": "Register Office"
        },
        "amenity/restaurant": {
            "icon": "restaurant",
            "fields": [
                "cuisine",
                "address",
                "building_area",
                "opening_hours",
                "capacity",
                "takeaway",
                "delivery",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "bar",
                "breakfast",
                "cafe",
                "café",
                "canteen",
                "coffee",
                "dine",
                "dining",
                "dinner",
                "drive-in",
                "eat",
                "grill",
                "lunch",
                "table"
            ],
            "tags": {
                "amenity": "restaurant"
            },
            "searchable": false,
            "name": "Restaurant"
        },
        "amenity/school": {
            "icon": "school",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "academy",
                "elementary school",
                "middle school",
                "high school"
            ],
            "tags": {
                "amenity": "school"
            },
            "searchable": false,
            "name": "School Grounds"
        },
        "amenity/shelter": {
            "fields": [
                "shelter_type"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [
                "lean-to",
                "gazebo",
                "picnic"
            ],
            "tags": {
                "amenity": "shelter",
                "building": "hut",
                "tourism": "camp_site"
            },
            "icon": "shelter-black",
            "maki": "npmaki",
            "searchable": true,
            "name": "Shelter"
        },
        "amenity/shower": {
            "geometry": [
                "point",
                "vertex",
                "line"
            ],
            "tags": {
                "amenity": "shower"
            },
            "icon": "showers-black",
            "maki": "npmaki",
            "searchable": true,
            "name": "Showers"
        },
        "amenity/social_facility": {
            "searchable": false,
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "wheelchair",
                "social_facility_for"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "amenity": "social_facility"
            },
            "name": "Social Facility"
        },
        "amenity/social_facility/food_bank": {
            "searchable": false,
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "social_facility_for"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "amenity": "social_facility",
                "social_facility": "food_bank"
            },
            "name": "Food Bank"
        },
        "amenity/social_facility/group_home": {
            "searchable": false,
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "wheelchair",
                "social_facility_for"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "old",
                "senior",
                "living"
            ],
            "tags": {
                "amenity": "social_facility",
                "social_facility": "group_home",
                "social_facility:for": "senior"
            },
            "name": "Elderly Group Home"
        },
        "amenity/social_facility/homeless_shelter": {
            "searchable": false,
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "wheelchair",
                "social_facility_for"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "houseless",
                "unhoused",
                "displaced"
            ],
            "tags": {
                "amenity": "social_facility",
                "social_facility": "shelter",
                "social_facility:for": "homeless"
            },
            "name": "Homeless Shelter"
        },
        "amenity/studio": {
            "searchable": false,
            "icon": "music",
            "fields": [
                "studio_type",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "recording",
                "radio",
                "television"
            ],
            "tags": {
                "amenity": "studio"
            },
            "name": "Studio"
        },
        "amenity/swimming_pool": {
            "icon": "swimming",
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "amenity": "swimming_pool"
            },
            "name": "Swimming Pool",
            "searchable": false
        },
        "amenity/taxi": {
            "icon": "car",
            "fields": [
                "operator",
                "capacity"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [
                "cab"
            ],
            "tags": {
                "amenity": "taxi"
            },
            "searchable": false,
            "name": "Taxi Stand"
        },
        "amenity/telephone": {
            "icon": "telephone-black",
            "maki": "npmaki",
            "searchable": true,
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "amenity": "telephone"
            },
            "terms": [
                "phone"
            ],
            "name": "Telephone"
        },
        "amenity/theatre": {
            "icon": "theatre",
            "fields": [
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "theatre",
                "performance",
                "play",
                "musical"
            ],
            "tags": {
                "amenity": "theatre"
            },
            "searchable": false,
            "name": "Theater"
        },
        "amenity/toilets": {
            "fields": [
                "toilets/disposal",
                "operator",
                "building_area",
                "access_toilets",
                "gender"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [
                "bathroom",
                "toilet",
                "restroom",
                "outhouse",
                "privy",
                "head",
                "lavatory",
                "latrine",
                "water closet",
                "WC",
                "W.C."
            ],
            "tags": {
                "amenity": "toilets"
            },
            "icon": "restroom-black",
            "maki": "npmaki",
            "name": "Restroom",
            "searchable": true
        },
        "amenity/townhall": {
            "icon": "town-hall",
            "fields": [
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "village",
                "city",
                "government",
                "courthouse",
                "municipal"
            ],
            "tags": {
                "amenity": "townhall"
            },
            "searchable": false,
            "name": "Town Hall"
        },
        "amenity/university": {
            "icon": "college",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "college"
            ],
            "tags": {
                "amenity": "university"
            },
            "searchable": false,
            "name": "University Grounds"
        },
        "amenity/vending_machine": {
            "fields": [
                "vending",
                "operator"
            ],
            "geometry": [
                "point"
            ],
            "terms": [
                "snack",
                "soda",
                "ticket"
            ],
            "tags": {
                "amenity": "vending_machine"
            },
            "searchable": false,
            "name": "Vending Machine"
        },
        "amenity/veterinary": {
            "icon": "dog-park",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "pet clinic",
                "veterinarian",
                "animal hospital",
                "pet doctor"
            ],
            "tags": {
                "amenity": "veterinary"
            },
            "searchable": false,
            "name": "Veterinary"
        },
        "amenity/waste_basket": {
            "icon": "litter-receptacle-black",
            "maki": "npmaki",
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "amenity": "waste_basket"
            },
            "terms": [
                "rubbish",
                "litter",
                "trash",
                "garbage"
            ],
            "name": "Waste Basket",
            "searchable": true
        },
        "area": {
            "searchable": false,
            "name": "Area",
            "tags": {
                "area": "yes"
            },
            "geometry": [
                "area"
            ],
            "matchScore": 0.1
        },
        "barrier": {
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "barrier": "*"
            },
            "fields": [
                "barrier"
            ],
            "searchable": false,
            "name": "Barrier"
        },
        "barrier/block": {
            "fields": [
                "access"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "barrier": "block"
            },
            "searchable": false,
            "name": "Block"
        },
        "barrier/bollard": {
            "fields": [
                "access"
            ],
            "geometry": [
                "point",
                "vertex",
                "line"
            ],
            "tags": {
                "barrier": "bollard"
            },
            "searchable": false,
            "name": "Bollard"
        },
        "barrier/cattle_grid": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "barrier": "cattle_grid"
            },
            "searchable": false,
            "name": "Cattle Grid"
        },
        "barrier/city_wall": {
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "barrier": "city_wall"
            },
            "searchable": false,
            "name": "City Wall"
        },
        "barrier/cycle_barrier": {
            "fields": [
                "access"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "barrier": "cycle_barrier"
            },
            "searchable": false,
            "name": "Cycle Barrier"
        },
        "barrier/ditch": {
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "barrier": "ditch"
            },
            "searchable": false,
            "name": "Ditch"
        },
        "barrier/entrance": {
            "geometry": [
                "point"
            ],
            "tags": {
                "barrier": "entrance"
            },
            "name": "Entrance Station",
            "searchable": true
        },
        "barrier/fence": {
            "geometry": [
                "line"
            ],
            "tags": {
                "barrier": "fence"
            },
            "searchable": false,
            "name": "Fence"
        },
        "barrier/gate": {
            "geometry": [
                "point"
            ],
            "tags": {
                "barrier": "gate"
            },
            "name": "Gate",
            "searchable": false
        },
        "barrier/hedge": {
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "barrier": "hedge"
            },
            "searchable": false,
            "name": "Hedge"
        },
        "barrier/kissing_gate": {
            "fields": [
                "access"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "barrier": "kissing_gate"
            },
            "searchable": false,
            "name": "Kissing Gate"
        },
        "barrier/lift_gate": {
            "fields": [
                "access"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "barrier": "lift_gate"
            },
            "searchable": false,
            "name": "Lift Gate"
        },
        "barrier/retaining_wall": {
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "barrier": "retaining_wall"
            },
            "searchable": false,
            "name": "Retaining Wall"
        },
        "barrier/stile": {
            "fields": [
                "access"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "barrier": "stile"
            },
            "searchable": false,
            "name": "Stile"
        },
        "barrier/toll_booth": {
            "fields": [
                "access"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "barrier": "toll_booth"
            },
            "searchable": false,
            "name": "Toll Booth"
        },
        "barrier/wall": {
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "barrier": "wall"
            },
            "searchable": false,
            "name": "Wall"
        },
        "boundary/administrative": {
            "searchable": false,
            "name": "Administrative Boundary",
            "geometry": [
                "line"
            ],
            "tags": {
                "boundary": "administrative"
            },
            "fields": [
                "admin_level"
            ]
        },
        "bridge/yes_bridge": {
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "bridge": "yes"
            },
            "searchable": false,
            "name": "Bridge"
        },
        "building": {
            "icon": "building",
            "fields": [
                "building",
                "levels",
                "address"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "building": "*"
            },
            "terms": [],
            "searchable": true,
            "name": "Building"
        },
        "building/apartments": {
            "icon": "commercial",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "apartments"
            },
            "searchable": true,
            "name": "Apartments"
        },
        "building/barn": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "barn"
            },
            "searchable": true,
            "name": "Barn"
        },
        "building/bunker": {
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "bunker"
            },
            "searchable": true,
            "name": "Bunker"
        },
        "building/cabin": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "cabin"
            },
            "searchable": true,
            "name": "Cabin"
        },
        "building/cathedral": {
            "icon": "place-of-worship",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "cathedral"
            },
            "searchable": true,
            "name": "Cathedral"
        },
        "building/chapel": {
            "icon": "place-of-worship",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "chapel"
            },
            "searchable": true,
            "name": "Chapel"
        },
        "building/church": {
            "icon": "place-of-worship",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "church"
            },
            "searchable": true,
            "name": "Church"
        },
        "building/college": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "university"
            ],
            "tags": {
                "building": "college"
            },
            "name": "College Building",
            "searchable": false
        },
        "building/commercial": {
            "icon": "commercial",
            "fields": [
                "address",
                "levels",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "commercial"
            },
            "searchable": true,
            "name": "Commercial Building"
        },
        "building/construction": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "construction"
            },
            "searchable": true,
            "name": "Building Under Construction"
        },
        "building/detached": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "detached"
            },
            "searchable": true,
            "name": "Detached Home"
        },
        "building/dormitory": {
            "icon": "building",
            "fields": [
                "address",
                "levels",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "dormitory"
            },
            "searchable": true,
            "name": "Dormitory"
        },
        "building/entrance": {
            "icon": "entrance",
            "geometry": [
                "vertex"
            ],
            "tags": {
                "building": "entrance"
            },
            "name": "Entrance/Exit",
            "searchable": true
        },
        "building/garage": {
            "fields": [
                "capacity"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "garage"
            },
            "searchable": true,
            "name": "Garage",
            "icon": "warehouse"
        },
        "building/garages": {
            "icon": "warehouse",
            "fields": [
                "capacity"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "garages"
            },
            "searchable": true,
            "name": "Garages"
        },
        "building/gov_headquarters": {
            "geometry": [
                "point"
            ],
            "tags": {
                "building": "office",
                "office": "government",
                "function": "headquarters"
            },
            "name": "Headquarters",
            "icon": "commercial",
            "searchable": true
        },
        "building/greenhouse": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "greenhouse"
            },
            "searchable": true,
            "name": "Greenhouse"
        },
        "building/hospital": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "hospital"
            },
            "searchable": true,
            "name": "Hospital Building"
        },
        "building/hotel": {
            "icon": "building",
            "fields": [
                "address",
                "levels",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "hotel"
            },
            "searchable": true,
            "name": "Hotel Building"
        },
        "building/house": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "house"
            },
            "searchable": true,
            "name": "House"
        },
        "building/hut": {
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "hut"
            },
            "searchable": true,
            "name": "Hut"
        },
        "building/industrial": {
            "icon": "industrial",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "industrial"
            },
            "searchable": true,
            "name": "Industrial Building"
        },
        "building/kindergarten": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "kindergarden",
                "pre-school"
            ],
            "tags": {
                "building": "kindergarten"
            },
            "name": "Preschool/Kindergarten Building",
            "searchable": false
        },
        "building/office": {
            "geometry": [
                "point"
            ],
            "tags": {
                "building": "office"
            },
            "searchable": true,
            "name": "Office",
            "icon": "commercial"
        },
        "building/public": {
            "icon": "building",
            "fields": [
                "address",
                "levels",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "public"
            },
            "searchable": true,
            "name": "Public Building"
        },
        "building/residential": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "residential"
            },
            "searchable": true,
            "name": "Residential Building"
        },
        "building/retail": {
            "icon": "building",
            "fields": [
                "address",
                "levels",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "retail"
            },
            "searchable": true,
            "name": "Retail Building"
        },
        "building/roof": {
            "icon": "building",
            "fields": [
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "roof"
            },
            "searchable": true,
            "name": "Roof"
        },
        "building/school": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "academy",
                "elementary school",
                "middle school",
                "high school"
            ],
            "tags": {
                "building": "school"
            },
            "searchable": true,
            "name": "School Building"
        },
        "building/shed": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "shed"
            },
            "searchable": true,
            "name": "Shed"
        },
        "building/stable": {
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "stable"
            },
            "name": "Stable",
            "icon": "stable-black",
            "maki": "npmaki",
            "searchable": true
        },
        "building/static_caravan": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "static_caravan"
            },
            "searchable": true,
            "name": "Static Mobile Home"
        },
        "building/terrace": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "terrace"
            },
            "searchable": true,
            "name": "Row Houses"
        },
        "building/train_station": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "building": "train_station"
            },
            "searchable": true,
            "name": "Train Station"
        },
        "building/university": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "college"
            ],
            "tags": {
                "building": "university"
            },
            "searchable": true,
            "name": "University Building"
        },
        "building/warehouse": {
            "icon": "building",
            "fields": [
                "address",
                "levels"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "warehouse"
            },
            "searchable": true,
            "name": "Warehouse"
        },
        "cemetery/grave": {
            "icon": "cemetery",
            "geometry": [
                "point"
            ],
            "tags": {
                "cemetery": "grave"
            },
            "terms": [],
            "searchable": true,
            "name": "Cemetery"
        },
        "craft": {
            "icon": "marker-stroked",
            "fields": [
                "craft",
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "*"
            },
            "terms": [],
            "name": "Craft",
            "searchable": false
        },
        "craft/basket_maker": {
            "searchable": false,
            "icon": "art-gallery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "basket_maker"
            },
            "name": "Basket Maker"
        },
        "craft/beekeeper": {
            "searchable": false,
            "icon": "farm",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "beekeeper"
            },
            "name": "Beekeeper"
        },
        "craft/blacksmith": {
            "searchable": false,
            "icon": "farm",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "blacksmith"
            },
            "name": "Blacksmith"
        },
        "craft/boatbuilder": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "boatbuilder"
            },
            "name": "Boat Builder"
        },
        "craft/bookbinder": {
            "searchable": false,
            "icon": "library",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "book repair"
            ],
            "tags": {
                "craft": "bookbinder"
            },
            "name": "Bookbinder"
        },
        "craft/brewery": {
            "searchable": false,
            "icon": "beer",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "beer",
                "bier"
            ],
            "tags": {
                "craft": "brewery"
            },
            "name": "Brewery"
        },
        "craft/carpenter": {
            "searchable": false,
            "icon": "logging",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "woodworker"
            ],
            "tags": {
                "craft": "carpenter"
            },
            "name": "Carpenter"
        },
        "craft/carpet_layer": {
            "searchable": false,
            "icon": "square",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "carpet_layer"
            },
            "name": "Carpet Layer"
        },
        "craft/caterer": {
            "searchable": false,
            "icon": "bakery",
            "fields": [
                "cuisine",
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "caterer"
            },
            "name": "Caterer"
        },
        "craft/clockmaker": {
            "searchable": false,
            "icon": "circle-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "clockmaker"
            },
            "name": "Clockmaker"
        },
        "craft/confectionery": {
            "searchable": false,
            "icon": "bakery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "sweets",
                "candy"
            ],
            "tags": {
                "craft": "confectionery"
            },
            "name": "Confectionery"
        },
        "craft/dressmaker": {
            "searchable": false,
            "icon": "clothing-store",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "seamstress"
            ],
            "tags": {
                "craft": "dressmaker"
            },
            "name": "Dressmaker"
        },
        "craft/electrician": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "power",
                "wire"
            ],
            "tags": {
                "craft": "electrician"
            },
            "name": "Electrician"
        },
        "craft/gardener": {
            "searchable": false,
            "icon": "garden",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "landscaper",
                "grounds keeper"
            ],
            "tags": {
                "craft": "gardener"
            },
            "name": "Gardener"
        },
        "craft/glaziery": {
            "searchable": false,
            "icon": "fire-station",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "glass",
                "stained-glass",
                "window"
            ],
            "tags": {
                "craft": "glaziery"
            },
            "name": "Glaziery"
        },
        "craft/handicraft": {
            "searchable": false,
            "icon": "art-gallery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "handicraft"
            },
            "name": "Handicraft"
        },
        "craft/hvac": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "heat*",
                "vent*",
                "air conditioning"
            ],
            "tags": {
                "craft": "hvac"
            },
            "name": "HVAC"
        },
        "craft/insulator": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "insulation"
            },
            "name": "Insulator"
        },
        "craft/jeweler": {
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "jeweler"
            },
            "name": "Jeweler",
            "searchable": false
        },
        "craft/key_cutter": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "key_cutter"
            },
            "name": "Key Cutter"
        },
        "craft/locksmith": {
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "locksmith"
            },
            "name": "Locksmith",
            "searchable": false
        },
        "craft/metal_construction": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "metal_construction"
            },
            "name": "Metal Construction"
        },
        "craft/optician": {
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "optician"
            },
            "name": "Optician",
            "searchable": false
        },
        "craft/painter": {
            "searchable": false,
            "icon": "art-gallery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "painter"
            },
            "name": "Painter"
        },
        "craft/photographer": {
            "searchable": false,
            "icon": "camera",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "photographer"
            },
            "name": "Photographer"
        },
        "craft/photographic_laboratory": {
            "searchable": false,
            "icon": "camera",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "film"
            ],
            "tags": {
                "craft": "photographic_laboratory"
            },
            "name": "Photographic Laboratory"
        },
        "craft/plasterer": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "plasterer"
            },
            "name": "Plasterer"
        },
        "craft/plumber": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "pipe"
            ],
            "tags": {
                "craft": "plumber"
            },
            "name": "Plumber"
        },
        "craft/pottery": {
            "searchable": false,
            "icon": "art-gallery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "ceramic"
            ],
            "tags": {
                "craft": "pottery"
            },
            "name": "Pottery"
        },
        "craft/rigger": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "rigger"
            },
            "name": "Rigger"
        },
        "craft/roofer": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "roofer"
            },
            "name": "Roofer"
        },
        "craft/saddler": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "saddler"
            },
            "name": "Saddler"
        },
        "craft/sailmaker": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "sailmaker"
            },
            "name": "Sailmaker"
        },
        "craft/sawmill": {
            "searchable": false,
            "icon": "park",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "lumber"
            ],
            "tags": {
                "craft": "sawmill"
            },
            "name": "Sawmill"
        },
        "craft/scaffolder": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "scaffolder"
            },
            "name": "Scaffolder"
        },
        "craft/sculpter": {
            "searchable": false,
            "icon": "art-gallery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "sculpter"
            },
            "name": "Sculpter"
        },
        "craft/shoemaker": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "cobbler"
            ],
            "tags": {
                "craft": "shoemaker"
            },
            "name": "Shoemaker"
        },
        "craft/stonemason": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "masonry"
            ],
            "tags": {
                "craft": "stonemason"
            },
            "name": "Stonemason"
        },
        "craft/sweep": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "sweep"
            },
            "name": "Chimney Sweep"
        },
        "craft/tailor": {
            "icon": "clothing-store",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "clothes",
                "suit"
            ],
            "tags": {
                "craft": "tailor"
            },
            "name": "Tailor",
            "searchable": false
        },
        "craft/tiler": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "tiler"
            },
            "name": "Tiler"
        },
        "craft/tinsmith": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "tinsmith"
            },
            "name": "Tinsmith"
        },
        "craft/upholsterer": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "upholsterer"
            },
            "name": "Upholsterer"
        },
        "craft/watchmaker": {
            "searchable": false,
            "icon": "circle-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "watchmaker"
            },
            "name": "Watchmaker"
        },
        "craft/window_construction": {
            "searchable": false,
            "icon": "marker-stroked",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "glass"
            ],
            "tags": {
                "craft": "window_construction"
            },
            "name": "Window Construction"
        },
        "craft/winery": {
            "icon": "alcohol-shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "craft": "winery"
            },
            "name": "Winery",
            "searchable": false
        },
        "embankment": {
            "geometry": [
                "line"
            ],
            "tags": {
                "embankment": "yes"
            },
            "searchable": false,
            "name": "Embankment",
            "matchScore": 0.2
        },
        "emergency/ambulance_station": {
            "icon": "hospital",
            "fields": [
                "operator",
                "building_area",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "EMS",
                "EMT",
                "rescue"
            ],
            "tags": {
                "emergency": "ambulance_station"
            },
            "searchable": false,
            "name": "Ambulance Station"
        },
        "emergency/fire_hydrant": {
            "fields": [
                "fire_hydrant/type"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "emergency": "fire_hydrant"
            },
            "searchable": false,
            "name": "Fire Hydrant"
        },
        "emergency/phone": {
            "icon": "telephone-white",
            "maki": "npmaki",
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "emergency": "phone"
            },
            "searchable": true,
            "name": "Emergency Telephone"
        },
        "emergency/water_tank": {
            "icon": "radiator-water",
            "maki": "npmaki",
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "emergency": "water_tank"
            },
            "searchable": true,
            "name": "Radiator Water"
        },
        "entrance": {
            "icon": "entrance",
            "geometry": [
                "vertex"
            ],
            "tags": {
                "entrance": "*"
            },
            "fields": [
                "entrance",
                "access_simple",
                "address"
            ],
            "searchable": false,
            "name": "Entrance/Exit"
        },
        "footway/crossing": {
            "fields": [
                "crossing",
                "access",
                "surface",
                "sloped_curb",
                "tactile_paving"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "footway",
                "footway": "crossing"
            },
            "terms": [
                "crosswalk",
                "zebra crossing"
            ],
            "searchable": false,
            "name": "Crossing"
        },
        "footway/crosswalk": {
            "fields": [
                "crossing",
                "access",
                "surface",
                "sloped_curb",
                "tactile_paving"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "footway",
                "footway": "crossing",
                "crossing": "zebra"
            },
            "terms": [
                "zebra crossing"
            ],
            "name": "Crosswalk",
            "searchable": false
        },
        "footway/sidewalk": {
            "fields": [
                "surface",
                "lit",
                "width",
                "structure",
                "access"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "footway",
                "footway": "sidewalk"
            },
            "terms": [],
            "searchable": true,
            "name": "Sidewalk"
        },
        "ford": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "ford": "yes"
            },
            "name": "Ford",
            "searchable": false
        },
        "free_flying_site/takeoff": {
            "geometry": [
                "point"
            ],
            "tags": {
                "free_flying:site": "takeoff"
            },
            "name": "Parasailing Launch",
            "searchable": false
        },
        "golf/bunker": {
            "icon": "golf",
            "geometry": [
                "area"
            ],
            "tags": {
                "golf": "bunker",
                "natural": "sand"
            },
            "terms": [
                "hazard",
                "bunker"
            ],
            "searchable": false,
            "name": "Sand Trap"
        },
        "golf/fairway": {
            "icon": "golf",
            "geometry": [
                "area"
            ],
            "tags": {
                "golf": "fairway",
                "landuse": "grass"
            },
            "searchable": false,
            "name": "Fairway"
        },
        "golf/green": {
            "icon": "golf",
            "geometry": [
                "area"
            ],
            "tags": {
                "golf": "green",
                "landuse": "grass",
                "leisure": "pitch",
                "sport": "golf"
            },
            "searchable": false,
            "name": "Putting Green"
        },
        "golf/hole": {
            "icon": "golf",
            "fields": [
                "golf_hole",
                "par",
                "handicap"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "golf": "hole"
            },
            "searchable": false,
            "name": "Golf Hole"
        },
        "golf/lateral_water_hazard": {
            "icon": "golf",
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "golf": "lateral_water_hazard",
                "natural": "water"
            },
            "searchable": false,
            "name": "Lateral Water Hazard"
        },
        "golf/rough": {
            "icon": "golf",
            "geometry": [
                "area"
            ],
            "tags": {
                "golf": "rough",
                "landuse": "grass"
            },
            "searchable": false,
            "name": "Rough"
        },
        "golf/tee": {
            "icon": "golf",
            "geometry": [
                "area"
            ],
            "tags": {
                "golf": "tee",
                "landuse": "grass"
            },
            "terms": [
                "teeing ground"
            ],
            "searchable": false,
            "name": "Tee Box"
        },
        "golf/water_hazard": {
            "icon": "golf",
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "golf": "water_hazard",
                "natural": "water"
            },
            "searchable": false,
            "name": "Water Hazard"
        },
        "highway": {
            "fields": [
                "highway"
            ],
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "highway": "*"
            },
            "searchable": false,
            "name": "Highway"
        },
        "highway/bicycle_trail": {
            "icon": "bike-trail-black",
            "maki": "npmaki",
            "geometry": [
                "point"
            ],
            "tags": {
                "highway": "track",
                "bicycle": "yes"
            },
            "name": "Bicycle Trail",
            "searchable": true
        },
        "highway/bridleway": {
            "fields": [
                "surface",
                "width",
                "structure",
                "access"
            ],
            "icon": "highway-bridleway",
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "bridleway"
            },
            "terms": [
                "bridlepath",
                "bridleway",
                "equestrian",
                "horse"
            ],
            "searchable": true,
            "name": "Equestrian Path"
        },
        "highway/bus_stop": {
            "icon": "bus-shuttle-stop-black",
            "maki": "npmaki",
            "fields": [
                "network",
                "operator",
                "bench",
                "shelter",
                "covered"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "highway": "bus_stop"
            },
            "name": "Bus Stop / Shuttle Stop",
            "searchable": true
        },
        "highway/crossing": {
            "fields": [
                "crossing",
                "sloped_curb",
                "tactile_paving"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "crossing"
            },
            "terms": [],
            "searchable": false,
            "name": "Crossing"
        },
        "highway/crosswalk": {
            "fields": [
                "crossing",
                "sloped_curb",
                "tactile_paving"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "crossing",
                "crossing": "zebra"
            },
            "terms": [
                "zebra crossing"
            ],
            "name": "Crosswalk",
            "searchable": false
        },
        "highway/cycleway": {
            "icon": "highway-cycleway",
            "fields": [
                "surface",
                "lit",
                "width",
                "oneway",
                "structure",
                "access"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "cycleway"
            },
            "searchable": false,
            "terms": [
                "bike"
            ],
            "name": "Cycle Path"
        },
        "highway/footway": {
            "icon": "highway-footway",
            "fields": [
                "surface",
                "lit",
                "width",
                "structure",
                "access"
            ],
            "geometry": [
                "line",
                "area"
            ],
            "terms": [
                "hike",
                "hiking",
                "trackway",
                "trail",
                "walk"
            ],
            "tags": {
                "highway": "footway"
            },
            "searchable": false,
            "name": "Foot Path"
        },
        "highway/four_wheel_drive_road": {
            "icon": "4-wheel-drive-black",
            "maki": "npmaki",
            "fields": [
                "tracktype",
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "highway": "track",
                "atv": "yes"
            },
            "terms": [
                "ATV",
                "All Terrain Vehicle",
                "Off-road",
                "4wd"
            ],
            "name": "Four-Wheel Drive Road",
            "searchable": true
        },
        "highway/living_street": {
            "icon": "highway-living-street",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "living_street"
            },
            "searchable": false,
            "name": "Living Street"
        },
        "highway/milemarker": {
            "geometry": [
                "point"
            ],
            "tags": {
                "highway": "milemarker"
            },
            "name": "Mile Marker",
            "searchable": false
        },
        "highway/mini_roundabout": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "mini_roundabout"
            },
            "fields": [
                "clock_direction"
            ],
            "searchable": false,
            "name": "Mini-Roundabout"
        },
        "highway/motor_bike_trail": {
            "icon": "motor-bike-trail-black",
            "maki": "npmaki",
            "fields": [
                "tracktype",
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "highway": "track",
                "motorbike": "yes"
            },
            "terms": [
                "Motorbike",
                "Motorcycle",
                "Dirt Bike",
                "4wd"
            ],
            "name": "Motor Bike Trail",
            "searchable": true
        },
        "highway/motorway": {
            "icon": "highway-motorway",
            "fields": [
                "oneway_yes",
                "maxspeed",
                "structure",
                "access",
                "lanes",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "motorway"
            },
            "terms": [],
            "searchable": false,
            "name": "Motorway"
        },
        "highway/motorway_junction": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "motorway_junction"
            },
            "fields": [
                "ref"
            ],
            "searchable": false,
            "name": "Motorway Junction / Exit"
        },
        "highway/motorway_link": {
            "icon": "highway-motorway-link",
            "fields": [
                "oneway_yes",
                "maxspeed",
                "structure",
                "access",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "motorway_link"
            },
            "addTags": {
                "highway": "motorway_link",
                "oneway": "yes"
            },
            "removeTags": {
                "highway": "motorway_link",
                "oneway": "yes"
            },
            "terms": [
                "ramp",
                "on ramp",
                "off ramp"
            ],
            "searchable": false,
            "name": "Motorway Link"
        },
        "highway/path": {
            "icon": "highway-path",
            "fields": [
                "surface",
                "width",
                "structure",
                "access",
                "incline",
                "sac_scale",
                "trail_visibility",
                "mtb/scale",
                "mtb/scale/uphill",
                "mtb/scale/imba",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "terms": [
                "hike",
                "hiking",
                "trackway",
                "trail",
                "walk"
            ],
            "tags": {
                "highway": "path"
            },
            "searchable": true,
            "name": "Trail"
        },
        "highway/pedestrian": {
            "fields": [
                "surface",
                "lit",
                "width",
                "oneway",
                "structure",
                "access"
            ],
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "highway": "pedestrian"
            },
            "terms": [],
            "searchable": false,
            "name": "Pedestrian"
        },
        "highway/primary": {
            "icon": "highway-primary",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "lanes",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "primary"
            },
            "terms": [],
            "searchable": false,
            "name": "Primary Road"
        },
        "highway/primary_link": {
            "icon": "highway-primary-link",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "primary_link"
            },
            "searchable": false,
            "terms": [
                "ramp",
                "on ramp",
                "off ramp"
            ],
            "name": "Primary Link"
        },
        "highway/raceway": {
            "icon": "highway-unclassified",
            "fields": [
                "oneway",
                "surface",
                "sport_racing",
                "structure"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "raceway"
            },
            "addTags": {
                "highway": "raceway",
                "sport": "motor"
            },
            "terms": [
                "auto*",
                "race*",
                "nascar"
            ],
            "name": "Motor Raceway",
            "searchable": false
        },
        "highway/residential": {
            "icon": "highway-residential",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "residential"
            },
            "terms": [],
            "searchable": false,
            "name": "Residential Road"
        },
        "highway/rest_area": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "highway": "rest_area"
            },
            "terms": [
                "rest stop"
            ],
            "searchable": false,
            "name": "Rest Area"
        },
        "highway/road": {
            "icon": "highway-road",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "road"
            },
            "terms": [],
            "searchable": false,
            "name": "Unknown Road"
        },
        "highway/secondary": {
            "icon": "highway-secondary",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "lanes",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "secondary"
            },
            "terms": [],
            "searchable": false,
            "name": "Secondary Road"
        },
        "highway/secondary_link": {
            "icon": "highway-secondary-link",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "secondary_link"
            },
            "searchable": false,
            "terms": [
                "ramp",
                "on ramp",
                "off ramp"
            ],
            "name": "Secondary Link"
        },
        "highway/service": {
            "icon": "highway-service",
            "fields": [
                "service",
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "service"
            },
            "terms": [],
            "searchable": false,
            "name": "Service Road"
        },
        "highway/service/alley": {
            "icon": "highway-service",
            "fields": [
                "oneway",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "service",
                "service": "alley"
            },
            "searchable": false,
            "name": "Alley"
        },
        "highway/service/drive-through": {
            "icon": "highway-service",
            "fields": [
                "oneway",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "service",
                "service": "drive-through"
            },
            "searchable": false,
            "name": "Drive-Through"
        },
        "highway/service/driveway": {
            "icon": "highway-service",
            "fields": [
                "oneway",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "service",
                "service": "driveway"
            },
            "searchable": false,
            "name": "Driveway"
        },
        "highway/service/emergency_access": {
            "icon": "highway-service",
            "fields": [
                "oneway",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "service",
                "service": "emergency_access"
            },
            "searchable": false,
            "name": "Emergency Access"
        },
        "highway/service/parking_aisle": {
            "icon": "highway-service",
            "fields": [
                "oneway",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "service",
                "service": "parking_aisle"
            },
            "searchable": false,
            "name": "Parking Aisle"
        },
        "highway/services": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "highway": "services"
            },
            "terms": [
                "services",
                "travel plaza",
                "service station"
            ],
            "searchable": false,
            "name": "Service Area"
        },
        "highway/snowmobile_trail": {
            "icon": "snowmobile-trail-black",
            "maki": "npmaki",
            "fields": [
                "tracktype",
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "point",
                "vertex",
                "line"
            ],
            "tags": {
                "highway": "track",
                "snowmobile": "yes"
            },
            "terms": [
                "Snowmobile",
                "Snow Machine"
            ],
            "name": "Snowmobile Trail",
            "searchable": true
        },
        "highway/steps": {
            "fields": [
                "surface",
                "lit",
                "width",
                "incline_steps",
                "access"
            ],
            "icon": "highway-steps",
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "steps"
            },
            "terms": [
                "stairs",
                "staircase"
            ],
            "searchable": false,
            "name": "Steps"
        },
        "highway/stop": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "stop"
            },
            "terms": [
                "stop sign"
            ],
            "searchable": false,
            "name": "Stop Sign"
        },
        "highway/street_lamp": {
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "highway": "street_lamp"
            },
            "fields": [
                "lamp_type",
                "ref"
            ],
            "terms": [
                "streetlight",
                "street light",
                "lamp",
                "light",
                "gaslight"
            ],
            "name": "Street Lamp",
            "searchable": false
        },
        "highway/tertiary": {
            "icon": "highway-tertiary",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "lanes",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "tertiary"
            },
            "terms": [],
            "searchable": false,
            "name": "Tertiary Road"
        },
        "highway/tertiary_link": {
            "icon": "highway-tertiary-link",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "tertiary_link"
            },
            "searchable": false,
            "terms": [
                "ramp",
                "on ramp",
                "off ramp"
            ],
            "name": "Tertiary Link"
        },
        "highway/track": {
            "icon": "highway-track",
            "fields": [
                "surface",
                "width",
                "structure",
                "access",
                "incline",
                "tracktype",
                "smoothness",
                "mtb/scale",
                "mtb/scale/uphill",
                "mtb/scale/imba"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "track"
            },
            "searchable": false,
            "terms": [
                "woods road",
                "fire road"
            ],
            "name": "Track"
        },
        "highway/traffic_signals": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "traffic_signals"
            },
            "terms": [
                "light",
                "stoplight",
                "traffic light"
            ],
            "searchable": false,
            "name": "Traffic Signals"
        },
        "highway/trailhead": {
            "geometry": [
                "point",
                "vertex"
            ],
            "terms": [
                "Trailhead",
                "Trail head"
            ],
            "tags": {
                "highway": "trailhead"
            },
            "name": "Trailhead",
            "icon": "trailhead-black",
            "maki": "npmaki",
            "searchable": true
        },
        "highway/trunk": {
            "icon": "highway-trunk",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "lanes",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "trunk"
            },
            "terms": [],
            "searchable": false,
            "name": "Trunk Road"
        },
        "highway/trunk_link": {
            "icon": "highway-trunk-link",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface",
                "ref"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "trunk_link"
            },
            "searchable": false,
            "terms": [
                "ramp",
                "on ramp",
                "off ramp"
            ],
            "name": "Trunk Link"
        },
        "highway/turning_circle": {
            "icon": "circle",
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "turning_circle"
            },
            "searchable": false,
            "terms": [
                "cul-de-sac"
            ],
            "name": "Turning Circle"
        },
        "highway/unclassified": {
            "icon": "highway-unclassified",
            "fields": [
                "oneway",
                "maxspeed",
                "structure",
                "access",
                "surface"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "highway": "unclassified"
            },
            "terms": [],
            "searchable": false,
            "name": "Unclassified Road"
        },
        "historic": {
            "fields": [
                "historic"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "historic": "*"
            },
            "searchable": false,
            "name": "Historic Site"
        },
        "historic/archaeological_site": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "historic": "archaeological_site"
            },
            "searchable": false,
            "name": "Archaeological Site"
        },
        "historic/boundary_stone": {
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "historic": "boundary_stone"
            },
            "searchable": false,
            "name": "Boundary Stone"
        },
        "historic/building": {
            "icon": "building",
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "building": "yes",
                "historic": "building"
            },
            "name": "Historic Building",
            "searchable": true
        },
        "historic/castle": {
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "historic": "castle"
            },
            "searchable": false,
            "name": "Castle"
        },
        "historic/fortification": {
            "geometry": [
                "point"
            ],
            "terms": [
                "fortification",
                "earthworks",
                "hill fort",
                "trench"
            ],
            "tags": {
                "historic": "archaeological_site",
                "site_type": "fortification",
                "fortification_type": "hill_fort"
            },
            "searchable": true,
            "name": "Fortification / Hill Fort"
        },
        "historic/memorial": {
            "icon": "monument",
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "historic": "memorial"
            },
            "searchable": false,
            "name": "Memorial"
        },
        "historic/monument": {
            "icon": "monument",
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "historic": "monument"
            },
            "searchable": false,
            "name": "Monument"
        },
        "historic/ruins": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "historic": "ruins"
            },
            "searchable": false,
            "name": "Ruins"
        },
        "historic/wayside_cross": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "historic": "wayside_cross"
            },
            "searchable": false,
            "name": "Wayside Cross"
        },
        "historic/wayside_shrine": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "historic": "wayside_shrine"
            },
            "searchable": false,
            "name": "Wayside Shrine"
        },
        "junction": {
            "geometry": [
                "vertex",
                "area"
            ],
            "tags": {
                "junction": "yes"
            },
            "name": "Junction"
        },
        "landuse": {
            "fields": [
                "landuse"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "*"
            },
            "searchable": false,
            "name": "Landuse"
        },
        "landuse/allotments": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "allotments"
            },
            "terms": [],
            "searchable": false,
            "name": "Allotments"
        },
        "landuse/basin": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "basin"
            },
            "terms": [],
            "searchable": false,
            "name": "Basin"
        },
        "landuse/cemetery": {
            "icon": "cemetery",
            "fields": [
                "religion",
                "denomination"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "cemetery"
            },
            "terms": [],
            "searchable": false,
            "name": "Cemetery"
        },
        "landuse/churchyard": {
            "fields": [
                "religion",
                "denomination"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "churchyard"
            },
            "terms": [],
            "name": "Churchyard",
            "searchable": false
        },
        "landuse/commercial": {
            "icon": "commercial",
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "commercial"
            },
            "terms": [],
            "searchable": false,
            "name": "Commercial Area"
        },
        "landuse/construction": {
            "fields": [
                "construction",
                "operator"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "construction"
            },
            "terms": [],
            "searchable": false,
            "name": "Construction"
        },
        "landuse/farm": {
            "icon": "farm",
            "fields": [
                "crop"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "landuse": "farm"
            },
            "terms": [],
            "name": "Farmland",
            "searchable": false
        },
        "landuse/farmland": {
            "icon": "farm",
            "fields": [
                "crop"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "farmland"
            },
            "searchable": false,
            "name": "Farmland",
            "terms": [
                "farmland"
            ]
        },
        "landuse/farmyard": {
            "icon": "farm",
            "fields": [
                "crop"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "farmyard"
            },
            "terms": [],
            "searchable": false,
            "name": "Farmyard"
        },
        "landuse/forest": {
            "icon": "park2",
            "fields": [
                "leaf_type",
                "leaf_cycle"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "forest"
            },
            "searchable": false,
            "terms": [
                "tree"
            ],
            "name": "Forest"
        },
        "landuse/garages": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "garages"
            },
            "searchable": false,
            "terms": [],
            "name": "Garages"
        },
        "landuse/grass": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "grass"
            },
            "terms": [],
            "searchable": false,
            "name": "Grass"
        },
        "landuse/industrial": {
            "icon": "industrial",
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "industrial"
            },
            "terms": [],
            "searchable": false,
            "name": "Industrial Area"
        },
        "landuse/landfill": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "landfill"
            },
            "terms": [
                "dump"
            ],
            "name": "Landfill",
            "searchable": false
        },
        "landuse/meadow": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "meadow"
            },
            "terms": [],
            "searchable": false,
            "name": "Meadow"
        },
        "landuse/military": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "military"
            },
            "terms": [],
            "searchable": false,
            "name": "Military Area"
        },
        "landuse/orchard": {
            "icon": "park2",
            "fields": [
                "trees"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "orchard"
            },
            "terms": [],
            "searchable": false,
            "name": "Orchard"
        },
        "landuse/quarry": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "quarry"
            },
            "terms": [],
            "searchable": false,
            "name": "Quarry"
        },
        "landuse/residential": {
            "icon": "building",
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "residential"
            },
            "terms": [],
            "searchable": false,
            "name": "Residential Area"
        },
        "landuse/retail": {
            "icon": "shop",
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "retail"
            },
            "searchable": false,
            "name": "Retail Area"
        },
        "landuse/vineyard": {
            "geometry": [
                "area"
            ],
            "tags": {
                "landuse": "vineyard"
            },
            "terms": [],
            "searchable": false,
            "name": "Vineyard"
        },
        "leisure": {
            "fields": [
                "leisure"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "leisure": "*"
            },
            "searchable": false,
            "name": "Leisure"
        },
        "leisure/common": {
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "open space"
            ],
            "tags": {
                "leisure": "common"
            },
            "searchable": false,
            "name": "Common"
        },
        "leisure/dog_park": {
            "icon": "dog-park",
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "leisure": "dog_park"
            },
            "searchable": false,
            "name": "Dog Park"
        },
        "leisure/firepit": {
            "icon": "campfire-black",
            "maki": "npmaki",
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "firepit"
            },
            "terms": [
                "fireplace",
                "firepit",
                "campfire"
            ],
            "name": "Campfire",
            "searchable": true
        },
        "leisure/fishing": {
            "geometry": [
                "point"
            ],
            "icon": "fishing-black",
            "maki": "npmaki",
            "name": "Fishing",
            "searchable": true,
            "tags": {
                "leisure": "fishing"
            }
        },
        "leisure/garden": {
            "icon": "garden",
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "leisure": "garden"
            },
            "searchable": false,
            "name": "Garden"
        },
        "leisure/golf_course": {
            "icon": "golfing-black",
            "maki": "npmaki",
            "searchable": true,
            "fields": [
                "operator",
                "address",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "links"
            ],
            "tags": {
                "leisure": "golf_course"
            },
            "name": "Golf Course"
        },
        "leisure/horseback_riding": {
            "icon": "horseback-riding-black",
            "maki": "npmaki",
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "horse_riding"
            },
            "terms": [
                "horse",
                "riding",
                "horseback"
            ],
            "name": "Horseback Riding",
            "searchable": true
        },
        "leisure/ice_rink": {
            "icon": "ice-skating-black",
            "maki": "npmaki",
            "fields": [
                "seasonal",
                "sport_ice",
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "hockey",
                "skating",
                "curling"
            ],
            "tags": {
                "leisure": "ice_rink"
            },
            "name": "Ice Rink",
            "searchable": true
        },
        "leisure/marina": {
            "icon": "marina-black",
            "maki": "npmaki",
            "searchable": true,
            "geometry": [
                "point"
            ],
            "terms": [
                "boat"
            ],
            "tags": {
                "leisure": "marina"
            },
            "name": "Marina"
        },
        "leisure/nature_reserve": {
            "icon": "park",
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "nature_reserve"
            },
            "name": "Nature Center",
            "searchable": false,
            "terms": [
                "protected",
                "wildlife"
            ]
        },
        "leisure/park": {
            "icon": "park",
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "esplanade",
                "estate",
                "forest",
                "garden",
                "grass",
                "green",
                "grounds",
                "lawn",
                "lot",
                "meadow",
                "parkland",
                "place",
                "playground",
                "plaza",
                "pleasure garden",
                "recreation area",
                "square",
                "tract",
                "village green",
                "woodland"
            ],
            "tags": {
                "leisure": "park"
            },
            "name": "Park",
            "searchable": false
        },
        "leisure/picnic_table": {
            "geometry": [
                "point"
            ],
            "tags": {
                "leisure": "picnic_table"
            },
            "terms": [
                "bench"
            ],
            "name": "Picnic Table",
            "searchable": false
        },
        "leisure/pitch": {
            "icon": "pitch",
            "fields": [
                "sport",
                "surface",
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch"
            },
            "searchable": false,
            "terms": [
                "field"
            ],
            "name": "Sport Pitch"
        },
        "leisure/pitch/american_football": {
            "icon": "america-football",
            "fields": [
                "surface",
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch",
                "sport": "american_football"
            },
            "terms": [],
            "searchable": false,
            "name": "American Football Field"
        },
        "leisure/pitch/baseball": {
            "icon": "baseball",
            "fields": [
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch",
                "sport": "baseball"
            },
            "terms": [],
            "searchable": false,
            "name": "Baseball Diamond"
        },
        "leisure/pitch/basketball": {
            "icon": "basketball",
            "fields": [
                "surface",
                "hoops",
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch",
                "sport": "basketball"
            },
            "terms": [],
            "searchable": false,
            "name": "Basketball Court"
        },
        "leisure/pitch/skateboard": {
            "icon": "pitch",
            "fields": [
                "surface",
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch",
                "sport": "skateboard"
            },
            "terms": [],
            "searchable": false,
            "name": "Skate Park"
        },
        "leisure/pitch/soccer": {
            "icon": "soccer",
            "fields": [
                "surface",
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch",
                "sport": "soccer"
            },
            "terms": [],
            "searchable": false,
            "name": "Soccer Field"
        },
        "leisure/pitch/tennis": {
            "icon": "tennis",
            "fields": [
                "surface",
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch",
                "sport": "tennis"
            },
            "terms": [],
            "searchable": false,
            "name": "Tennis Court"
        },
        "leisure/pitch/volleyball": {
            "icon": "pitch",
            "fields": [
                "surface",
                "lit"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "pitch",
                "sport": "volleyball"
            },
            "terms": [],
            "searchable": false,
            "name": "Volleyball Court"
        },
        "leisure/playground": {
            "geometry": [
                "point"
            ],
            "icon": "playground",
            "maki": "maki",
            "searchable": false,
            "terms": [
                "jungle gym",
                "play area"
            ],
            "tags": {
                "leisure": "playground"
            },
            "name": "Playground"
        },
        "leisure/running_track": {
            "icon": "pitch",
            "fields": [
                "surface",
                "sport_racing",
                "lit",
                "width",
                "lanes"
            ],
            "geometry": [
                "point",
                "line"
            ],
            "tags": {
                "leisure": "track",
                "sport": "running"
            },
            "name": "Running Track",
            "searchable": false
        },
        "leisure/slipway": {
            "icon": "boat-launch-black",
            "maki": "npmaki",
            "geometry": [
                "point"
            ],
            "terms": [
                "boat launch",
                "boat ramp"
            ],
            "tags": {
                "leisure": "slipway"
            },
            "name": "Boat Launch",
            "searchable": true
        },
        "leisure/sports_center": {
            "icon": "pitch",
            "fields": [
                "sport",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "sports_centre"
            },
            "terms": [
                "gym"
            ],
            "searchable": false,
            "name": "Sports Center / Gym"
        },
        "leisure/stadium": {
            "icon": "pitch",
            "fields": [
                "sport",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "leisure": "stadium"
            },
            "searchable": false,
            "name": "Stadium"
        },
        "leisure/swimming_pool": {
            "icon": "swimming",
            "fields": [
                "access_simple",
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "leisure": "swimming_pool"
            },
            "searchable": false,
            "name": "Swimming Pool"
        },
        "leisure/track": {
            "icon": "highway-road",
            "fields": [
                "surface",
                "sport_racing",
                "lit",
                "width",
                "lanes"
            ],
            "geometry": [
                "point",
                "line"
            ],
            "tags": {
                "leisure": "track"
            },
            "searchable": false,
            "name": "Racetrack (non-Motorsport)"
        },
        "line": {
            "searchable": false,
            "name": "Line",
            "tags": {},
            "geometry": [
                "line"
            ],
            "matchScore": 0.1
        },
        "man_made": {
            "fields": [
                "man_made"
            ],
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "man_made": "*"
            },
            "searchable": false,
            "name": "Man Made"
        },
        "man_made/breakwater": {
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "man_made": "breakwater"
            },
            "searchable": false,
            "name": "Breakwater"
        },
        "man_made/buoy": {
            "geometry": [
                "point"
            ],
            "tags": {
                "man_made": "buoy"
            },
            "name": "Buoy",
            "searchable": false
        },
        "man_made/cutline": {
            "geometry": [
                "line"
            ],
            "tags": {
                "man_made": "cutline"
            },
            "searchable": false,
            "name": "Cut line"
        },
        "man_made/embankment": {
            "geometry": [
                "line"
            ],
            "tags": {
                "man_made": "embankment"
            },
            "searchable": false,
            "name": "Embankment"
        },
        "man_made/flagpole": {
            "geometry": [
                "point"
            ],
            "tags": {
                "man_made": "flagpole"
            },
            "searchable": false,
            "name": "Flagpole",
            "icon": "embassy"
        },
        "man_made/lighthouse": {
            "icon": "lighthouse",
            "geometry": [
                "point"
            ],
            "tags": {
                "man_made": "lighthouse"
            },
            "maki": "maki",
            "searchable": false,
            "name": "Lighthouse"
        },
        "man_made/observation": {
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "lookout tower",
                "fire tower"
            ],
            "tags": {
                "man_made": "tower",
                "tower:type": "observation"
            },
            "searchable": false,
            "name": "Observation Tower"
        },
        "man_made/pier": {
            "geometry": [
                "line",
                "area"
            ],
            "tags": {
                "man_made": "pier"
            },
            "searchable": false,
            "name": "Pier"
        },
        "man_made/pipeline": {
            "icon": "pipeline",
            "fields": [
                "location",
                "operator"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "man_made": "pipeline"
            },
            "searchable": false,
            "name": "Pipeline"
        },
        "man_made/survey_point": {
            "icon": "monument",
            "fields": [
                "ref"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "man_made": "survey_point"
            },
            "searchable": false,
            "name": "Survey Point"
        },
        "man_made/tower": {
            "fields": [
                "towertype"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "man_made": "tower"
            },
            "searchable": false,
            "name": "Tower"
        },
        "man_made/wastewater_plant": {
            "icon": "water",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "searchable": false,
            "terms": [
                "sewage*",
                "water treatment plant",
                "reclamation plant"
            ],
            "tags": {
                "man_made": "wastewater_plant"
            },
            "name": "Wastewater Plant"
        },
        "man_made/water_tower": {
            "icon": "water",
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "man_made": "water_tower"
            },
            "searchable": false,
            "name": "Water Tower"
        },
        "man_made/water_well": {
            "fields": [
                "operator"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "man_made": "water_well"
            },
            "searchable": false,
            "name": "Water Well"
        },
        "man_made/water_works": {
            "icon": "water",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "man_made": "water_works"
            },
            "searchable": false,
            "name": "Water Works"
        },
        "military/airfield": {
            "icon": "airfield",
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [],
            "tags": {
                "military": "airfield"
            },
            "name": "Airfield"
        },
        "military/barracks": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [],
            "tags": {
                "military": "barracks"
            },
            "searchable": false,
            "name": "Barracks"
        },
        "military/bunker": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [],
            "tags": {
                "military": "bunker"
            },
            "searchable": false,
            "name": "Bunker"
        },
        "military/range": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "terms": [],
            "tags": {
                "military": "range"
            },
            "searchable": false,
            "name": "Military Range"
        },
        "natural": {
            "fields": [
                "natural"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "natural": "*"
            },
            "searchable": false,
            "name": "Natural"
        },
        "natural/bay": {
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "natural": "bay"
            },
            "searchable": false,
            "name": "Bay"
        },
        "natural/beach": {
            "fields": [
                "surface"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "natural": "beach"
            },
            "searchable": false,
            "name": "Beach"
        },
        "natural/cave_entrance": {
            "geometry": [
                "point"
            ],
            "tags": {
                "natural": "cave_entrance"
            },
            "name": "Cave Entrance",
            "searchable": false
        },
        "natural/cliff": {
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "terms": [],
            "tags": {
                "natural": "cliff"
            },
            "searchable": false,
            "name": "Cliff"
        },
        "natural/coastline": {
            "geometry": [
                "line"
            ],
            "terms": [
                "shore"
            ],
            "tags": {
                "natural": "coastline"
            },
            "searchable": false,
            "name": "Coastline"
        },
        "natural/fell": {
            "geometry": [
                "area"
            ],
            "terms": [],
            "tags": {
                "natural": "fell"
            },
            "searchable": false,
            "name": "Fell"
        },
        "natural/geyser": {
            "fields": [
                "name"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "geyser"
            ],
            "tags": {
                "natural": "geyser"
            },
            "searchable": true,
            "name": "Geyser"
        },
        "natural/glacier": {
            "geometry": [
                "area"
            ],
            "terms": [],
            "tags": {
                "natural": "glacier"
            },
            "searchable": false,
            "name": "Glacier"
        },
        "natural/grassland": {
            "geometry": [
                "point",
                "area"
            ],
            "terms": [],
            "tags": {
                "natural": "grassland"
            },
            "searchable": false,
            "name": "Grassland"
        },
        "natural/heath": {
            "geometry": [
                "area"
            ],
            "terms": [],
            "tags": {
                "natural": "heath"
            },
            "searchable": false,
            "name": "Heath"
        },
        "natural/peak": {
            "icon": "triangle",
            "fields": [
                "elevation"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "natural": "peak"
            },
            "terms": [
                "acme",
                "aiguille",
                "alp",
                "climax",
                "crest",
                "crown",
                "hill",
                "mount",
                "mountain",
                "pinnacle",
                "summit",
                "tip",
                "top"
            ],
            "searchable": true,
            "name": "Peak"
        },
        "natural/scree": {
            "geometry": [
                "area"
            ],
            "tags": {
                "natural": "scree"
            },
            "terms": [
                "loose rocks"
            ],
            "searchable": false,
            "name": "Scree"
        },
        "natural/scrub": {
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "natural": "scrub"
            },
            "terms": [],
            "name": "Bushes",
            "searchable": false
        },
        "natural/spring": {
            "geometry": [
                "point",
                "vertex"
            ],
            "terms": [],
            "tags": {
                "natural": "spring"
            },
            "searchable": false,
            "name": "Spring"
        },
        "natural/tree": {
            "fields": [
                "leaf_type",
                "leaf_cycle",
                "denotation"
            ],
            "icon": "park",
            "geometry": [
                "point",
                "vertex"
            ],
            "terms": [],
            "tags": {
                "natural": "tree"
            },
            "searchable": false,
            "name": "Tree"
        },
        "natural/water": {
            "fields": [
                "water"
            ],
            "geometry": [
                "area"
            ],
            "tags": {
                "natural": "water"
            },
            "icon": "water",
            "searchable": false,
            "name": "Water"
        },
        "natural/water/lake": {
            "geometry": [
                "area"
            ],
            "tags": {
                "natural": "water",
                "water": "lake"
            },
            "terms": [
                "lakelet",
                "loch",
                "mere"
            ],
            "icon": "water",
            "searchable": false,
            "name": "Lake"
        },
        "natural/water/pond": {
            "geometry": [
                "area"
            ],
            "tags": {
                "natural": "water",
                "water": "pond"
            },
            "terms": [
                "lakelet",
                "millpond",
                "tarn",
                "pool",
                "mere"
            ],
            "icon": "water",
            "searchable": false,
            "name": "Pond"
        },
        "natural/water/reservoir": {
            "geometry": [
                "area"
            ],
            "tags": {
                "natural": "water",
                "water": "reservoir"
            },
            "icon": "water",
            "searchable": false,
            "name": "Reservoir"
        },
        "natural/wetland": {
            "icon": "wetland",
            "fields": [
                "wetland"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "natural": "wetland"
            },
            "terms": [],
            "searchable": false,
            "name": "Wetland"
        },
        "natural/wood": {
            "icon": "park2",
            "fields": [
                "leaf_type",
                "leaf_cycle"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "natural": "wood"
            },
            "searchable": false,
            "terms": [
                "tree"
            ],
            "name": "Wood"
        },
        "office": {
            "icon": "commercial",
            "fields": [
                "office",
                "address",
                "building_area",
                "opening_hours",
                "smoking"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "*"
            },
            "terms": [],
            "searchable": false,
            "name": "Office"
        },
        "office/accountant": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "accountant"
            },
            "terms": [],
            "searchable": false,
            "name": "Accountant"
        },
        "office/administrative": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "administrative"
            },
            "terms": [],
            "searchable": false,
            "name": "Administrative Office"
        },
        "office/architect": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "architect"
            },
            "terms": [],
            "searchable": false,
            "name": "Architect"
        },
        "office/company": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours",
                "smoking"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "company"
            },
            "terms": [],
            "searchable": false,
            "name": "Company Office"
        },
        "office/educational_institution": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "educational_institution"
            },
            "terms": [],
            "searchable": false,
            "name": "Educational Institution"
        },
        "office/employment_agency": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "employment_agency"
            },
            "searchable": false,
            "terms": [
                "job"
            ],
            "name": "Employment Agency"
        },
        "office/estate_agent": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "estate_agent"
            },
            "terms": [],
            "searchable": false,
            "name": "Real Estate Office"
        },
        "office/financial": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "financial"
            },
            "terms": [],
            "searchable": false,
            "name": "Financial Office"
        },
        "office/government": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "government"
            },
            "terms": [],
            "searchable": false,
            "name": "Government Office"
        },
        "office/insurance": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "insurance"
            },
            "terms": [],
            "searchable": false,
            "name": "Insurance Office"
        },
        "office/it": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "it"
            },
            "terms": [],
            "searchable": false,
            "name": "IT Office"
        },
        "office/lawyer": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "lawyer"
            },
            "terms": [],
            "searchable": false,
            "name": "Law Office"
        },
        "office/newspaper": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "newspaper"
            },
            "terms": [],
            "searchable": false,
            "name": "Newspaper"
        },
        "office/ngo": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours",
                "smoking"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "ngo"
            },
            "terms": [],
            "searchable": false,
            "name": "NGO Office"
        },
        "office/physician": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "physician"
            },
            "terms": [],
            "searchable": false,
            "name": "Physician"
        },
        "office/political_party": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "political_party"
            },
            "terms": [],
            "searchable": false,
            "name": "Political Party"
        },
        "office/research": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "research"
            },
            "terms": [],
            "searchable": false,
            "name": "Research Office"
        },
        "office/telecommunication": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "telecommunication"
            },
            "terms": [],
            "searchable": false,
            "name": "Telecom Office"
        },
        "office/therapist": {
            "icon": "commercial",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "therapist"
            },
            "terms": [],
            "searchable": false,
            "name": "Therapist"
        },
        "office/travel_agent": {
            "icon": "suitcase",
            "fields": [
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "office": "travel_agent"
            },
            "terms": [],
            "name": "Travel Agency",
            "searchable": false
        },
        "piste": {
            "icon": "skiing",
            "fields": [
                "piste/type",
                "piste/difficulty",
                "piste/grooming",
                "oneway",
                "lit"
            ],
            "geometry": [
                "point",
                "line",
                "area"
            ],
            "terms": [
                "ski",
                "sled",
                "sleigh",
                "snowboard",
                "nordic",
                "downhill",
                "snowmobile"
            ],
            "tags": {
                "piste:type": "*"
            },
            "searchable": false,
            "name": "Piste/Ski Trail"
        },
        "piste_type/downhill": {
            "geometry": [
                "point"
            ],
            "tags": {
                "piste:type": "downhill"
            },
            "name": "Downhill Skiing",
            "icon": "downhill-skiing-trail-black",
            "maki": "npmaki",
            "searchable": true
        },
        "piste_type/nordic": {
            "geometry": [
                "point"
            ],
            "tags": {
                "piste:type": "nordic"
            },
            "name": "Crosscountry Skiing",
            "icon": "cross-country-ski-trail-black",
            "maki": "npmaki",
            "searchable": true
        },
        "piste_type/sled": {
            "geometry": [
                "point"
            ],
            "tags": {
                "piste:type": "sled"
            },
            "searchable": true,
            "icon": "sledding-black",
            "maki": "npmaki",
            "name": "Sledding"
        },
        "place": {
            "fields": [
                "place"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "place": "*"
            },
            "searchable": false,
            "name": "Place"
        },
        "place/city": {
            "icon": "city",
            "fields": [
                "population"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "city"
            },
            "searchable": false,
            "name": "City"
        },
        "place/hamlet": {
            "icon": "triangle-stroked",
            "fields": [
                "population"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "hamlet"
            },
            "searchable": false,
            "name": "Hamlet"
        },
        "place/island": {
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "archipelago",
                "atoll",
                "bar",
                "cay",
                "isle",
                "islet",
                "key",
                "reef"
            ],
            "tags": {
                "place": "island"
            },
            "searchable": false,
            "name": "Island"
        },
        "place/isolated_dwelling": {
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "isolated_dwelling"
            },
            "searchable": false,
            "name": "Isolated Dwelling"
        },
        "place/locality": {
            "icon": "marker",
            "fields": [
                "population"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "locality"
            },
            "searchable": false,
            "name": "Locality"
        },
        "place/neighbourhood": {
            "icon": "triangle-stroked",
            "fields": [
                "population"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "neighbourhood"
            },
            "terms": [
                "neighbourhood"
            ],
            "name": "Neighborhood",
            "searchable": false
        },
        "place/suburb": {
            "icon": "triangle-stroked",
            "fields": [
                "population"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "suburb"
            },
            "terms": [
                "Boro",
                "Quarter"
            ],
            "name": "Borough",
            "searchable": false
        },
        "place/town": {
            "icon": "town",
            "fields": [
                "population"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "town"
            },
            "searchable": false,
            "name": "Town"
        },
        "place/village": {
            "icon": "village",
            "fields": [
                "population"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "place": "village"
            },
            "searchable": false,
            "name": "Village"
        },
        "point": {
            "searchable": false,
            "name": "Point",
            "tags": {},
            "geometry": [
                "point"
            ],
            "matchScore": 0.1
        },
        "power": {
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "power": "*"
            },
            "fields": [
                "power"
            ],
            "searchable": false,
            "name": "Power"
        },
        "power/generator": {
            "searchable": false,
            "fields": [
                "operator",
                "generator/source",
                "generator/method",
                "generator/type"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "power": "generator"
            },
            "name": "Power Generator"
        },
        "power/line": {
            "geometry": [
                "line"
            ],
            "tags": {
                "power": "line"
            },
            "searchable": false,
            "name": "Power Line",
            "icon": "power-line"
        },
        "power/minor_line": {
            "geometry": [
                "line"
            ],
            "tags": {
                "power": "minor_line"
            },
            "searchable": false,
            "name": "Minor Power Line",
            "icon": "power-line"
        },
        "power/pole": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "power": "pole"
            },
            "searchable": false,
            "name": "Power Pole"
        },
        "power/sub_station": {
            "fields": [
                "substation",
                "operator",
                "building"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "power": "sub_station"
            },
            "searchable": false,
            "name": "Substation"
        },
        "power/substation": {
            "fields": [
                "substation",
                "operator",
                "building"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "power": "substation"
            },
            "name": "Substation"
        },
        "power/tower": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "power": "tower"
            },
            "searchable": false,
            "name": "High-Voltage Tower"
        },
        "power/transformer": {
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "power": "transformer"
            },
            "searchable": false,
            "name": "Transformer"
        },
        "public_transport/platform": {
            "fields": [
                "ref",
                "network",
                "operator",
                "shelter"
            ],
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "public_transport": "platform"
            },
            "searchable": false,
            "name": "Platform"
        },
        "public_transport/stop_position": {
            "icon": "bus",
            "fields": [
                "ref",
                "network",
                "operator"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "public_transport": "stop_position"
            },
            "searchable": false,
            "name": "Stop Position"
        },
        "railway": {
            "fields": [
                "railway"
            ],
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "railway": "*"
            },
            "searchable": false,
            "name": "Railway"
        },
        "railway/abandoned": {
            "icon": "railway-abandoned",
            "geometry": [
                "line"
            ],
            "tags": {
                "railway": "abandoned"
            },
            "fields": [
                "structure",
                "service_rail"
            ],
            "terms": [],
            "searchable": false,
            "name": "Abandoned Railway"
        },
        "railway/disused": {
            "icon": "railway-disused",
            "geometry": [
                "line"
            ],
            "tags": {
                "railway": "disused"
            },
            "fields": [
                "structure",
                "service_rail"
            ],
            "terms": [],
            "searchable": false,
            "name": "Disused Railway"
        },
        "railway/funicular": {
            "geometry": [
                "line"
            ],
            "terms": [
                "venicular",
                "cliff railway",
                "cable car",
                "cable railway",
                "funicular railway"
            ],
            "fields": [
                "structure",
                "gauge",
                "service_rail"
            ],
            "tags": {
                "railway": "funicular"
            },
            "icon": "railway-rail",
            "searchable": false,
            "name": "Funicular"
        },
        "railway/halt": {
            "icon": "rail",
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "railway": "halt"
            },
            "searchable": false,
            "name": "Railway Halt",
            "terms": [
                "break",
                "interrupt",
                "rest",
                "wait",
                "interruption"
            ]
        },
        "railway/level_crossing": {
            "icon": "cross",
            "geometry": [
                "vertex"
            ],
            "tags": {
                "railway": "level_crossing"
            },
            "terms": [
                "crossing",
                "railroad crossing",
                "railway crossing",
                "grade crossing",
                "road through railroad",
                "train crossing"
            ],
            "searchable": false,
            "name": "Level Crossing"
        },
        "railway/monorail": {
            "icon": "railway-monorail",
            "geometry": [
                "line"
            ],
            "tags": {
                "railway": "monorail"
            },
            "fields": [
                "structure",
                "electrified",
                "service_rail"
            ],
            "terms": [],
            "searchable": false,
            "name": "Monorail"
        },
        "railway/narrow_gauge": {
            "icon": "railway-rail",
            "geometry": [
                "line"
            ],
            "tags": {
                "railway": "narrow_gauge"
            },
            "fields": [
                "structure",
                "gauge",
                "electrified",
                "service_rail"
            ],
            "terms": [
                "narrow gauge railway",
                "narrow gauge railroad"
            ],
            "searchable": false,
            "name": "Narrow Gauge Rail"
        },
        "railway/platform": {
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "railway": "platform"
            },
            "searchable": false,
            "name": "Railway Platform"
        },
        "railway/rail": {
            "icon": "railway-rail",
            "geometry": [
                "line"
            ],
            "tags": {
                "railway": "rail"
            },
            "fields": [
                "structure",
                "gauge",
                "electrified",
                "service_rail"
            ],
            "terms": [],
            "searchable": false,
            "name": "Rail"
        },
        "railway/station": {
            "fields": [
                "network",
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "railway": "station"
            },
            "icon": "rail",
            "maki": "maki",
            "name": "Railway Station",
            "searchable": false
        },
        "railway/subway": {
            "icon": "railway-subway",
            "geometry": [
                "line"
            ],
            "tags": {
                "railway": "subway"
            },
            "fields": [
                "structure",
                "gauge",
                "electrified",
                "service_rail"
            ],
            "terms": [],
            "searchable": false,
            "name": "Subway"
        },
        "railway/subway_entrance": {
            "icon": "rail-metro",
            "maki": "maki",
            "geometry": [
                "point"
            ],
            "tags": {
                "railway": "subway_entrance"
            },
            "searchable": true,
            "name": "Metro Stop / Subway Entrance"
        },
        "railway/tram": {
            "icon": "railway-light-rail",
            "geometry": [
                "line"
            ],
            "tags": {
                "railway": "tram"
            },
            "fields": [
                "structure",
                "gauge",
                "electrified",
                "service_rail"
            ],
            "terms": [
                "streetcar"
            ],
            "searchable": false,
            "name": "Tram"
        },
        "relation": {
            "searchable": false,
            "name": "Relation",
            "icon": "relation",
            "tags": {},
            "geometry": [
                "relation"
            ],
            "fields": [
                "relation"
            ]
        },
        "roundabout": {
            "geometry": [
                "vertex",
                "line"
            ],
            "tags": {
                "junction": "roundabout"
            },
            "name": "Roundabout",
            "searchable": false
        },
        "route/ferry": {
            "icon": "ferry",
            "geometry": [
                "line"
            ],
            "tags": {
                "route": "ferry"
            },
            "searchable": false,
            "name": "Ferry Route"
        },
        "safety_equipment/ladder": {
            "geometry": [
                "point"
            ],
            "tags": {
                "safety_equipment": "ladder"
            },
            "name": "Ladder",
            "searchable": false
        },
        "shop": {
            "icon": "shop",
            "fields": [
                "shop",
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "*"
            },
            "terms": [],
            "searchable": false,
            "name": "Shop"
        },
        "shop/alcohol": {
            "icon": "alcohol-shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "drive_through"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "alcohol",
                "beer",
                "booze",
                "wine"
            ],
            "tags": {
                "shop": "alcohol"
            },
            "searchable": false,
            "name": "Liquor Store"
        },
        "shop/anime": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "anime"
            },
            "name": "Anime Shop",
            "searchable": false
        },
        "shop/antiques": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "antiques"
            },
            "name": "Antiques Shop",
            "searchable": false
        },
        "shop/art": {
            "icon": "art-gallery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "art"
            },
            "searchable": false,
            "name": "Art Gallery"
        },
        "shop/baby_goods": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "baby_goods"
            },
            "name": "Baby Goods Store",
            "searchable": false
        },
        "shop/bag": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "handbag",
                "purse"
            ],
            "tags": {
                "shop": "bag"
            },
            "name": "Bag/Luggage Store",
            "searchable": false
        },
        "shop/bakery": {
            "icon": "bakery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "bakery"
            },
            "searchable": false,
            "name": "Bakery"
        },
        "shop/bathroom_furnishing": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "bathroom_furnishing"
            },
            "name": "Bathroom Furnishing Store",
            "searchable": false
        },
        "shop/beauty": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "nail spa",
                "spa",
                "salon",
                "tanning"
            ],
            "tags": {
                "shop": "beauty"
            },
            "searchable": false,
            "name": "Beauty Shop"
        },
        "shop/bed": {
            "icon": "lodging",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "bed"
            },
            "name": "Bedding/Mattress Store",
            "searchable": false
        },
        "shop/beverages": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "beverages"
            },
            "searchable": false,
            "name": "Beverage Store"
        },
        "shop/bicycle": {
            "icon": "bicycle",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "bicycle"
            },
            "searchable": false,
            "name": "Bicycle Shop"
        },
        "shop/bookmaker": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "bookmaker"
            },
            "searchable": false,
            "name": "Bookmaker"
        },
        "shop/books": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "books"
            },
            "searchable": false,
            "name": "Book Store"
        },
        "shop/boutique": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "boutique"
            },
            "searchable": false,
            "name": "Boutique"
        },
        "shop/butcher": {
            "icon": "slaughterhouse",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "meat"
            ],
            "tags": {
                "shop": "butcher"
            },
            "searchable": false,
            "name": "Butcher"
        },
        "shop/candles": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "candles"
            },
            "name": "Candle Shop",
            "searchable": false
        },
        "shop/car": {
            "icon": "car",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "auto"
            ],
            "tags": {
                "shop": "car"
            },
            "searchable": false,
            "name": "Car Dealership"
        },
        "shop/car_parts": {
            "icon": "car",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "auto"
            ],
            "tags": {
                "shop": "car_parts"
            },
            "searchable": false,
            "name": "Car Parts Store"
        },
        "shop/car_repair": {
            "icon": "car",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "auto"
            ],
            "tags": {
                "shop": "car_repair"
            },
            "searchable": false,
            "name": "Car Repair Shop"
        },
        "shop/carpet": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "rug"
            ],
            "tags": {
                "shop": "carpet"
            },
            "name": "Carpet Store",
            "searchable": false
        },
        "shop/cheese": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "cheese"
            },
            "name": "Cheese Store",
            "searchable": false
        },
        "shop/chemist": {
            "icon": "chemist",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "chemist"
            },
            "searchable": false,
            "name": "Chemist"
        },
        "shop/chocolate": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "chocolate"
            },
            "name": "Chocolate Store",
            "searchable": false
        },
        "shop/clothes": {
            "icon": "clothing-store",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "clothes"
            },
            "searchable": false,
            "name": "Clothing Store"
        },
        "shop/computer": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "computer"
            },
            "searchable": false,
            "name": "Computer Store"
        },
        "shop/confectionery": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "confectionery"
            },
            "searchable": false,
            "name": "Candy Store"
        },
        "shop/convenience": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "convenience"
            },
            "searchable": false,
            "name": "Convenience Store"
        },
        "shop/copyshop": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "copyshop"
            },
            "name": "Copy Store",
            "searchable": false
        },
        "shop/cosmetics": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "cosmetics"
            },
            "name": "Cosmetics Store",
            "searchable": false
        },
        "shop/craft": {
            "icon": "art-gallery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "craft"
            },
            "name": "Arts and Crafts Store",
            "searchable": false
        },
        "shop/curtain": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "drape*",
                "window"
            ],
            "tags": {
                "shop": "curtain"
            },
            "name": "Curtain Store",
            "searchable": false
        },
        "shop/dairy": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "milk",
                "egg",
                "cheese"
            ],
            "tags": {
                "shop": "dairy"
            },
            "name": "Dairy Store",
            "searchable": false
        },
        "shop/deli": {
            "icon": "restaurant",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "lunch",
                "meat",
                "sandwich"
            ],
            "tags": {
                "shop": "deli"
            },
            "searchable": false,
            "name": "Deli"
        },
        "shop/department_store": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "department_store"
            },
            "searchable": false,
            "name": "Department Store"
        },
        "shop/doityourself": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "doityourself"
            },
            "searchable": false,
            "name": "DIY Store"
        },
        "shop/dry_cleaning": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "dry_cleaning"
            },
            "searchable": false,
            "name": "Dry Cleaner"
        },
        "shop/electronics": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "appliance",
                "audio",
                "computer",
                "tv"
            ],
            "tags": {
                "shop": "electronics"
            },
            "searchable": false,
            "name": "Electronics Store"
        },
        "shop/erotic": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "sex",
                "porn"
            ],
            "tags": {
                "shop": "erotic"
            },
            "name": "Erotic Store",
            "searchable": false
        },
        "shop/fabric": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "sew"
            ],
            "tags": {
                "shop": "fabric"
            },
            "name": "Fabric Store",
            "searchable": false
        },
        "shop/farm": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "farm shop",
                "farm stand"
            ],
            "searchable": false,
            "tags": {
                "shop": "farm"
            },
            "name": "Produce Stand"
        },
        "shop/fashion": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "fashion"
            },
            "name": "Fashion Store",
            "searchable": false
        },
        "shop/fishmonger": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "fishmonger"
            },
            "name": "Fishmonger",
            "searchable": false
        },
        "shop/florist": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "flower"
            ],
            "tags": {
                "shop": "florist"
            },
            "searchable": false,
            "name": "Florist"
        },
        "shop/frame": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "frame"
            },
            "name": "Framing Shop",
            "searchable": false
        },
        "shop/funeral_directors": {
            "icon": "cemetery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "religion",
                "denomination"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "undertaker",
                "memorial home"
            ],
            "searchable": false,
            "tags": {
                "shop": "funeral_directors"
            },
            "name": "Funeral Home"
        },
        "shop/furnace": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "oven",
                "stove"
            ],
            "tags": {
                "shop": "furnace"
            },
            "name": "Furnace Store",
            "searchable": false
        },
        "shop/furniture": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "chair",
                "sofa",
                "table"
            ],
            "tags": {
                "shop": "furniture"
            },
            "searchable": false,
            "name": "Furniture Store"
        },
        "shop/garden_centre": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "landscape",
                "mulch",
                "shrub",
                "tree"
            ],
            "tags": {
                "shop": "garden_centre"
            },
            "searchable": false,
            "name": "Garden Center"
        },
        "shop/general": {
            "geometry": [
                "point"
            ],
            "tags": {
                "shop": "general"
            },
            "name": "Store",
            "icon": "store-black",
            "maki": "npmaki",
            "searchable": true
        },
        "shop/gift": {
            "icon": "gift",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "gift"
            },
            "searchable": false,
            "name": "Gift Shop"
        },
        "shop/greengrocer": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "fruit",
                "vegetable"
            ],
            "tags": {
                "shop": "greengrocer"
            },
            "searchable": false,
            "name": "Greengrocer"
        },
        "shop/hairdresser": {
            "icon": "hairdresser",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "hairdresser"
            },
            "searchable": false,
            "name": "Hairdresser"
        },
        "shop/hardware": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "hardware"
            },
            "searchable": false,
            "name": "Hardware Store"
        },
        "shop/hearing_aids": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "hearing_aids"
            },
            "name": "Hearing Aids Store",
            "searchable": false
        },
        "shop/herbalist": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "herbalist"
            },
            "name": "Herbalist",
            "searchable": false
        },
        "shop/hifi": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "stereo",
                "video"
            ],
            "tags": {
                "shop": "hifi"
            },
            "searchable": false,
            "name": "Hifi Store"
        },
        "shop/houseware": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "home",
                "household"
            ],
            "tags": {
                "shop": "houseware"
            },
            "searchable": false,
            "name": "Houseware Store"
        },
        "shop/interior_decoration": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "interior_decoration"
            },
            "name": "Interior Decoration Store",
            "searchable": false
        },
        "shop/jewelry": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "diamond",
                "gem",
                "ring"
            ],
            "tags": {
                "shop": "jewelry"
            },
            "searchable": false,
            "name": "Jeweler"
        },
        "shop/kiosk": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "kiosk"
            },
            "searchable": false,
            "name": "News Kiosk"
        },
        "shop/kitchen": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "kitchen"
            },
            "name": "Kitchen Design Store",
            "searchable": false
        },
        "shop/laundry": {
            "icon": "laundry",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "laundry"
            },
            "searchable": false,
            "name": "Laundry"
        },
        "shop/leather": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "leather"
            },
            "name": "Leather Store",
            "searchable": false
        },
        "shop/locksmith": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "key",
                "lockpick"
            ],
            "tags": {
                "shop": "locksmith"
            },
            "searchable": false,
            "name": "Locksmith"
        },
        "shop/lottery": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "lottery"
            },
            "searchable": false,
            "name": "Lottery Shop"
        },
        "shop/mall": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "mall"
            },
            "searchable": false,
            "name": "Mall"
        },
        "shop/massage": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "massage"
            },
            "name": "Massage Shop",
            "searchable": false
        },
        "shop/medical_supply": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "medical_supply"
            },
            "name": "Medical Supply Store",
            "searchable": false
        },
        "shop/mobile_phone": {
            "icon": "mobilephone",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "mobile_phone"
            },
            "searchable": false,
            "name": "Mobile Phone Store"
        },
        "shop/money_lender": {
            "icon": "bank",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "money_lender"
            },
            "name": "Money Lender",
            "searchable": false
        },
        "shop/motorcycle": {
            "icon": "scooter",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "motorcycle"
            },
            "searchable": false,
            "name": "Motorcycle Dealership"
        },
        "shop/music": {
            "icon": "music",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "CD",
                "vinyl"
            ],
            "tags": {
                "shop": "music"
            },
            "searchable": false,
            "name": "Music Store"
        },
        "shop/musical_instrument": {
            "icon": "music",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "musical_instrument"
            },
            "name": "Musical Instrument Store",
            "searchable": false
        },
        "shop/newsagent": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "newsagent"
            },
            "searchable": false,
            "name": "Newspaper/Magazine Shop"
        },
        "shop/optician": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "eye",
                "glasses"
            ],
            "tags": {
                "shop": "optician"
            },
            "searchable": false,
            "name": "Optician"
        },
        "shop/organic": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "supermarket",
                "organic": "only"
            },
            "name": "Organic Goods Store",
            "searchable": false
        },
        "shop/outdoor": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "camping",
                "climbing",
                "hiking"
            ],
            "tags": {
                "shop": "outdoor"
            },
            "searchable": false,
            "name": "Outdoors Store"
        },
        "shop/paint": {
            "icon": "water",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "paint"
            },
            "name": "Paint Store",
            "searchable": false
        },
        "shop/pawnbroker": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "pawnbroker"
            },
            "name": "Pawn Shop",
            "searchable": false
        },
        "shop/pet": {
            "icon": "dog-park",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "cat",
                "dog",
                "fish"
            ],
            "tags": {
                "shop": "pet"
            },
            "searchable": false,
            "name": "Pet Store"
        },
        "shop/photo": {
            "icon": "camera",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "camera",
                "film"
            ],
            "tags": {
                "shop": "photo"
            },
            "searchable": false,
            "name": "Photography Store"
        },
        "shop/pyrotechnics": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "pyrotechnics"
            },
            "name": "Fireworks Store",
            "searchable": false
        },
        "shop/radiotechnics": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "radiotechnics"
            },
            "name": "Radio/Electronic Component Store",
            "searchable": false
        },
        "shop/religion": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours",
                "religion",
                "denomination"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "religion"
            },
            "name": "Religious Store",
            "searchable": false
        },
        "shop/scuba_diving": {
            "icon": "swimming",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "scuba_diving"
            },
            "name": "Scuba Diving Shop",
            "searchable": false
        },
        "shop/seafood": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "fishmonger"
            ],
            "searchable": false,
            "tags": {
                "shop": "seafood"
            },
            "name": "Seafood Shop"
        },
        "shop/second_hand": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "secondhand",
                "second hand",
                "resale",
                "thrift",
                "used"
            ],
            "tags": {
                "shop": "second_hand"
            },
            "name": "Consignment/Thrift Store",
            "searchable": false
        },
        "shop/shoes": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "shoes"
            },
            "searchable": false,
            "name": "Shoe Store"
        },
        "shop/sports": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "sports"
            },
            "searchable": false,
            "name": "Sporting Goods Store"
        },
        "shop/stationery": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "card",
                "paper"
            ],
            "tags": {
                "shop": "stationery"
            },
            "searchable": false,
            "name": "Stationery Store"
        },
        "shop/supermarket": {
            "icon": "grocery",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "grocery",
                "store",
                "shop"
            ],
            "tags": {
                "shop": "supermarket"
            },
            "searchable": false,
            "name": "Supermarket"
        },
        "shop/tailor": {
            "icon": "clothing-store",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "clothes",
                "suit"
            ],
            "tags": {
                "shop": "tailor"
            },
            "searchable": false,
            "name": "Tailor"
        },
        "shop/tattoo": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "tattoo"
            },
            "name": "Tattoo Parlor",
            "searchable": false
        },
        "shop/tea": {
            "icon": "cafe",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "tea"
            },
            "name": "Tea Store",
            "searchable": false
        },
        "shop/ticket": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "ticket"
            },
            "name": "Ticket Seller",
            "searchable": false
        },
        "shop/tobacco": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "tobacco"
            },
            "name": "Tobacco Shop",
            "searchable": false
        },
        "shop/toys": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "toys"
            },
            "searchable": false,
            "name": "Toy Store"
        },
        "shop/travel_agency": {
            "icon": "suitcase",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "travel_agency"
            },
            "searchable": false,
            "name": "Travel Agency"
        },
        "shop/tyres": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "tyres"
            },
            "searchable": false,
            "name": "Tire Store"
        },
        "shop/vacant": {
            "icon": "shop",
            "fields": [
                "address",
                "building_area"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "vacant"
            },
            "name": "Vacant Shop",
            "searchable": false
        },
        "shop/vacuum_cleaner": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "vacuum_cleaner"
            },
            "name": "Vacuum Cleaner Store",
            "searchable": false
        },
        "shop/variety_store": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "variety_store"
            },
            "searchable": false,
            "name": "Variety Store"
        },
        "shop/video": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "DVD"
            ],
            "tags": {
                "shop": "video"
            },
            "searchable": false,
            "name": "Video Store"
        },
        "shop/video_games": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "video_games"
            },
            "name": "Video Game Store",
            "searchable": false
        },
        "shop/water_sports": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "water_sports"
            },
            "name": "Watersport/Swim Shop",
            "searchable": false
        },
        "shop/weapons": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "ammo",
                "gun",
                "knife",
                "knives"
            ],
            "tags": {
                "shop": "weapons"
            },
            "name": "Weapon Shop",
            "searchable": false
        },
        "shop/window_blind": {
            "icon": "shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "window_blind"
            },
            "name": "Window Blind Store",
            "searchable": false
        },
        "shop/wine": {
            "icon": "alcohol-shop",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "shop": "wine"
            },
            "searchable": false,
            "name": "Wine Shop"
        },
        "sport/sailing": {
            "geometry": [
                "point"
            ],
            "tags": {
                "sport": "sailing"
            },
            "name": "Sailing",
            "icon": "sailing-black",
            "maki": "npmaki",
            "searchable": true
        },
        "sport/scuba_diving": {
            "geometry": [
                "point"
            ],
            "tags": {
                "sport": "scuba_diving"
            },
            "name": "Scuba Driving",
            "icon": "scuba-diving-black",
            "maki": "npmaki",
            "searchable": true
        },
        "sport/swimming": {
            "geometry": [
                "point"
            ],
            "tags": {
                "sport": "swimming"
            },
            "name": "Swimming Area",
            "icon": "swimming-black",
            "maki": "npmaki",
            "searchable": true
        },
        "sport/windsurfing": {
            "geometry": [
                "point"
            ],
            "tags": {
                "sport": "windsurfing"
            },
            "name": "Wind Surfing Area",
            "icon": "wind-surfing-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism": {
            "fields": [
                "tourism"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "tourism": "*"
            },
            "searchable": false,
            "name": "Tourism"
        },
        "tourism/alpine_hut": {
            "fields": [
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "tourism": "alpine_hut"
            },
            "name": "Lodge",
            "icon": "lodging-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/artwork": {
            "icon": "art-gallery",
            "fields": [
                "artwork_type",
                "artist"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "tourism": "artwork"
            },
            "terms": [
                "mural",
                "sculpture",
                "statue"
            ],
            "searchable": false,
            "name": "Artwork"
        },
        "tourism/attraction": {
            "icon": "monument",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "tourism": "attraction"
            },
            "name": "Exhibit",
            "searchable": false
        },
        "tourism/attraction_poi": {
            "icon": "monument",
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "tourism": "attraction"
            },
            "name": "Point of Interest",
            "searchable": false
        },
        "tourism/attraction_wayside": {
            "icon": "monument",
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "tourism": "attraction"
            },
            "name": "Wayside",
            "searchable": false
        },
        "tourism/camp_site": {
            "fields": [
                "operator",
                "address"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "tourism": "camp_site",
                "camp_site": "pitch"
            },
            "name": "Campsite",
            "icon": "camping-white",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/campground": {
            "geometry": [
                "point"
            ],
            "tags": {
                "tourism": "camp_site"
            },
            "name": "Campground",
            "icon": "camping-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/caravan_site": {
            "fields": [
                "operator",
                "address",
                "smoking"
            ],
            "geometry": [
                "point",
                "vertex",
                "area"
            ],
            "tags": {
                "tourism": "caravan_site"
            },
            "searchable": false,
            "name": "RV Park"
        },
        "tourism/chalet": {
            "icon": "lodging",
            "fields": [
                "operator",
                "address",
                "building_area",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "tourism": "chalet"
            },
            "searchable": false,
            "name": "Chalet"
        },
        "tourism/guest_house": {
            "icon": "lodging",
            "fields": [
                "operator",
                "address",
                "building_area",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "tourism": "guest_house"
            },
            "terms": [
                "B&B",
                "Bed and Breakfast"
            ],
            "searchable": false,
            "name": "Guest House"
        },
        "tourism/hostel": {
            "icon": "lodging",
            "fields": [
                "operator",
                "address",
                "building_area",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "tourism": "hostel"
            },
            "searchable": false,
            "name": "Hostel"
        },
        "tourism/hotel": {
            "icon": "lodging-black",
            "maki": "npmaki",
            "fields": [
                "operator",
                "address",
                "building_area",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "tourism": "hotel"
            },
            "name": "Lodging",
            "searchable": true
        },
        "tourism/information": {
            "fields": [
                "information",
                "operator",
                "address",
                "building_area"
            ],
            "geometry": [
                "point"
            ],
            "tags": {
                "tourism": "information"
            },
            "name": "Information",
            "icon": "information-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/map": {
            "geometry": [
                "point"
            ],
            "tags": {
                "tourism": "information",
                "information": "map"
            },
            "name": "Information",
            "icon": "information-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/motel": {
            "icon": "lodging",
            "fields": [
                "operator",
                "address",
                "building_area",
                "smoking"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "tourism": "motel"
            },
            "searchable": false,
            "name": "Motel"
        },
        "tourism/museum": {
            "icon": "museum",
            "maki": "maki",
            "fields": [
                "operator",
                "address",
                "building_area",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "terms": [
                "exhibition",
                "foundation",
                "gallery",
                "hall",
                "institution"
            ],
            "tags": {
                "tourism": "museum"
            },
            "name": "Museum",
            "searchable": false
        },
        "tourism/picnic_site": {
            "fields": [
                "operator",
                "address",
                "smoking"
            ],
            "geometry": [
                "point",
                "vertex"
            ],
            "terms": [
                "camp"
            ],
            "tags": {
                "tourism": "picnic_site"
            },
            "name": "Picnic Area",
            "icon": "picnic-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/rv_campground": {
            "geometry": [
                "point"
            ],
            "tags": {
                "tourism": "camp_site",
                "caravans": "yes"
            },
            "name": "RV Campground",
            "icon": "rv-campground-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/self_guiding_trail": {
            "geometry": [
                "point"
            ],
            "tags": {
                "tourism": "information",
                "information": "guidepost"
            },
            "name": "Self-guiding Trail",
            "icon": "self-guided-trail-black",
            "maki": "npmaki",
            "searchable": true
        },
        "tourism/theme_park": {
            "fields": [
                "operator",
                "address",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "tourism": "theme_park"
            },
            "searchable": false,
            "name": "Theme Park"
        },
        "tourism/viewpoint": {
            "geometry": [
                "point",
                "vertex"
            ],
            "tags": {
                "tourism": "viewpoint"
            },
            "name": "Viewpoint",
            "searchable": false
        },
        "tourism/visitor_center": {
            "geometry": [
                "point"
            ],
            "terms": [
                "visitor center",
                "visitor centre"
            ],
            "tags": {
                "tourism": "information",
                "information": "office"
            },
            "name": "Visitor Center",
            "icon": "commercial",
            "maki": "maki",
            "searchable": true
        },
        "tourism/zoo": {
            "icon": "zoo",
            "fields": [
                "operator",
                "address",
                "opening_hours"
            ],
            "geometry": [
                "point",
                "area"
            ],
            "tags": {
                "tourism": "zoo"
            },
            "searchable": false,
            "name": "Zoo"
        },
        "traffic_calming/bump": {
            "fields": [
                "surface"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "traffic_calming": "bump"
            },
            "terms": [
                "speed hump"
            ],
            "name": "Speed Bump"
        },
        "traffic_calming/hump": {
            "fields": [
                "surface"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "traffic_calming": "hump"
            },
            "terms": [
                "speed bump"
            ],
            "name": "Speed Hump"
        },
        "traffic_calming/rumble_strip": {
            "geometry": [
                "vertex"
            ],
            "tags": {
                "traffic_calming": "rumble_strip"
            },
            "terms": [
                "sleeper lines",
                "audible lines",
                "growlers"
            ],
            "name": "Rumble Strip"
        },
        "traffic_calming/table": {
            "fields": [
                "surface"
            ],
            "geometry": [
                "vertex"
            ],
            "tags": {
                "highway": "crossing",
                "traffic_calming": "table"
            },
            "terms": [
                "speed table",
                "flat top hump"
            ],
            "name": "Raised Pedestrian Crossing"
        },
        "traffic_sign/yes_traffic": {
            "geometry": [
                "point"
            ],
            "tags": {
                "traffic_sign": "yes"
            },
            "searchable": false,
            "name": "Sign"
        },
        "type/boundary": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "boundary"
            },
            "searchable": false,
            "name": "Boundary",
            "icon": "boundary",
            "fields": [
                "boundary"
            ]
        },
        "type/boundary/administrative": {
            "searchable": false,
            "name": "Administrative Boundary",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "boundary",
                "boundary": "administrative"
            },
            "fields": [
                "admin_level"
            ],
            "icon": "boundary"
        },
        "type/multipolygon": {
            "geometry": [
                "area",
                "relation"
            ],
            "tags": {
                "type": "multipolygon"
            },
            "removeTags": {},
            "name": "Multipolygon",
            "icon": "multipolygon",
            "maki": "maki",
            "matchScore": 0.1,
            "searchable": false
        },
        "type/restriction": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction"
            },
            "searchable": false,
            "name": "Restriction",
            "icon": "restriction",
            "fields": [
                "restriction",
                "except"
            ]
        },
        "type/restriction/no_left_turn": {
            "name": "No Left Turn",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction",
                "restriction": "no_left_turn"
            },
            "fields": [
                "except"
            ],
            "icon": "restriction-no-left-turn",
            "searchable": false
        },
        "type/restriction/no_right_turn": {
            "name": "No Right Turn",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction",
                "restriction": "no_right_turn"
            },
            "fields": [
                "except"
            ],
            "icon": "restriction-no-right-turn",
            "searchable": false
        },
        "type/restriction/no_straight_on": {
            "name": "No Straight On",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction",
                "restriction": "no_straight_on"
            },
            "fields": [
                "except"
            ],
            "icon": "restriction-no-straight-on",
            "searchable": false
        },
        "type/restriction/no_u_turn": {
            "name": "No U-turn",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction",
                "restriction": "no_u_turn"
            },
            "fields": [
                "except"
            ],
            "icon": "restriction-no-u-turn",
            "searchable": false
        },
        "type/restriction/only_left_turn": {
            "name": "Left Turn Only",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction",
                "restriction": "only_left_turn"
            },
            "fields": [
                "except"
            ],
            "icon": "restriction-only-left-turn",
            "searchable": false
        },
        "type/restriction/only_right_turn": {
            "name": "Right Turn Only",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction",
                "restriction": "only_right_turn"
            },
            "fields": [
                "except"
            ],
            "icon": "restriction-only-right-turn",
            "searchable": false
        },
        "type/restriction/only_straight_on": {
            "name": "No Turns",
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "restriction",
                "restriction": "only_straight_on"
            },
            "fields": [
                "except"
            ],
            "icon": "restriction-only-straight-on",
            "searchable": false
        },
        "type/route": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route"
            },
            "searchable": false,
            "name": "Route",
            "icon": "route",
            "fields": [
                "route",
                "ref"
            ]
        },
        "type/route/bicycle": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "bicycle"
            },
            "searchable": false,
            "name": "Cycle Route",
            "icon": "route-bicycle",
            "fields": [
                "ref",
                "network"
            ]
        },
        "type/route/bus": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "bus"
            },
            "searchable": false,
            "name": "Bus Route",
            "icon": "route-bus",
            "fields": [
                "ref",
                "operator",
                "network"
            ]
        },
        "type/route/detour": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "detour"
            },
            "searchable": false,
            "name": "Detour Route",
            "icon": "route-detour",
            "fields": [
                "ref"
            ]
        },
        "type/route/ferry": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "ferry"
            },
            "searchable": false,
            "name": "Ferry Route",
            "icon": "route-ferry",
            "fields": [
                "ref",
                "operator",
                "network"
            ]
        },
        "type/route/foot": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "foot"
            },
            "searchable": false,
            "name": "Foot Route",
            "icon": "route-foot",
            "fields": [
                "ref",
                "operator",
                "network"
            ]
        },
        "type/route/hiking": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "hiking"
            },
            "searchable": false,
            "name": "Hiking Route",
            "icon": "route-foot",
            "fields": [
                "ref",
                "operator",
                "network"
            ]
        },
        "type/route/pipeline": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "pipeline"
            },
            "searchable": false,
            "name": "Pipeline Route",
            "icon": "route-pipeline",
            "fields": [
                "ref",
                "operator"
            ]
        },
        "type/route/power": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "power"
            },
            "searchable": false,
            "name": "Power Route",
            "icon": "route-power",
            "fields": [
                "ref",
                "operator"
            ]
        },
        "type/route/road": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "road"
            },
            "searchable": false,
            "name": "Road Route",
            "icon": "route-road",
            "fields": [
                "ref",
                "network"
            ]
        },
        "type/route/train": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "train"
            },
            "searchable": false,
            "name": "Train Route",
            "icon": "route-train",
            "fields": [
                "ref",
                "operator"
            ]
        },
        "type/route/tram": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route",
                "route": "tram"
            },
            "searchable": false,
            "name": "Tram Route",
            "icon": "route-tram",
            "fields": [
                "ref",
                "operator"
            ]
        },
        "type/route_master": {
            "geometry": [
                "relation"
            ],
            "tags": {
                "type": "route_master"
            },
            "searchable": false,
            "name": "Route Master",
            "icon": "route-master",
            "fields": [
                "route_master",
                "ref",
                "operator",
                "network"
            ]
        },
        "vertex": {
            "searchable": false,
            "name": "Other",
            "tags": {},
            "geometry": [
                "vertex"
            ],
            "matchScore": 0.1
        },
        "waterway": {
            "fields": [
                "waterway"
            ],
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "waterway": "*"
            },
            "searchable": false,
            "name": "Waterway"
        },
        "waterway/canal": {
            "icon": "waterway-canal",
            "fields": [
                "width"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "waterway": "canal"
            },
            "searchable": false,
            "name": "Canal"
        },
        "waterway/dam": {
            "icon": "dam",
            "geometry": [
                "point",
                "vertex",
                "line",
                "area"
            ],
            "tags": {
                "waterway": "dam"
            },
            "searchable": false,
            "name": "Dam"
        },
        "waterway/ditch": {
            "icon": "waterway-ditch",
            "fields": [
                "tunnel"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "waterway": "ditch"
            },
            "searchable": false,
            "name": "Ditch"
        },
        "waterway/drain": {
            "icon": "waterway-stream",
            "fields": [
                "tunnel"
            ],
            "geometry": [
                "line"
            ],
            "tags": {
                "waterway": "drain"
            },
            "searchable": false,
            "name": "Drain"
        },
        "waterway/river": {
            "icon": "waterway-river",
            "fields": [
                "tunnel",
                "width"
            ],
            "geometry": [
                "line"
            ],
            "terms": [
                "beck",
                "branch",
                "brook",
                "course",
                "creek",
                "estuary",
                "rill",
                "rivulet",
                "run",
                "runnel",
                "stream",
                "tributary",
                "watercourse"
            ],
            "tags": {
                "waterway": "river"
            },
            "searchable": false,
            "name": "River"
        },
        "waterway/riverbank": {
            "icon": "water",
            "geometry": [
                "area"
            ],
            "tags": {
                "waterway": "riverbank"
            },
            "searchable": false,
            "name": "Riverbank"
        },
        "waterway/stream": {
            "icon": "waterway-stream",
            "fields": [
                "tunnel",
                "width"
            ],
            "geometry": [
                "line"
            ],
            "terms": [
                "beck",
                "branch",
                "brook",
                "burn",
                "course",
                "creek",
                "current",
                "drift",
                "flood",
                "flow",
                "freshet",
                "race",
                "rill",
                "rindle",
                "rivulet",
                "run",
                "runnel",
                "rush",
                "spate",
                "spritz",
                "surge",
                "tide",
                "torrent",
                "tributary",
                "watercourse"
            ],
            "tags": {
                "waterway": "stream"
            },
            "searchable": false,
            "name": "Stream"
        },
        "waterway/waterfall": {
            "icon": "waterway-stream",
            "maki": "maki",
            "geometry": [
                "point"
            ],
            "tags": {
                "waterway": "waterfall"
            },
            "name": "Waterfall",
            "searchable": true
        },
        "waterway/weir": {
            "icon": "dam",
            "geometry": [
                "vertex",
                "line"
            ],
            "tags": {
                "waterway": "weir"
            },
            "searchable": false,
            "name": "Weir"
        },
        "wheelchair/yes_wc": {
            "geometry": [
                "point"
            ],
            "tags": {
                "wheelchair": "yes"
            },
            "searchable": true,
            "icon": "wheelchair-accessible-black",
            "maki": "npmaki",
            "name": "Wheelchair Accessible"
        },
        "wifi": {
            "geometry": [
                "point"
            ],
            "tags": {
                "wifi": "yes"
            },
            "name": "Wifi",
            "searchable": true
        }
    },
    "defaults": {
        "area": [
            "building",
            "amenity/parking"
        ],
        "line": [
            "highway/path",
            "highway/bridleway"
        ],
        "point": [
            "tourism/campground",
            "tourism/picnic_site",
            "amenity/parking",
            "tourism/information",
            "tourism/visitor_center",
            "amenity/ranger_station",
            "highway/trailhead",
            "amenity/food_court",
            "tourism/hotel",
            "shop/general",
            "tourism/map"
        ],
        "vertex": [
            "tourism/campground",
            "tourism/picnic_site",
            "amenity/parking",
            "tourism/information",
            "tourism/visitor_center",
            "amenity/ranger_station",
            "highway/trailhead",
            "amenity/food_court",
            "tourism/hotel",
            "shop/general",
            "tourism/map"
        ],
        "relation": []
    },
    "categories": {
        "category-building": {
            "geometry": "area",
            "name": "Building",
            "icon": "building",
            "members": [
                "building/house",
                "building/apartments",
                "building/commercial",
                "building/industrial",
                "building/residential",
                "building"
            ]
        },
        "category-golf": {
            "geometry": "area",
            "name": "Golf",
            "icon": "golf",
            "members": [
                "golf/fairway",
                "golf/green",
                "golf/lateral_water_hazard",
                "golf/rough",
                "golf/bunker",
                "golf/tee",
                "golf/water_hazard"
            ]
        },
        "category-landuse": {
            "geometry": "area",
            "name": "Land Use",
            "icon": "land-use",
            "members": [
                "landuse/residential",
                "landuse/industrial",
                "landuse/commercial",
                "landuse/retail",
                "landuse/farmland",
                "landuse/farmyard",
                "landuse/forest",
                "landuse/meadow",
                "landuse/cemetery",
                "landuse/military"
            ]
        },
        "category-path": {
            "geometry": "line",
            "name": "Path",
            "icon": "category-path",
            "members": [
                "highway/footway",
                "highway/cycleway",
                "highway/bridleway",
                "highway/path",
                "highway/steps"
            ]
        },
        "category-rail": {
            "geometry": "line",
            "name": "Rail",
            "icon": "category-rail",
            "members": [
                "railway/rail",
                "railway/subway",
                "railway/tram",
                "railway/monorail",
                "railway/disused",
                "railway/abandoned"
            ]
        },
        "category-restriction": {
            "geometry": "relation",
            "name": "Restriction",
            "icon": "restriction",
            "members": [
                "type/restriction/no_left_turn",
                "type/restriction/no_right_turn",
                "type/restriction/no_straight_on",
                "type/restriction/no_u_turn",
                "type/restriction/only_left_turn",
                "type/restriction/only_right_turn",
                "type/restriction/only_straight_on",
                "type/restriction"
            ]
        },
        "category-road": {
            "geometry": "line",
            "name": "Road",
            "icon": "category-roads",
            "members": [
                "highway/residential",
                "highway/motorway",
                "highway/trunk",
                "highway/primary",
                "highway/secondary",
                "highway/tertiary",
                "highway/service",
                "highway/motorway_link",
                "highway/trunk_link",
                "highway/primary_link",
                "highway/secondary_link",
                "highway/tertiary_link",
                "highway/unclassified",
                "highway/track",
                "highway/road"
            ]
        },
        "category-route": {
            "geometry": "relation",
            "name": "Route",
            "icon": "route",
            "members": [
                "type/route/road",
                "type/route/bicycle",
                "type/route/foot",
                "type/route/hiking",
                "type/route/bus",
                "type/route/train",
                "type/route/tram",
                "type/route/ferry",
                "type/route/power",
                "type/route/pipeline",
                "type/route/detour",
                "type/route_master",
                "type/route"
            ]
        },
        "category-water-area": {
            "geometry": "area",
            "name": "Water",
            "icon": "water",
            "members": [
                "natural/water/lake",
                "natural/water/pond",
                "natural/water/reservoir",
                "natural/water"
            ]
        },
        "category-water-line": {
            "geometry": "line",
            "name": "Water",
            "icon": "category-water",
            "members": [
                "waterway/river",
                "waterway/stream",
                "waterway/canal",
                "waterway/ditch",
                "waterway/drain"
            ]
        }
    },
    "fields": {
        "access": {
            "keys": [
                "access",
                "foot",
                "motor_vehicle",
                "bicycle",
                "horse"
            ],
            "reference": {
                "key": "access"
            },
            "type": "access",
            "label": "Access",
            "placeholder": "Unknown",
            "strings": {
                "types": {
                    "access": "General",
                    "foot": "Foot",
                    "motor_vehicle": "Motor Vehicles",
                    "bicycle": "Bicycles",
                    "horse": "Horses"
                },
                "options": {
                    "yes": {
                        "title": "Allowed",
                        "description": "Access permitted by law; a right of way"
                    },
                    "no": {
                        "title": "Prohibited",
                        "description": "Access not permitted to the general public"
                    },
                    "permissive": {
                        "title": "Permissive",
                        "description": "Access permitted until such time as the owner revokes the permission"
                    },
                    "private": {
                        "title": "Private",
                        "description": "Access permitted only with permission of the owner on an individual basis"
                    },
                    "designated": {
                        "title": "Designated",
                        "description": "Access permitted according to signs or specific local laws"
                    },
                    "destination": {
                        "title": "Destination",
                        "description": "Access permitted only to reach a destination"
                    }
                }
            }
        },
        "access_simple": {
            "key": "access",
            "type": "combo",
            "label": "Access",
            "placeholder": "yes",
            "options": [
                "permissive",
                "private",
                "customers",
                "no"
            ]
        },
        "access_toilets": {
            "key": "access",
            "type": "combo",
            "label": "Access",
            "options": [
                "public",
                "permissive",
                "private",
                "customers"
            ]
        },
        "address": {
            "type": "address",
            "keys": [
                "addr:housename",
                "addr:housenumber",
                "addr:street",
                "addr:city",
                "addr:postcode"
            ],
            "reference": {
                "key": "addr"
            },
            "icon": "address",
            "universal": true,
            "label": "Address",
            "strings": {
                "placeholders": {
                    "housename": "Housename",
                    "housenumber": "123",
                    "street": "Street",
                    "city": "City",
                    "postcode": "Postcode",
                    "place": "Place",
                    "hamlet": "Hamlet",
                    "suburb": "Suburb",
                    "subdistrict": "Subdistrict",
                    "district": "District",
                    "province": "Province",
                    "state": "State",
                    "country": "Country"
                }
            }
        },
        "admin_level": {
            "key": "admin_level",
            "type": "number",
            "label": "Admin Level"
        },
        "aerialway": {
            "key": "aerialway",
            "type": "typeCombo",
            "label": "Type"
        },
        "aerialway/access": {
            "key": "aerialway:access",
            "type": "combo",
            "label": "Access",
            "strings": {
                "options": {
                    "entry": "Entry",
                    "exit": "Exit",
                    "both": "Both"
                }
            }
        },
        "aerialway/bubble": {
            "key": "aerialway:bubble",
            "type": "check",
            "label": "Bubble"
        },
        "aerialway/capacity": {
            "key": "aerialway:capacity",
            "type": "number",
            "label": "Capacity (per hour)",
            "placeholder": "500, 2500, 5000..."
        },
        "aerialway/duration": {
            "key": "aerialway:duration",
            "type": "number",
            "label": "Duration (minutes)",
            "placeholder": "1, 2, 3..."
        },
        "aerialway/heating": {
            "key": "aerialway:heating",
            "type": "check",
            "label": "Heated"
        },
        "aerialway/occupancy": {
            "key": "aerialway:occupancy",
            "type": "number",
            "label": "Occupancy",
            "placeholder": "2, 4, 8..."
        },
        "aerialway/summer/access": {
            "key": "aerialway:summer:access",
            "type": "combo",
            "label": "Access (summer)",
            "strings": {
                "options": {
                    "entry": "Entry",
                    "exit": "Exit",
                    "both": "Both"
                }
            }
        },
        "aeroway": {
            "key": "aeroway",
            "type": "typeCombo",
            "label": "Type"
        },
        "amenity": {
            "key": "amenity",
            "type": "typeCombo",
            "label": "Type"
        },
        "artist": {
            "key": "artist_name",
            "type": "text",
            "label": "Artist"
        },
        "artwork_type": {
            "key": "artwork_type",
            "type": "combo",
            "label": "Type"
        },
        "atm": {
            "key": "atm",
            "type": "check",
            "label": "ATM"
        },
        "backrest": {
            "key": "backrest",
            "type": "check",
            "label": "Backrest"
        },
        "barrier": {
            "key": "barrier",
            "type": "typeCombo",
            "label": "Type"
        },
        "bench": {
            "key": "bench",
            "type": "check",
            "label": "Bench"
        },
        "bicycle_parking": {
            "key": "bicycle_parking",
            "type": "combo",
            "label": "Type"
        },
        "boundary": {
            "key": "boundary",
            "type": "combo",
            "label": "Type"
        },
        "brand": {
            "key": "brand",
            "type": "text",
            "label": "Brand"
        },
        "building": {
            "key": "building",
            "type": "typeCombo",
            "label": "Building"
        },
        "building_area": {
            "key": "building",
            "type": "combo",
            "default": "yes",
            "geometry": "area",
            "label": "Building"
        },
        "capacity": {
            "key": "capacity",
            "type": "number",
            "label": "Capacity",
            "placeholder": "50, 100, 200..."
        },
        "cardinal_direction": {
            "key": "direction",
            "type": "combo",
            "label": "Direction",
            "strings": {
                "options": {
                    "N": "North",
                    "E": "East",
                    "S": "South",
                    "W": "West",
                    "NE": "Northeast",
                    "SE": "Southeast",
                    "SW": "Southwest",
                    "NW": "Northwest",
                    "NNE": "North-northeast",
                    "ENE": "East-northeast",
                    "ESE": "East-southeast",
                    "SSE": "South-southeast",
                    "SSW": "South-southwest",
                    "WSW": "West-southwest",
                    "WNW": "West-northwest",
                    "NNW": "North-northwest"
                }
            }
        },
        "clock_direction": {
            "key": "direction",
            "type": "combo",
            "label": "Direction",
            "strings": {
                "options": {
                    "clockwise": "Clockwise",
                    "anticlockwise": "Counterclockwise"
                }
            }
        },
        "collection_times": {
            "key": "collection_times",
            "type": "text",
            "label": "Collection Times"
        },
        "construction": {
            "key": "construction",
            "type": "combo",
            "label": "Type"
        },
        "country": {
            "key": "country",
            "type": "combo",
            "label": "Country"
        },
        "covered": {
            "key": "covered",
            "type": "check",
            "label": "Covered"
        },
        "craft": {
            "key": "craft",
            "type": "typeCombo",
            "label": "Type"
        },
        "crop": {
            "key": "crop",
            "type": "combo",
            "label": "Crop"
        },
        "crossing": {
            "key": "crossing",
            "type": "combo",
            "label": "Type"
        },
        "cuisine": {
            "key": "cuisine",
            "type": "combo",
            "label": "Cuisine"
        },
        "delivery": {
            "key": "delivery",
            "type": "check",
            "label": "Delivery"
        },
        "denomination": {
            "key": "denomination",
            "type": "combo",
            "label": "Denomination"
        },
        "denotation": {
            "key": "denotation",
            "type": "combo",
            "label": "Denotation"
        },
        "description": {
            "key": "description",
            "type": "textarea",
            "label": "Description"
        },
        "drive_through": {
            "key": "drive_through",
            "type": "check",
            "label": "Drive-Through"
        },
        "electrified": {
            "key": "electrified",
            "type": "combo",
            "label": "Electrification",
            "placeholder": "Contact Line, Electrified Rail...",
            "strings": {
                "options": {
                    "contact_line": "Contact Line",
                    "rail": "Electrified Rail",
                    "yes": "Yes (unspecified)",
                    "no": "No"
                }
            }
        },
        "elevation": {
            "key": "ele",
            "type": "number",
            "icon": "elevation",
            "universal": true,
            "label": "Elevation"
        },
        "emergency": {
            "key": "emergency",
            "type": "check",
            "label": "Emergency"
        },
        "entrance": {
            "key": "entrance",
            "type": "typeCombo",
            "label": "Type"
        },
        "except": {
            "key": "except",
            "type": "combo",
            "label": "Exceptions"
        },
        "fax": {
            "key": "fax",
            "type": "tel",
            "label": "Fax",
            "placeholder": "+31 42 123 4567"
        },
        "fee": {
            "key": "fee",
            "type": "check",
            "label": "Fee"
        },
        "fire_hydrant/type": {
            "key": "fire_hydrant:type",
            "type": "combo",
            "label": "Type",
            "strings": {
                "options": {
                    "pillar": "Pillar/Aboveground",
                    "underground": "Underground",
                    "wall": "Wall",
                    "pond": "Pond"
                }
            }
        },
        "fixme": {
            "key": "fixme",
            "type": "textarea",
            "label": "Fix Me"
        },
        "fuel": {
            "key": "fuel",
            "type": "combo",
            "label": "Fuel"
        },
        "fuel/biodiesel": {
            "key": "fuel:biodiesel",
            "type": "check",
            "label": "Sells Biodiesel"
        },
        "fuel/diesel": {
            "key": "fuel:diesel",
            "type": "check",
            "label": "Sells Diesel"
        },
        "fuel/e10": {
            "key": "fuel:e10",
            "type": "check",
            "label": "Sells E10"
        },
        "fuel/e85": {
            "key": "fuel:e85",
            "type": "check",
            "label": "Sells E85"
        },
        "fuel/lpg": {
            "key": "fuel:lpg",
            "type": "check",
            "label": "Sells Propane"
        },
        "fuel/octane_100": {
            "key": "fuel:octane_100",
            "type": "check",
            "label": "Sells Racing Gasoline"
        },
        "fuel/octane_91": {
            "key": "fuel:octane_91",
            "type": "check",
            "label": "Sells Regular Gasoline"
        },
        "fuel/octane_95": {
            "key": "fuel:octane_95",
            "type": "check",
            "label": "Sells Midgrade Gasoline"
        },
        "fuel/octane_98": {
            "key": "fuel:octane_98",
            "type": "check",
            "label": "Sells Premium Gasoline"
        },
        "gauge": {
            "key": "gauge",
            "type": "combo",
            "label": "Gauge"
        },
        "gender": {
            "type": "radio",
            "keys": [
                "male",
                "female",
                "unisex"
            ],
            "label": "Gender",
            "placeholder": "Unknown",
            "strings": {
                "options": {
                    "male": "Male",
                    "female": "Female",
                    "unisex": "Unisex"
                }
            }
        },
        "generator/method": {
            "key": "generator:method",
            "type": "combo",
            "label": "Method"
        },
        "generator/source": {
            "key": "generator:source",
            "type": "combo",
            "label": "Source"
        },
        "generator/type": {
            "key": "generator:type",
            "type": "combo",
            "label": "Type"
        },
        "golf_hole": {
            "key": "ref",
            "type": "text",
            "label": "Reference",
            "placeholder": "Hole number (1-18)"
        },
        "handicap": {
            "key": "handicap",
            "type": "number",
            "label": "Handicap",
            "placeholder": "1-18"
        },
        "highway": {
            "key": "highway",
            "type": "typeCombo",
            "label": "Type"
        },
        "historic": {
            "key": "historic",
            "type": "typeCombo",
            "label": "Type"
        },
        "hoops": {
            "key": "hoops",
            "type": "number",
            "label": "Hoops",
            "placeholder": "1, 2, 4..."
        },
        "iata": {
            "key": "iata",
            "type": "text",
            "label": "IATA"
        },
        "icao": {
            "key": "icao",
            "type": "text",
            "label": "ICAO"
        },
        "incline": {
            "key": "incline",
            "type": "combo",
            "label": "Incline"
        },
        "incline_steps": {
            "key": "incline",
            "type": "combo",
            "label": "Incline",
            "strings": {
                "options": {
                    "up": "Up",
                    "down": "Down"
                }
            }
        },
        "information": {
            "key": "information",
            "type": "typeCombo",
            "label": "Type"
        },
        "internet_access": {
            "key": "internet_access",
            "type": "combo",
            "label": "Internet Access",
            "strings": {
                "options": {
                    "yes": "Yes",
                    "no": "No",
                    "wlan": "Wifi",
                    "wired": "Wired",
                    "terminal": "Terminal"
                }
            }
        },
        "lamp_type": {
            "key": "lamp_type",
            "type": "combo",
            "label": "Type"
        },
        "landuse": {
            "key": "landuse",
            "type": "typeCombo",
            "label": "Type"
        },
        "lanes": {
            "key": "lanes",
            "type": "number",
            "label": "Lanes",
            "placeholder": "1, 2, 3..."
        },
        "layer": {
            "key": "layer",
            "type": "combo",
            "label": "Layer"
        },
        "leaf_cycle": {
            "key": "leaf_cycle",
            "type": "combo",
            "label": "Leaf Cycle",
            "strings": {
                "options": {
                    "evergreen": "Evergreen",
                    "deciduous": "Deciduous",
                    "semi_evergreen": "Semi-Evergreen",
                    "semi_deciduous": "Semi-Deciduous",
                    "mixed": "Mixed"
                }
            }
        },
        "leaf_type": {
            "key": "leaf_type",
            "type": "combo",
            "label": "Leaf Type",
            "strings": {
                "options": {
                    "broadleaved": "Broadleaved",
                    "needleleaved": "Needleleaved",
                    "mixed": "Mixed",
                    "leafless": "Leafless"
                }
            }
        },
        "leisure": {
            "key": "leisure",
            "type": "typeCombo",
            "label": "Type"
        },
        "length": {
            "key": "length",
            "type": "number",
            "label": "Length (Meters)"
        },
        "levels": {
            "key": "building:levels",
            "type": "number",
            "label": "Levels",
            "placeholder": "2, 4, 6..."
        },
        "lit": {
            "key": "lit",
            "type": "check",
            "label": "Lit"
        },
        "location": {
            "key": "location",
            "type": "combo",
            "label": "Location"
        },
        "man_made": {
            "key": "man_made",
            "type": "typeCombo",
            "label": "Type"
        },
        "maxspeed": {
            "key": "maxspeed",
            "type": "maxspeed",
            "label": "Speed Limit",
            "placeholder": "40, 50, 60..."
        },
        "mtb/scale": {
            "key": "mtb:scale",
            "type": "combo",
            "label": "Mountain Biking Difficulty",
            "placeholder": "0, 1, 2, 3...",
            "strings": {
                "options": {
                    "0": "0: Solid gravel/packed earth, no obstacles, wide curves",
                    "1": "1: Some loose surface, small obstacles, wide curves",
                    "2": "2: Much loose surface, large obstacles, easy hairpins",
                    "3": "3: Slippery surface, large obstacles, tight hairpins",
                    "4": "4: Loose surface or boulders, dangerous hairpins",
                    "5": "5: Maximum difficulty, boulder fields, landslides",
                    "6": "6: Not rideable except by the very best mountain bikers"
                }
            }
        },
        "mtb/scale/imba": {
            "key": "mtb:scale:imba",
            "type": "combo",
            "label": "IMBA Trail Difficulty",
            "placeholder": "Easy, Medium, Difficult...",
            "strings": {
                "options": {
                    "0": "Easiest (white circle)",
                    "1": "Easy (green circle)",
                    "2": "Medium (blue square)",
                    "3": "Difficult (black diamond)",
                    "4": "Extremely Difficult (double black diamond)"
                }
            }
        },
        "mtb/scale/uphill": {
            "key": "mtb:scale:uphill",
            "type": "combo",
            "label": "Mountain Biking Uphill Difficulty",
            "placeholder": "0, 1, 2, 3...",
            "strings": {
                "options": {
                    "0": "0: Avg. incline <10%, gravel/packed earth, no obstacles",
                    "1": "1: Avg. incline <15%, gravel/packed earth, few small objects",
                    "2": "2: Avg. incline <20%, stable surface, fistsize rocks/roots",
                    "3": "3: Avg. incline <25%, variable surface, fistsize rocks/branches",
                    "4": "4: Avg. incline <30%, poor condition, big rocks/branches",
                    "5": "5: Very steep, bike generally needs to be pushed or carried"
                }
            }
        },
        "name": {
            "key": "name",
            "type": "localized",
            "label": "Name",
            "placeholder": "Common name (if any)"
        },
        "natural": {
            "key": "natural",
            "type": "typeCombo",
            "label": "Natural"
        },
        "network": {
            "key": "network",
            "type": "text",
            "label": "Network"
        },
        "note": {
            "key": "note",
            "type": "textarea",
            "universal": true,
            "icon": "note",
            "label": "Note"
        },
        "office": {
            "key": "office",
            "type": "typeCombo",
            "label": "Type"
        },
        "oneway": {
            "key": "oneway",
            "type": "check",
            "label": "One Way",
            "strings": {
                "options": {
                    "undefined": "Assumed to be No",
                    "yes": "Yes",
                    "no": "No"
                }
            }
        },
        "oneway_yes": {
            "key": "oneway",
            "type": "check",
            "label": "One Way",
            "strings": {
                "options": {
                    "undefined": "Assumed to be Yes",
                    "yes": "Yes",
                    "no": "No"
                }
            }
        },
        "opening_hours": {
            "key": "opening_hours",
            "type": "text",
            "label": "Hours"
        },
        "operator": {
            "key": "operator",
            "type": "text",
            "label": "Operator"
        },
        "par": {
            "key": "par",
            "type": "number",
            "label": "Par",
            "placeholder": "3, 4, 5..."
        },
        "park_ride": {
            "key": "park_ride",
            "type": "check",
            "label": "Park and Ride"
        },
        "parking": {
            "key": "parking",
            "type": "combo",
            "label": "Type",
            "strings": {
                "options": {
                    "surface": "Surface",
                    "multi-storey": "Multilevel",
                    "underground": "Underground",
                    "sheds": "Sheds",
                    "carports": "Carports",
                    "garage_boxes": "Garage Boxes",
                    "lane": "Roadside Lane"
                }
            }
        },
        "phone": {
            "key": "phone",
            "type": "tel",
            "icon": "telephone",
            "universal": true,
            "label": "Phone",
            "placeholder": "+31 42 123 4567"
        },
        "piste/difficulty": {
            "key": "piste:difficulty",
            "type": "combo",
            "label": "Difficulty",
            "placeholder": "Easy, Intermediate, Advanced...",
            "strings": {
                "options": {
                    "novice": "Novice (instructional)",
                    "easy": "Easy (green circle)",
                    "intermediate": "Intermediate (blue square)",
                    "advanced": "Advanced (black diamond)",
                    "expert": "Expert (double black diamond)",
                    "freeride": "Freeride (off-piste)",
                    "extreme": "Extreme (climbing equipment required)"
                }
            }
        },
        "piste/grooming": {
            "key": "piste:grooming",
            "type": "combo",
            "label": "Grooming",
            "strings": {
                "options": {
                    "classic": "Classic",
                    "mogul": "Mogul",
                    "backcountry": "Backcountry",
                    "classic+skating": "Classic and Skating",
                    "scooter": "Scooter/Snowmobile",
                    "skating": "Skating"
                }
            }
        },
        "piste/type": {
            "key": "piste:type",
            "type": "typeCombo",
            "label": "Type",
            "strings": {
                "options": {
                    "downhill": "Downhill",
                    "nordic": "Nordic",
                    "skitour": "Skitour",
                    "sled": "Sled",
                    "hike": "Hike",
                    "sleigh": "Sleigh",
                    "ice_skate": "Ice Skate",
                    "snow_park": "Snow Park",
                    "playground": "Playground"
                }
            }
        },
        "place": {
            "key": "place",
            "type": "typeCombo",
            "label": "Type"
        },
        "population": {
            "key": "population",
            "type": "text",
            "label": "Population"
        },
        "power": {
            "key": "power",
            "type": "typeCombo",
            "label": "Type"
        },
        "railway": {
            "key": "railway",
            "type": "typeCombo",
            "label": "Type"
        },
        "recycling/cans": {
            "key": "recycling:cans",
            "type": "check",
            "label": "Accepts Cans"
        },
        "recycling/clothes": {
            "key": "recycling:clothes",
            "type": "check",
            "label": "Accepts Clothes"
        },
        "recycling/glass": {
            "key": "recycling:glass",
            "type": "check",
            "label": "Accepts Glass"
        },
        "recycling/paper": {
            "key": "recycling:paper",
            "type": "check",
            "label": "Accepts Paper"
        },
        "ref": {
            "key": "ref",
            "type": "text",
            "label": "Reference"
        },
        "relation": {
            "key": "type",
            "type": "combo",
            "label": "Type"
        },
        "religion": {
            "key": "religion",
            "type": "combo",
            "label": "Religion"
        },
        "restriction": {
            "key": "restriction",
            "type": "combo",
            "label": "Type"
        },
        "restrictions": {
            "type": "restrictions",
            "geometry": "vertex",
            "icon": "restrictions",
            "reference": {
                "rtype": "restriction"
            },
            "label": "Turn Restrictions"
        },
        "route": {
            "key": "route",
            "type": "combo",
            "label": "Type"
        },
        "route_master": {
            "key": "route_master",
            "type": "combo",
            "label": "Type"
        },
        "sac_scale": {
            "key": "sac_scale",
            "type": "combo",
            "label": "Hiking Difficulty",
            "placeholder": "Mountain Hiking, Alpine Hiking...",
            "strings": {
                "options": {
                    "hiking": "T1: Hiking",
                    "mountain_hiking": "T2: Mountain Hiking",
                    "demanding_mountain_hiking": "T3: Demanding Mountain Hiking",
                    "alpine_hiking": "T4: Alpine Hiking",
                    "demanding_alpine_hiking": "T5: Demanding Alpine Hiking",
                    "difficult_alpine_hiking": "T6: Difficult Alpine Hiking"
                }
            }
        },
        "seasonal": {
            "key": "seasonal",
            "type": "check",
            "label": "Seasonal"
        },
        "service": {
            "key": "service",
            "type": "combo",
            "label": "Type",
            "options": [
                "parking_aisle",
                "driveway",
                "alley",
                "emergency_access",
                "drive-through"
            ]
        },
        "service/bicycle/chain_tool": {
            "key": "service:bicycle:chain_tool",
            "type": "check",
            "label": "Chain Tool",
            "strings": {
                "options": {
                    "undefined": "Assumed to be No",
                    "yes": "Yes",
                    "no": "No"
                }
            }
        },
        "service/bicycle/pump": {
            "key": "service:bicycle:pump",
            "type": "check",
            "label": "Air Pump",
            "strings": {
                "options": {
                    "undefined": "Assumed to be No",
                    "yes": "Yes",
                    "no": "No"
                }
            }
        },
        "service_rail": {
            "key": "service",
            "type": "combo",
            "label": "Service Type",
            "strings": {
                "options": {
                    "spur": "Spur",
                    "yard": "Yard",
                    "siding": "Siding",
                    "crossover": "Crossover"
                }
            }
        },
        "shelter": {
            "key": "shelter",
            "type": "check",
            "label": "Shelter"
        },
        "shelter_type": {
            "key": "shelter_type",
            "type": "combo",
            "label": "Type"
        },
        "shop": {
            "key": "shop",
            "type": "typeCombo",
            "label": "Type"
        },
        "sloped_curb": {
            "key": "sloped_curb",
            "type": "combo",
            "label": "Sloped Curb"
        },
        "smoking": {
            "key": "smoking",
            "type": "combo",
            "label": "Smoking",
            "placeholder": "No, Separated, Yes...",
            "strings": {
                "options": {
                    "no": "No smoking anywhere",
                    "separated": "In smoking areas, not physically isolated",
                    "isolated": "In smoking areas, physically isolated",
                    "outside": "Allowed outside",
                    "yes": "Allowed everywhere",
                    "dedicated": "Dedicated to smokers (e.g. smokers' club)"
                }
            }
        },
        "smoothness": {
            "key": "smoothness",
            "type": "combo",
            "label": "Smoothness",
            "placeholder": "Thin Rollers, Wheels, Off-Road...",
            "strings": {
                "options": {
                    "excellent": "Thin Rollers: rollerblade, skateboard",
                    "good": "Thin Wheels: racing bike",
                    "intermediate": "Wheels: city bike, wheelchair, scooter",
                    "bad": "Robust Wheels: trekking bike, car, rickshaw",
                    "very_bad": "High Clearance: light duty off-road vehicle",
                    "horrible": "Off-Road: heavy duty off-road vehicle",
                    "very_horrible": "Specialized off-road: tractor, ATV",
                    "impassable": "Impassable / No wheeled vehicle"
                }
            }
        },
        "social_facility_for": {
            "key": "social_facility:for",
            "type": "radio",
            "label": "People served",
            "placeholder": "Homeless, Disabled, Child, etc",
            "options": [
                "abused",
                "child",
                "disabled",
                "diseased",
                "drug_addicted",
                "homeless",
                "juvenile",
                "mental_health",
                "migrant",
                "orphan",
                "senior",
                "underprivileged",
                "unemployed",
                "victim"
            ]
        },
        "source": {
            "key": "source",
            "type": "text",
            "icon": "source",
            "universal": true,
            "label": "Source"
        },
        "sport": {
            "key": "sport",
            "type": "combo",
            "label": "Sport"
        },
        "sport_ice": {
            "key": "sport",
            "type": "combo",
            "label": "Sport",
            "options": [
                "skating",
                "hockey",
                "multi",
                "curling",
                "ice_stock"
            ]
        },
        "sport_racing": {
            "key": "sport",
            "type": "combo",
            "label": "Sport",
            "options": [
                "cycling",
                "dog_racing",
                "horse_racing",
                "karting",
                "motor",
                "motocross",
                "running"
            ]
        },
        "structure": {
            "type": "radio",
            "keys": [
                "bridge",
                "tunnel",
                "embankment",
                "cutting",
                "ford"
            ],
            "label": "Structure",
            "placeholder": "Unknown",
            "strings": {
                "options": {
                    "bridge": "Bridge",
                    "tunnel": "Tunnel",
                    "embankment": "Embankment",
                    "cutting": "Cutting",
                    "ford": "Ford"
                }
            }
        },
        "studio_type": {
            "key": "type",
            "type": "combo",
            "label": "Type",
            "options": [
                "audio",
                "video"
            ]
        },
        "substation": {
            "key": "substation",
            "type": "typeCombo",
            "label": "Type"
        },
        "supervised": {
            "key": "supervised",
            "type": "check",
            "label": "Supervised"
        },
        "surface": {
            "key": "surface",
            "type": "combo",
            "label": "Surface"
        },
        "tactile_paving": {
            "key": "tactile_paving",
            "type": "check",
            "label": "Tactile Paving"
        },
        "takeaway": {
            "key": "takeaway",
            "type": "combo",
            "label": "Takeaway",
            "placeholder": "Yes, No, Takeaway Only...",
            "strings": {
                "options": {
                    "yes": "Yes",
                    "no": "No",
                    "only": "Takeaway Only"
                }
            }
        },
        "toilets/disposal": {
            "key": "toilets:disposal",
            "type": "combo",
            "label": "Disposal",
            "strings": {
                "options": {
                    "flush": "Flush",
                    "pitlatrine": "Pit/Latrine",
                    "chemical": "Chemical",
                    "bucket": "Bucket"
                }
            }
        },
        "tourism": {
            "key": "tourism",
            "type": "typeCombo",
            "label": "Type"
        },
        "towertype": {
            "key": "tower:type",
            "type": "combo",
            "label": "Tower type"
        },
        "tracktype": {
            "key": "tracktype",
            "type": "combo",
            "label": "Track Type",
            "placeholder": "Solid, Mostly Solid, Soft...",
            "strings": {
                "options": {
                    "grade1": "Solid: paved or heavily compacted hardcore surface",
                    "grade2": "Mostly Solid: gravel/rock with some soft material mixed in",
                    "grade3": "Even mixture of hard and soft materials",
                    "grade4": "Mostly Soft: soil/sand/grass with some hard material mixed in",
                    "grade5": "Soft: soil/sand/grass"
                }
            }
        },
        "trail_visibility": {
            "key": "trail_visibility",
            "type": "combo",
            "label": "Trail Visibility",
            "placeholder": "Excellent, Good, Bad...",
            "strings": {
                "options": {
                    "excellent": "Excellent: unambiguous path or markers everywhere",
                    "good": "Good: markers visible, sometimes require searching",
                    "intermediate": "Intermediate: few markers, path mostly visible",
                    "bad": "Bad: no markers, path sometimes invisible/pathless",
                    "horrible": "Horrible: often pathless, some orientation skills required",
                    "no": "No: pathless, excellent orientation skills required"
                }
            }
        },
        "trees": {
            "key": "trees",
            "type": "combo",
            "label": "Trees"
        },
        "tunnel": {
            "key": "tunnel",
            "type": "combo",
            "label": "Tunnel"
        },
        "vending": {
            "key": "vending",
            "type": "combo",
            "label": "Type of Goods"
        },
        "water": {
            "key": "water",
            "type": "combo",
            "label": "Type"
        },
        "waterway": {
            "key": "waterway",
            "type": "typeCombo",
            "label": "Type"
        },
        "website": {
            "key": "website",
            "type": "url",
            "icon": "website",
            "placeholder": "http://example.com/",
            "universal": true,
            "label": "Website"
        },
        "wetland": {
            "key": "wetland",
            "type": "combo",
            "label": "Type"
        },
        "wheelchair": {
            "key": "wheelchair",
            "type": "radio",
            "options": [
                "yes",
                "limited",
                "no"
            ],
            "icon": "wheelchair",
            "universal": true,
            "label": "Wheelchair Access"
        },
        "width": {
            "key": "width",
            "type": "number",
            "label": "Width (Meters)"
        },
        "wikipedia": {
            "key": "wikipedia",
            "type": "wikipedia",
            "icon": "wikipedia",
            "universal": true,
            "label": "Wikipedia"
        }
    }
};