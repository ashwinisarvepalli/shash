import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 15, name: "Cape Town", coordinates: [-33.9248685, 18.424055299999964]},
  { markerOffset: 15, name: "Flint", coordinates: [43.0125274, -83.68745619999999] },
  { markerOffset: 15, name: "Kenya", coordinates: [-0.023559, 37.90619300000003] },
  { markerOffset: 15, name: "Bang", coordinates: [23.684994, 90.35633099999995] },
  { markerOffset: 15, name: "PeshawarPaki", coordinates: [20.593684, 78.96288000000004] },
  { markerOffset: 15, name: "Najaf", coordinates: [32.027376, 4.33311649999996] },
  { markerOffset: 15, name: "Gaza Strip", coordinates: [31.3546763, 34.30882550000001] },
  { markerOffset: 15, name: "Kabulafghan", coordinates: [34.5553494, 69.20748600000002] },
  { markerOffset: 15, name: "Syria", coordinates: [34.80207499999999, 38.99681499999997] },
  { markerOffset: 15, name: "Karachi", coordinates: [25.0700428, 67.2847875] },
  { markerOffset: 15, name: "Sanaa", coordinates: [15.3694451, 44.19100660000004] },
  { markerOffset: 15, name: "Lagos Lagoon", coordinates: [6.4310951, 3.401896899999997] },
  { markerOffset: 15, name: "Caracas", coordinates: [10.4805937, -66.90360629999998] },
  { markerOffset: 15, name: "Rum", coordinates: [54.0088637, 26.390325500000017] },
  { markerOffset: 15, name: "Krasnoyarsk", coordinates: [56.01528339999999, 92.8932476] },
  { markerOffset: 15, name: "Kathmandu", coordinates: [27.7172453, 85.3239605] },
  { markerOffset: 15, name: "Islamabad", coordinates: [33.6844202, 73.04788480000002] },
  { markerOffset: 15, name: "Allahabad", coordinates: [25.4358011,81.84631100000001] },
  { markerOffset: 15, name: "Chiffa", coordinates: [36.4594664, 2.7282189999999673] },
  { markerOffset: 15, name: "Yanngon", coordinates: [16.8660694, 96.19513200000006] }
];

const MapChart = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#98D7C2" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;