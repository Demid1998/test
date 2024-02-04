import type AuthAction from './types/AuthAction';
import type AuthState from './types/AuthState';

export const initState: AuthState = {

  favorites: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state: AuthState = initState, action: AuthAction): AuthState {
  switch (action.type) {
 
    case 'user/favorites/add':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'user/favorites/remove':
      return {
        ...state,
        favorites: state.favorites.filter((v) => v.id !== action.payload),
      };
 
    default:
      return state;
  }
}

export default reducer;
