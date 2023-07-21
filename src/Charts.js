import * as React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Data from "highcharts/modules/data";
import { useEffect } from "react";
Data(Highcharts);

Highcharts.setOptions({
  lang: {
    thousandsSep: ","
  }
});

(function (H) {
  H.Pointer.prototype.reset = function () {
    return undefined;
  };

  /**
   * Highlight a point by showing tooltip, setting hover state and draw crosshair
   */
  H.Point.prototype.highlight = function (event) {
    event = this.series.chart.pointer.normalize(event);
    this.onMouseOver(); // Show the hover marker
    //this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
  };

  H.syncExtremes = function (e) {
    var thisChart = this.chart;

    if (e.trigger !== "syncExtremes") {
      // Prevent feedback loop
      Highcharts.each(Highcharts.charts, function (chart) {
        if (chart && chart !== thisChart) {
          if (chart.xAxis[0].setExtremes) {
            // It is null while updating
            chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
              trigger: "syncExtremes"
            });
          }
        }
      });
    }
  };
})(Highcharts);

export default function Charts({
  chart_name1,
  csv_name1,
  chart_name2,
  csv_name2
}) {
  useEffect(() => {
    ["mousemove", "touchmove", "touchstart"].forEach(function (eventType) {
      document
        .getElementById("highcharts_container")
        .addEventListener(eventType, function (e) {
          var chart, point, i, event;

          for (i = 0; i < Highcharts.charts.length; i = i + 1) {
            chart = Highcharts.charts[i];
            if (chart) {
              // Find coordinates within the chart
              event = chart.pointer.normalize(e);
              // Get the hovered point
              chart.series.forEach((series) => {
                const point = series.searchPoint(event, true);

                if (point) {
                  try {
                    point.highlight(e);
                  } catch (err) {
                    // pass;
                  }
                }
              });
            }
          }
        });
    });
  }, []);

  const options1 = {
    title: {
      text: chart_name1
    },
    xAxis: {
      visible: true,
      crosshair: true,
      events: {
        setExtremes: function (e) {
          Highcharts.syncExtremes(e);
        }
      }
    },

    tooltip: {
      shared: true,
      shape: "rectangle",
      xDateFormat: "%Y-%m"
    },
    data: {
      csvURL: window.location.origin + "/" + csv_name1,
      switchRowsAndColumns: true,
      itemDelimiter: "\t"
    }
  };

  const options2 = {
    title: {
      text: chart_name2
    },
    xAxis: {
      visible: true,
      crosshair: true,

      events: {
        setExtremes: function (e) {
          Highcharts.syncExtremes(e);
        }
      }
    },

    tooltip: {
      shared: true,
      shape: "rectangle",
      xDateFormat: "%Y-%m"
    },
    data: {
      csvURL: window.location.origin + "/" + csv_name2,
      switchRowsAndColumns: true,
      itemDelimiter: "\t"
    }
  };

  return (
    <div id="highcharts_container">
      <HighchartsReact highcharts={Highcharts} options={options1} />
      <HighchartsReact highcharts={Highcharts} options={options2} />
    </div>
  );
}
