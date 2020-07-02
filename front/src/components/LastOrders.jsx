import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ orders, user }) => {
  let dates = Object.keys(orders);

  return (
    <div>
      {user.id ? (
        <>
          <h1>Historial de Órdenes</h1>

          {dates.map((updatedAt) => {
            return (
              <>
                <h2>{updatedAt.slice(0, 15)}</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Imagen</th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders[updatedAt].map((order, e) => {
                      return (
                        <tr>
                          <td>{e + 1}</td>
                          <td>
                            <img
                              src={order.product.img1Url}
                              style={{ width: "100px" }}
                            ></img>
                          </td>
                          <td>{order.product.name}</td>
                          <td>{order.product.price}</td>
                          <td>{order.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </>
            );
          })}
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
