import React from "react";
import { connect } from "react-redux";
import Admin from "../components/Admin";
import { fetchUsers } from "../store/actions/users";
import { Redirect } from "react-router-dom";

class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <Admin user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.usersReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
