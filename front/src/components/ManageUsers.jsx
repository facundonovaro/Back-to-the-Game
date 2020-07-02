import React from "react";

const ManageUser = ({
  users,
  firstName,
  lastName,
  role,
  editRole,
  chooseUser,
  destroyUser,
  changeRole,
}) => {
  return (
    <div className="container-fluid" style={{ width: "60%" }}>
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
          <select className="form-control" name="product" onChange={changeRole}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superAdmin">Super Admin</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <button onClick={destroyUser}>Eliminar Usuario</button>
    </div>
  );
};

export default ManageUser;
