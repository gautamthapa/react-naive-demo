import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "./actionTypes";


const initialState = {
    places: [],
    selectedPlace: null
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
                return place.key !== state.selectedPlace.key;
              }),
              selectedPlace: null
        };
        case SELECT_PLACE:
        return {
            ...state,
            selectedPlace : state.places.find(place => {
                return place.key === ation.placeKey;
              })
        };
        case DESELECT_PLACE:
        return {
            ...state,
            selectedPlace: null
        }
        default:
        return state;
    }
}

export default reducer;