import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';

class CategoryContainer extends React.Component {

    render (){
        const { products } = this.props
        return (
            <div>
                <Products
                products={products}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.categoryReducer.products
    }
}

export default connect(mapStateToProps, null)(CategoryContainer)