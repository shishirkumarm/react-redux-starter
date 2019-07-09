// state is not applciation state; only this state stands for this reducer state object
export default function(reducerState = null, action) {
    switch(action.type){
        case "BOOK_SELECTED":
            return action.payload;
    }
    return reducerState;
}