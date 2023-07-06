"use client";
import React, { useState, useEffect } from "react";
import { useSnapshot } from "valtio";

import { state } from "../lib/state";

//TODO: should I just use the snapshot here or pass as args?
export default function Tooltip() {
  const snapshot = useSnapshot(state.stateMapSettings);

  if (typeof snapshot.hoveredObject === "undefined") {
    return "";
  } else {
    const tooltipStyle = {
      position: "absolute",
      top: `${snapshot.y}px`,
      left: `${snapshot.x}px`,
      // Additional styles for the tooltip
    };

    console.log(snapshot.hoveredObject);

    return (
      <div className="tooltip" style={tooltipStyle}>
        <div>
          <b>{snapshot.hoveredObject.properties["Establishment Name"]}</b>
        </div>
        <div>
          <b>{snapshot.hoveredObject.properties["Full Address"]}</b>
        </div>
        <div>
          <b>
            Parent Corporation:{" "}
            {snapshot.hoveredObject.properties["Parent Corporation"]}
          </b>
        </div>
      </div>
    );
  }
}
