import React, {Component} from "react";
import { connect } from 'react-redux';
import { Search, fetchResults } from '../actions/actions';
import SearchResults from "../components/SearchResults";


class SearchForm extends Component {

  constructor(props){
    super(props);
    this.Search = React.createRef();
  }

  handleSearch = (input) => {
    input.preventDefault();
    
    const searchValue = this.Search.current.value.trim()
    this.props.Search(Search(searchValue));

    document.getElementById("searchValue").value='';

    this.props.fetchResults(searchValue);
    console.log(searchValue)

  }

  render(){
    return (
      <div>
        <h1>Algolia Hacker News App</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            name="searchInput"
            id="searchValue"
            ref={this.Search}
          />
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <SearchResults />
      </div>
    );
    }
  };
  
  function mapStateToProps(state) {
    return {
      searches: state.searches,
      searchResults: state.searchResults,
      error: state.error
    }
  }
  
  const mapDispatchToProps = {
     Search,
     fetchResults
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

