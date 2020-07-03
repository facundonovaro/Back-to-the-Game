import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaEdit, FaHistory, FaUserEdit } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";

const Admin = ({ user }) => {
  return (
    <>
      {user.role == "superAdmin" || user.role == "admin" ? (
        <div className="container-fluid">
          <div className="form-group"></div>
          <div className="form-group">
            <h2>Administrar Productos</h2>
          </div>
          <div id="adminAbmButtons">
            <div id="adminAbmButton">
              <h3>Agregar Producto</h3>
              <br />
              <Link to={"/admin/add-product"}>
                <BsFillPlusSquareFill size={100} color={"#0f0f1a"} />
              </Link>
            </div>
            <div id="adminAbmButton">
              <h3>Modificar Producto</h3>
              <br />
              <Link to={"/admin/edit-product"}>
                <FaEdit size={100} color={"#0f0f1a"} />
              </Link>
            </div>
            <div id="adminAbmButton">
              <h3>Eliminar Producto</h3>
              <br />
              <Link to={"/admin/delete-product"}>
                <MdRemoveCircle size={100} color={"#0f0f1a"} />
              </Link>
            </div>
          </div>
          <div id="adminAbmButtons">
            <div id="adminAbmButton">
              <h3> Ver Historial de Órdenes</h3>
              <br />
              <Link to={"/admin/all-orders"}>
                <FaHistory size={100} color={"#0f0f1a"} />
              </Link>
            </div>
            {user.role === "superAdmin" ? (
              <div id="adminAbmButton">
                <h3>Administrar Usuarios</h3>
                <br />
                <Link to={"/admin/manage-users"}>
                  <FaUserEdit size={100} color={"#0f0f1a"} />
                </Link>
              </div>
            ) : null}
          </div>
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
