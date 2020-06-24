import React from 'react'; 
import { connect } from 'react-redux'; 
import EditProduct from '../components/EditProduct'; 
import { fetchProduct, editProduct } from '../store/actions/singleProduct';

class EditProductContainer extends React.Component {
    constructor(props){
        super(props);
        const { name, description, price, stock, img1Url, img2Url} = this.props
        this.state = {}
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleStockChange = this.handleStockChange.bind(this)
        this.hangleImage1Change = this.hangleImage1Change.bind(this)
        this.handleImage2Change = this.handleImage2Change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetchProduct(this.props.id)
    }

    handleNameChange(event){
        const value = event.target.value
        this.setState({nameInput: value})
    }

    handleDescriptionChange(event){
        const value = event.target.value
        this.setState({descriptionInput: value})
    }

    handlePriceChange(event){
        const value = event.target.value
        this.setState({priceInput: value})
    }

    handleStockChange(event){
        const value = event.target.value
        this.setState({stockInput: value})
    }

    hangleImage1Change(event){
        const value = event.target.value
        this.setState({image1Input: value})
    }

    handleImage2Change(event){
        const value = event.target.value
        this.setState({image2Input: value})
    }

    handleSubmit(){
        event.preventDefault();
        confirm('Are you sure you want to change this product info?')
       editProduct(this.props.id, this.state)
        this.props.history.push('/products')
    }
    render(){
        const { nameInput, descriptionInput, priceInput, stockInput, image1Input, image2Input } = this.props
        return (
            <div>
                <EditProduct
                name={nameInput} 
                description={descriptionInput}  
                price={priceInput} 
                stock={stockInput}
                img1Url={image1Input} 
                img2Url={image2Input} 
                handleName={this.handleNameChange}
                handleDescription={this.handleDescriptionChange}
                handlePrice={this.handlePriceChange}
                handleStock={this.handleStockChange}
                hangleImage1={this.hangleImage1Change}
                handleImage2={this.handleImage2Change}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state.productReducer ', state.productReducer)
    return {
        id: ownProps.match.params.id,
        history: ownProps.history,
        name: state.productReducer.product.name,
        description: state.productReducer.product.description, 
        price: state.productReducer.product.price,
        stock: state.productReducer.product.stock,
        img1Url: state.productReducer.product.img1Url,
        img2Url: state.productReducer.product.img2Url
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => {dispatch(fetchProduct(id))} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductContainer)