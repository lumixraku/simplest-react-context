import AllFoods from './foods';

const initialState = {
  food: AllFoods,
  searchTerm: '',
};

export default function reducer(state = initialState, action) {
  // switch between the action type
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGED':
      const {searchTerm} = action.payload;
      return {
        ...state,
        searchTerm: searchTerm,
        food: searchTerm ? AllFoods.filter(
          (food) => (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
        ) : AllFoods,
      };
    default:
      return state;
  }
}