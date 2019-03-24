import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";


const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PLACE:
        return {
            ...state,
            places: state.places.concat({
                key: Math.random(),
                name: action.placeName,
                image: {
                  uri: "https://c1.hiqcdn.com/photos/sh/shareiq-272-1408512090-332930-JPG-destreviewimages-720x512-1408512090-cropped.JPG"
                }
              })
        };
        case DELETE_PLACE:
        return {
            ...state,
            places: state.places.filter(place =>{
                return place.key !== action.placeKey;
              })
        };
        default:
        return state;
    }
}

export default reducer;