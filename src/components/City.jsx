import React from "react";

export default function City({cityInfo}) {
    return <div className="border rounded mt-5">
        <div className="bg-light px-3 py-2  border-bottom rounded-top ">{cityInfo['City']}, {cityInfo['State']}</div>
        <ul className="py-3 px-5 pb-2">
            <li>State: {cityInfo.State}</li>
            <li>Location: ({cityInfo['Lat']}, {cityInfo['Long']})</li>
            <li>Population (estimated): {cityInfo['EstimatedPopulation']}</li>
            <li>Total Wages: {cityInfo['TotalWages']}</li>
        </ul>

    </div>;
}