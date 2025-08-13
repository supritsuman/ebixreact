import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightCountries = [
  { name: "United States", code: "USA" },
  { name: "India", code: "IND" },
  { name: "Canada", code: "CAN" },
  { name: "Germany", code: "DEU" },
  { name: "France", code: "FRA" },
  { name: "China", code: "CHN" },
  { name: "Brazil", code: "BRA" },
  { name: "Australia", code: "AUS" },
  { name: "South Africa", code: "ZAF" },
  { name: "Japan", code: "JPN" },
];

const initiallyHighlighted = ["IND", "CAN", "DEU"];

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="container-fluid px-5 ourmap custpx innershadow ourpd" id="reach">
      <div className="row">
        <h2>Our reach</h2>
        <h3>
          Ebix’s 10,000+ professionals across 50+ countries deliver
          tech-driven, localized solutions with a global outlook - wherever
          your business operates.
        </h3>

        <div
          className="select-wrapper"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <select
            className="form-select select-box"
            aria-label="Select Country"
            value={selectedCountry}
            onChange={handleChange}
            style={{ width: "200px", margin: "0 auto", display: "block" }}
          >
            <option value="">Select a country</option>
            {highlightCountries.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center text-center mb-4">
            <ComposableMap
              projectionConfig={{ scale: 150 }}
              width={800}
              height={400}
            >
              <Geographies geography={geoUrl}>
                {({ geographies, projection }) => {
                  return (
                    <>
                      {geographies.map((geo) => {
                        const geoCode = (geo.properties.ISO_A3 || "").toUpperCase();
                        const isSelected =
                          selectedCountry.toUpperCase() === geoCode;
                        const isInitiallyHighlighted = initiallyHighlighted.includes(geoCode);

                        let fillColor = "#DDD"; // default gray

                        if (isSelected) {
                          fillColor = "#2196F3"; // blue for selected
                        } else if (isInitiallyHighlighted) {
                          fillColor = geoCode === "IND" ? "#008000" : "#FF9800"; // India green, others orange
                        }

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={fillColor}
                            stroke="#FFF"
                            style={{
                              default: {
                                outline: "none",
                                opacity: isSelected ? 1 : 0.85,
                              },
                              hover: {
                                outline: "none",
                                cursor: "pointer",
                              },
                              pressed: {
                                outline: "none",
                              },
                            }}
                          />
                        );
                      })}

                      {/* Render annotations using the same geographies */}
                      {highlightCountries.map(({ code, name }) => {
                        const geo = geographies.find(
                          (g) =>
                            (g.properties.ISO_A3 || "").toUpperCase() === code
                        );
                        if (!geo) return null;

                        const centroid = geoCentroid(geo);
                        if (!centroid) return null;

                        const [x, y] = projection(centroid);

                        const isSelected = code === selectedCountry.toUpperCase();
                        const isInitiallyHighlighted = initiallyHighlighted.includes(code);

                        const textColor = isSelected
                          ? "#2196F3"
                          : code === "IND"
                          ? "#008000"
                          : isInitiallyHighlighted
                          ? "#FF9800"
                          : "#0f0705ff";

                        const fontWeight = isSelected ? "bold" : "normal";

                        return (
                          <Annotation
                            key={code}
                            subject={[x, y]}
                            dx={10}
                            dy={-10}
                            connectorProps={{
                              stroke: textColor,
                              strokeWidth: 1,
                              strokeLinecap: "round",
                            }}
                          >
                            <text
                              x={4}
                              fontSize={12}
                              alignmentBaseline="middle"
                              fill={textColor}
                              fontWeight={fontWeight}
                            >
                              {name}
                            </text>
                          </Annotation>
                        );
                      })}
                    </>
                  );
                }}
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
