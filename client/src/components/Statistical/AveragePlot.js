import React from "react";
import "./style.css";
import PlotJson from '../../scripts/plot.json';

const AveragePlot = () => {
    const calculateAverage = (array) =>  {
        var total = 0;
        var count = 0;
    
        array.forEach(function(item, index) {
            total += item;
            count++;
        });
    
        return total / count;
    }
    let column= calculateAverage(PlotJson.V);

    console.log(column);
    return (
    <div className='avg-container'>

    </div>
    );
};

export default AveragePlot;