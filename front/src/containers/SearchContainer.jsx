import React from "react";
import { connect } from "react-redux";
import Search from '../components/Search';

class SearchContainer extends React.Component {
 constructor(){
     super()

 }

    render(){
        const {searchedProducts} = this.props 
        return(
            <Search
            searchedProducts={searchedProducts}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchedProducts : state.productsReducer.searchedList
    };
  };


export default connect (mapStateToProps) (SearchContainer)