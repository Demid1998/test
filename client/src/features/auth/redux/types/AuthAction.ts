import type Item from '../../../item/redux/types/Item';

type AuthAction =
  | {
      type: 'user/favorites/add';
      payload: Item;
    }
  | {
      type: 'user/favorites/remove';
      payload: Item['id'];
    };

export default AuthAction;
