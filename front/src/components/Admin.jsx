import React from "react";
import { Link, Redirect } from "react-router-dom";

const Admin = ({ user }) => {
  return (
    <>
      {user.role == "superAdmin" || user.role == "admin" ? (
        <div className="container-fluid" style={{ width: "60%" }}>
          <div className="form-group">
            <legend>
              BIENVENIDO, {user.firstName} {user.lastName}{" "}
            </legend>
          </div>
          <div className="form-group">
            <legend>Administrar Productos</legend>
          </div>

          <Link to={"/admin/add-product"}>
            <button type="submit" className="btn btn-primary buttonManageUser">
              Agregar Producto
            </button>
          </Link>
          <Link to={"/admin/edit-product"}>
            <button type="submit" className="btn btn-primary buttonManageUser">
              Modificar Producto
            </button>
          </Link>
          <Link to={"/admin/delete-product"}>
            <button type="submit" className="btn btn-primary buttonManageUser">
              Eliminar Producto
            </button>
          </Link>
          <Link to={"/admin/all-orders"}>
            <button type="submit" className="btn btn-primary buttonManageUser">
              Ver Historial de Órdenes
            </button>
          </Link>

          {user.role === "superAdmin" ? (
            <Link to={"/admin/manage-users"}>
              <button
                type="submit"
                className="btn btn-primary buttonManageUser"
              >
                Administrar Usuarios
              </button>
            </Link>
          ) : null}
        </div>
      ) : (
        <img
          id="imgNotFound"
          src="https://cdn.optinmonster.com/wp-content/uploads/2018/06/android-404-845x504.png"
        ></img>
      )}
    </>
  );
};

export default Admin;
