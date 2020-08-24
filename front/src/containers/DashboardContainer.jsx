import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import {
  fetchSalesHistory,
  fetchProductsSales,
} from "../store/actions/checkout";

const mapStateToProps = function (state) {
  return {
    sales: state.checkoutReducer.salesHistory,
    user: state.usersReducer.user,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchSalesHistory: (array) => {
      return dispatch(fetchSalesHistory(array));
    },
    fetchProductsSales: (array) => {
      return dispatch(fetchProductsSales(array));
    },
  };
};
const today = new Date();
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGridLines: false,
      showAxes: false,
      showCalendar: false,
      showLegend: false,
      date: [firstDay, today],
      data: {
        labels: [],
        datasets: [
          {
            label: "Volumen de Ventas",
            fill: true,
            backgroundColor: "rgba(52, 58, 64,0.3)",
            borderColor: "rgba(52, 58, 64,1)",
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
          },
        ],
      },
      earnings: {
        labels: [],
        datasets: [
          {
            label: "Facturación",
            fill: true,
            backgroundColor: "rgba(52, 58, 64,0.3)",
            borderColor: "rgba(52, 58, 64,1)",
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
          },
        ],
      },
      productsSales: {
        labels: [],
        datasets: [
          {
            label: "Unidades Vendidas por Producto",
            fill: true,
            backgroundColor: "rgba(52, 58, 64,0.3)",
            borderColor: "rgba(52, 58, 64,1)",
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
          },
        ],
      },
      lineOptions: {
        tooltips: {
          enabled: true,
        },
      },
      earningsOptions: {
        tooltips: {
          enabled: true,
        },
      },
      productsSalesOptions: {
        tooltips: {
          enabled: true,
        },
      },
      facturacionTotal: 0,
      unidadesTotales: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.toggleLegend = this.toggleLegend.bind(this);
    this.toggleAxes = this.toggleAxes.bind(this);
    this.toggleGridLines = this.toggleGridLines.bind(this);
  }

  toggleCalendar() {
    this.setState({
      showCalendar: !this.state.showCalendar,
    });
  }

  toggleGridLines() {
    this.setState({
      showGridLines: !this.state.showGridLines,
    });
  }
  toggleAxes() {
    this.setState({
      showAxes: !this.state.showAxes,
    });
  }
  toggleLegend() {
    this.setState({
      showLegend: !this.state.showLegend,
    });
  }

  onChange(date) {
    this.setState({
      date: date,
      showCalendar: !this.state.showCalendar,
    });
    this.props
      .fetchSalesHistory(date)
      .then((data) => {
        this.setState({
          earnings: {
            ...this.state.earnings,
            labels: [],
            datasets: [
              {
                ...this.state.earnings.datasets[0],
                data: [],
              },
            ],
          },
          data: {
            ...this.state.data,
            labels: [],
            datasets: [
              {
                ...this.state.data.datasets[0],
                data: [],
              },
            ],
          },
          facturacionTotal: 0,
          unidadesTotales: 0,
        });
        for (var i = 0; i < data.sales.length; i++) {
          this.setState({
            earnings: {
              ...this.state.earnings,
              labels: [...this.state.earnings.labels, data.sales[i].short_date],
              datasets: [
                {
                  ...this.state.earnings.datasets[0],
                  data: [
                    ...this.state.earnings.datasets[0].data,
                    data.sales[i].total_price,
                  ],
                },
              ],
            },
            data: {
              ...this.state.data,
              labels: [...this.state.data.labels, data.sales[i].short_date],
              datasets: [
                {
                  ...this.state.data.datasets[0],
                  data: [
                    ...this.state.data.datasets[0].data,
                    data.sales[i].total_quantity,
                  ],
                },
              ],
            },
            facturacionTotal:
              this.state.facturacionTotal + Number(data.sales[i].total_price),
            unidadesTotales:
              this.state.unidadesTotales + Number(data.sales[i].total_quantity),
          });
        }
      })
      .then(() => this.props.fetchProductsSales(date))
      .then((data) => {
        this.setState({
          productsSales: {
            ...this.state.productsSales,
            labels: [],
            datasets: [
              {
                ...this.state.productsSales.datasets[0],
                data: [],
              },
            ],
          },
        });
        for (var i = 0; i < data.productsSales.length; i++) {
          this.setState({
            productsSales: {
              ...this.state.productsSales,
              labels: [
                ...this.state.productsSales.labels,
                data.productsSales[i].product.name,
              ],
              datasets: [
                {
                  ...this.state.productsSales.datasets[0],
                  data: [
                    ...this.state.productsSales.datasets[0].data,
                    data.productsSales[i].total_quantity,
                  ],
                },
              ],
            },
          });
        }
      });
  }
  componentDidMount() {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.props
      .fetchSalesHistory([firstDay, today])
      .then((data) => {
        for (var i = 0; i < data.sales.length; i++) {
          this.setState({
            earnings: {
              ...this.state.earnings,
              labels: [...this.state.earnings.labels, data.sales[i].short_date],
              datasets: [
                {
                  ...this.state.earnings.datasets[0],
                  data: [
                    ...this.state.earnings.datasets[0].data,
                    data.sales[i].total_price,
                  ],
                },
              ],
            },
            data: {
              ...this.state.data,
              labels: [...this.state.data.labels, data.sales[i].short_date],
              datasets: [
                {
                  ...this.state.data.datasets[0],
                  data: [
                    ...this.state.data.datasets[0].data,
                    data.sales[i].total_quantity,
                  ],
                },
              ],
            },
            facturacionTotal:
              this.state.facturacionTotal + Number(data.sales[i].total_price),
            unidadesTotales:
              this.state.unidadesTotales + Number(data.sales[i].total_quantity),
          });
        }
      })
      .then(() => this.props.fetchProductsSales([firstDay, today]))
      .then((data) => {
        for (var i = 0; i < data.productsSales.length; i++) {
          this.setState({
            productsSales: {
              ...this.state.productsSales,
              labels: [
                ...this.state.productsSales.labels,
                data.productsSales[i].product.name,
              ],
              datasets: [
                {
                  ...this.state.productsSales.datasets[0],
                  data: [
                    ...this.state.productsSales.datasets[0].data,
                    data.productsSales[i].total_quantity,
                  ],
                },
              ],
            },
          });
        }
      });
  }

  render() {
    return (
      <Dashboard
        orders={this.props.sales}
        user={this.props.user}
        data={this.state.data}
        lineOptions={this.state.lineOptions}
        earnings={this.state.earnings}
        earningsOptions={this.state.earningsOptions}
        productsSales={this.state.productsSales}
        productsSalesOptions={this.state.productsSalesOptions}
        facturacionTotal={this.state.facturacionTotal}
        unidadesTotales={this.state.unidadesTotales}
        onChange={this.onChange}
        date={this.state.date}
        toggleCalendar={this.toggleCalendar}
        showCalendar={this.state.showCalendar}
        toggleLegend={this.toggleLegend}
        showLegend={this.state.showLegend}
        toggleAxes={this.toggleAxes}
        showAxes={this.state.showAxes}
        toggleGridLines={this.toggleGridLines}
        showGridLines={this.state.showGridLines}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
