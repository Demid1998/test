import type Item from './Item';

type Action = {
  type: 'item/load';
  payload: Item[];
};

export default Action;
