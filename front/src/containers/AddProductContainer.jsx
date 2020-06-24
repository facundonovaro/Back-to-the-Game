import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../back/controllers/productControllers';

class AddProductContainer extends React.Component {

    render(){
        <div>
            <addProduct />
        </div>
    }
}

export default connect()(AddProductContainer);