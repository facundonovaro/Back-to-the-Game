import React from "react";
import { Link } from "react-router-dom"

const Admin = ({
  handleSubmit,

}) => {
  return (
    <div className="container-fluid" style={{ width: "60%" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <legend>BIENVENIDO  ADMINISTRADOR</legend>
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
        <Link to={"/admin/add-product"}>
          <button type="submit" className="btn btn-primary buttonManageUser">
            Administrar Usuarios
        </button>
        </Link>


      </form>
    </div>
  );
};

export default Admin;
