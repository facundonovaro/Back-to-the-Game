import React from 'react'; 
import { connect } from 'react-redux'; 
import EditProduct from '../components/EditProduct'; 

class EditProductContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: '',
            descriptionInput: '',
            priceInput: 0,
            stockInput: 0,
            image1Input: '',
            image2Input: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleStockChange = this.handleStockChange.bind(this)
        this.hangleImage1Change = this.hangleImage1Change.bind(this)
        this.handleImage2Change = this.handleImage2Change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        const { nameInput, descriptionInput, priceInput, stockInput, image1Input, image2Input } = this.state
        this.props.newProduct({
            name: nameInput, 
            description: descriptionInput, 
            price: priceInput,
            stock: stockInput,
            img1Url: image1Input,
            img2Url: image2Input
        })
        this.props.history.push('/products')
    }
    render(){
        return (
            <div>
                <EditProduct/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductContainer)