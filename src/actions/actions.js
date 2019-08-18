import axios from "axios";
const BASEURL = "http://hn.algolia.com/api/v1/search_by_date?tags=story";


export const fetchResults = () => {
    return (dispatch) => {
        axios.get(BASEURL)
        .then(function (response) {
            const results = response.data.hits;
            dispatch(addResults(results));
        })
        .catch(function (error) {
            dispatch(itemsError(true));
        });
    }
};


export const addResults = (items) => ({
    type: "ADD_RESULTS",
    searchResults: items
});


export const Search = (item) => ({
    type: "ADD_SEARCH",
    item
});


export const itemsError = bool => ({
    type: "ITEMS_ERROR",
    error: bool
  });