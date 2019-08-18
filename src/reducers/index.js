let defaultState={
    searches: [],
    searchResults:[],
    error:false
}

const mainReducer= (state=defaultState,action)=>{
    if(action.type === "ADD_SEARCH"){
        return{
            ...state,
            searches:[...state.searches, action.item] 
        }
    } else if (action.type ==="ADD_RESULTS"){
        return{
            ...state,
            searchResults: [...action.searchResults]
        }

    }else{
        return{
            ...state
        }
    }

}

export default mainReducer;