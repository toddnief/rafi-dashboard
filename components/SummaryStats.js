"use client";
import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";

import { state } from "../lib/state";

function calculateHHI(filteredSales) {
  // TODO: should probably make total sales part of the state
  // calculate total sales in selected area
  if (Object.keys(filteredSales).length) {
    let totalSales = Object.values(filteredSales).reduce(
      (acc, item) => acc + item.sales,
      0
    );

    // calculate HHI
    return Object.values(filteredSales).reduce(
      (acc, item) => acc + Math.pow((item.sales * 100) / totalSales, 2),
      0
    );
  } else {
    return 0;
  }
}

export function SummaryStats() {
  const snapshot = useSnapshot(state.stateData);

  if (!snapshot.isDataLoaded) {
    return <div>Loading...</div>;
  }

  console.log(snapshot.filteredSales);

  const calculatedHHI = calculateHHI(snapshot.filteredSales);

  return (
    <div>
      {calculatedHHI ? (
        <div>
          <h2>HHI for Selected States</h2>
          <p>{calculatedHHI.toFixed(0)}</p>
        </div>
      ) : (
        "No data available"
      )}
      <div>
        {snapshot.filteredSales &&
        Object.keys(snapshot.filteredSales).length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Sales</th>
                <th>Percent of Sales</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(snapshot.filteredSales).map(([key, item]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    {(item.sales * 1000).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    })}
                  </td>
                  <td>{(item.percent * 100).toFixed(1) + "%"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
