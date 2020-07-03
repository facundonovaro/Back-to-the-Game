import React from "react";
import { connect } from "react-redux";
import ManageUsers from "../components/ManageUsers";
import {
  fetchUsers,
  fetchUser,
  editUser,
  deleteUser,
} from "../store/actions/users";

class ManageUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      role: "",
    };

    this.chooseUser = this.chooseUser.bind(this);
    this.editRole = this.editRole.bind(this);
    this.changeRole = this.changeRole.bind(this);
    this.destroyUser = this.destroyUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    const { foundUser } = this.props;
    if (foundUser !== prevProps.foundUser) {
      this.setState({
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        role: foundUser.role,
      });
    }
  }

  chooseUser(e) {
    e.preventDefault();
    const id = e.target.value;
    this.props.fetchUser(id);
  }

  changeRole(e) {
    const role = e.target.value;
    this.setState({
      role: role,
    });
  }

  editRole(e) {
    e.preventDefault();
    confirm("Are you sure you want to change this product info?");
    this.props.editUser(this.props.foundUser.id, { role: this.state.role });
    this.setState({
      firstName: "",
      lastName: "",
      role: "",
    });
  }

  destroyUser() {
    confirm("Are you sure you want to change this product info?");
    this.props.deleteUser(this.props.foundUser.id);
    this.setState({
      firstName: "",
      lastName: "",
      role: "",
    });
  }

  render() {
    const {} = this.props;
    const { firstName, lastName, role } = this.state;

    return (
      <div>
        <ManageUsers
          users={this.props.users}
          foundUser={this.props.foundUser}
          firstName={firstName}
          lastName={lastName}
          role={role}
          editRole={this.editRole}
          chooseUser={this.chooseUser}
          destroyUser={this.destroyUser}
          changeRole={this.changeRole}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.usersReducer.users,
    user: state.usersReducer.user,
    foundUser: state.usersReducer.userFound,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    fetchUser: (id) => {
      dispatch(fetchUser(id));
    },
    editUser: (userId, role) => {
      dispatch(editUser(userId, role));
    },
    deleteUser: (userId) => {
      dispatch(deleteUser(userId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsersContainer);
