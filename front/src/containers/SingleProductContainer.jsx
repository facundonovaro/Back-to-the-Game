import React from 'react'; 
import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct'; 
import { fetchProduct } from '../store/actions/singleProduct'; 

class SingleProductContainer extends React.Component {

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
        product: state.productReducer.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => {dispatch(fetchProduct(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleProductContainer)