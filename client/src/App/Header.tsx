import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <nav className="bg-indigo-200 border-gray-200">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4">
        <Link className="underline font-bold" to="/">
          Магазин
        </Link>
        <Link
          to="/fav"
          className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 shadow-sm  hover:border-green-400 border-white border-2 border-dashed"
        >
          Корзина
        </Link>
      </div>
    </nav>
  );
}
