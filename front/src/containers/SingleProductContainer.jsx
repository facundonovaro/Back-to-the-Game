import React from 'react'; 
import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct'; 
import { fetchProduct } from '../store/actions/singleProduct'; 

class SingleProductContainer extends React.component {

    componentDidMount(){
        this.props.fetchProduct(this.props.id)
    }

    render(){
        const { product } = this.props
        return (
            <div>
                <SingleProduct
                product={ product }
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        product: state.product.product
    }
}

export default connect(mapStateToProps,null)(SingleProductContainer)