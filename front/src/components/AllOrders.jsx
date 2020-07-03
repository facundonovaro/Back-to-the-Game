import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ orders, user }) => {
  let dates = Object.keys(orders);

  return (
    <div>
      {user.role == "superAdmin" || user.role == "admin" ? (
        <>
          <h1>Historial de Órdenes</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            {dates.map((updatedAt, e) => {
              return (
                <tbody>
                  {orders[updatedAt].map((order) => {
                    return (
                      <tr>
                        <td>{e + 1}</td>
                        <td>{updatedAt.slice(0, 15)}</td>
                        <td>{order.product.name}</td>
                        <td>{order.product.price}</td>
                        <td>{order.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              );
            })}
          </Table>
        </>
      ) : (
        <img
          id="imgNotFound"
          src="https://cdn.optinmonster.com/wp-content/uploads/2018/06/android-404-845x504.png"
        ></img>
      )}
    </div>
  );
};
