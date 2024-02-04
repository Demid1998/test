import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { type RootState } from '../../store';

import ItemCard from '../item/ItemCard';

export default function ProfilePage(): JSX.Element {
  const favorites = useSelector((store: RootState) => store.userReducer.favorites);

  return (
    <div className="max-w-screen-lg mx-auto my-6 grid grid-cols-2 gap-3 place-items-start">
      <div className="w-4/5">
        <h2 className="mb-4 font-bold text-xl">Избранные</h2>
        <Link
          to="/"
          className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 shadow-sm  hover:border-green-400 border-white border-2 border-dashed"
        >
          На главную
        </Link>
        <div>
          {favorites.length ? (
            favorites.map((item) => <ItemCard item={item} />)
          ) : (
            <i>Корзина пуста</i>
          )}
        </div>
        <button type="button">Buy!</button>
      </div>
    </div>
  );
}
