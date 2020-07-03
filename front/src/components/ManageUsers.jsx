import React from "react";
import { Button } from "react-bootstrap";

const ManageUser = ({
  users,
  firstName,
  lastName,
  role,
  editRole,
  chooseUser,
  destroyUser,
  changeRole,
  user,
}) => {
  return (
    <>
      {user.role == "superAdmin" ? (
        <div className="container-fluid">
          <div className="form-group">
            <legend>Manage User</legend>
            <div className="form-group">
              <label htmlFor="product" className="col-xs-2 control-label">
                User
              </label>
              <div className="col-xs-10">
                <select
                  onChange={chooseUser}
                  className="form-control"
                  name="product"
                >
                  <option>Seleccionar usuario</option>
                  {users &&
                    users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.firstName} {user.lastName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div>Nombre: {firstName}</div>
            <div>Apellido: {lastName}</div>
            <div>Rol: {role}</div>
          </div>
          <div className="form-group">
            <form onSubmit={editRole}>
              <label>Cambiar Rol</label>
              <select
                className="form-control"
                name="product"
                onChange={changeRole}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="superAdmin">Super Admin</option>
              </select>
              <Button type="submit" variant="dark">
                Enviar
              </Button>
            </form>
          </div>
          <Button variant="dark" onClick={destroyUser}>
            Eliminar Usuario
          </Button>
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

export default ManageUser;
