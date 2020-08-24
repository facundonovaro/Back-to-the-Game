import React from "react";
import { Line, Bar } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsCalendar, BsToggleOff, BsToggleOn } from "react-icons/bs";

export default ({
  orders,
  user,
  data,
  lineOptions,
  earnings,
  earningsOptions,
  productsSales,
  productsSalesOptions,
  facturacionTotal,
  unidadesTotales,
  onChange,
  date,
  showCalendar,
  toggleCalendar,
  toggleLegend,
  showLegend,
  toggleAxes,
  showAxes,
  toggleGridLines,
  showGridLines,
}) => {
  return (
    <div>
      <>
        <div className="salesContainer">
          <div className="calendarContainer">
            <BsCalendar size={30} color="grey" onClick={toggleCalendar} />
            {showCalendar ? (
              <div className="calendar">
                <Calendar selectRange onChange={onChange} value={date} />
              </div>
            ) : null}
            <div>
              <p className="calendarPreiod">
                Periodo Seleccionado: {date[0].toString().slice(4, 15)} -{" "}
                {date[1].toString().slice(4, 15)}
              </p>
            </div>
          </div>

          <div className="sales">Facturación Total: ${facturacionTotal}</div>
          <div className="sales">Unidades Vendidas: {unidadesTotales}</div>
        </div>
        <div className="dashboardMainContainer">
          <div className="lineChartContainer">
            <div className="lineChart">
              <p className="chartTitle">Unidades Vendidas por día</p>

              <div>
                <Line
                  data={data}
                  options={{
                    ...lineOptions,
                    legend: {
                      display: showLegend,
                      position: "bottom",
                    },
                    scales: {
                      xAxes: [
                        {
                          gridLines: {
                            display: showGridLines,
                          },
                          ticks: {
                            display: showAxes,
                          },
                        },
                      ],
                      yAxes: [
                        {
                          gridLines: {
                            display: showGridLines,
                          },
                          ticks: {
                            display: showAxes,
                            beginAtZero: true,
                            stepSize: 1,
                          },
                          position: "left",
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
            <div className="lineChart">
              <p className="chartTitle">Facturación por día</p>
              <div>
                <Line
                  data={earnings}
                  options={{
                    ...earningsOptions,
                    legend: {
                      display: showLegend,
                      position: "bottom",
                    },
                    scales: {
                      xAxes: [
                        {
                          gridLines: {
                            display: showGridLines,
                          },
                          ticks: {
                            display: showAxes,
                            fontColor: "black",
                          },
                        },
                      ],
                      yAxes: [
                        {
                          gridLines: {
                            display: showGridLines,
                          },
                          ticks: {
                            display: showAxes,
                            fontColor: "black",
                            beginAtZero: true,
                            stepSize: 50000,
                            callback: function (value) {
                              return `$ ${value}`;
                            },
                          },
                          position: "left",
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
            <div className="lineChart">
              <p className="chartTitle">Unidades Vendidas por Producto</p>
              <div>
                <Bar
                  data={productsSales}
                  options={{
                    ...productsSalesOptions,
                    legend: {
                      display: showLegend,
                      position: "bottom",
                    },
                    scales: {
                      xAxes: [
                        {
                          gridLines: {
                            display: showGridLines,
                          },
                          ticks: {
                            display: showAxes,
                            fontColor: "black",
                          },
                        },
                      ],
                      yAxes: [
                        {
                          gridLines: {
                            display: showGridLines,
                          },
                          ticks: {
                            display: showAxes,
                            fontColor: "black",
                            beginAtZero: true,
                            stepSize: 1,
                          },
                          position: "left",
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="dashboardOptionsContainer">
            <div className="dashboardOptionsContent">
              <div>
                <h5 className="dashboardOptionsTitle">Visualización</h5>
              </div>
              <div className="dashboardOptions">
                <p className="dashboardOptionsText">Leyenda: </p>
                {showLegend ? (
                  <BsToggleOn size={25} color="grey" onClick={toggleLegend} />
                ) : (
                  <BsToggleOff size={25} color="grey" onClick={toggleLegend} />
                )}
              </div>

              <div className="dashboardOptions">
                <p className="dashboardOptionsText">Ejes: </p>
                {showAxes ? (
                  <BsToggleOn size={25} color="grey" onClick={toggleAxes} />
                ) : (
                  <BsToggleOff size={25} color="grey" onClick={toggleAxes} />
                )}
              </div>
              <div className="dashboardOptions">
                <p className="dashboardOptionsText">Grilla: </p>
                {showGridLines ? (
                  <BsToggleOn
                    size={25}
                    color="grey"
                    onClick={toggleGridLines}
                  />
                ) : (
                  <BsToggleOff
                    size={25}
                    color="grey"
                    onClick={toggleGridLines}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
