import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ItemCard from './ItemCard';
import { type RootState } from '../../store';
import { loadItems } from './api';

function ItemList(): JSX.Element {
  const itemList = useSelector((store: RootState) => store.itemsReducer.itemList);

  const dispatch = useDispatch();

  useEffect(() => {
    loadItems()
      .then((data) => {
        dispatch({ type: 'item/load', payload: data });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto mt-2">
      {itemList.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ItemList;
