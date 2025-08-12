import React, { useState } from "react";
import {  ComposableMap,  Geographies,  Geography} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const countries = [
  { name: "India", code: "IND" },
  { name: "United States", code: "USA" },
  { name: "Canada", code: "CAN" },
  { name: "Brazil", code: "BRA" },
  { name: "Australia", code: "AUS" },
  { name: "United Kingdom", code: "GBR" },
  { name: "Singapore", code: "SGP" },
  { name: "New Zealand", code: "NZL" }
];

export default function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="map-container">
      <h3>Our reach</h3>
      <p>
        Ebix’s 10,000+ professionals across 50+ countries deliver tech-driven,
        localized solutions with a global outlook - wherever your business
        operates.
      </p>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">--All--</option>
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>

      <ComposableMap projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isSelected = geo.properties.ISO_A3 === selectedCountry;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={isSelected ? "highlight" : ""}
                  style={{
                    default: {
                      fill: isSelected ? "#1976d2" : "#DDD",
                      outline: "none",
                      transition: "all 0.5s ease"
                    },
                    hover: {
                      fill: "#1976d2",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#1976d2",
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
