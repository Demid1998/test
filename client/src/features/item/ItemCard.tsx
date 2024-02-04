import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon as Heart } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

import styles from './items.module.css';
import { type RootState } from '../../store';

import * as api from './api';
import type Item from './redux/types/Item';

type ItemPropsType = {
  item: Item;
};

function ItemCard({ item }: ItemPropsType): JSX.Element {
  const [qwer, setQwer] = useState<number>(0);
  const [a, setA] = useState<number>(0);
  const fetchExchangeRate = useCallback(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((response) => response.json())
      .then((data) => {
        const usdRate = data.Valute.USD.Value;
        console.log(`Курс обмена: 1 USD = ${usdRate} RUB`);
        setQwer(usdRate);
      })
      .catch((error) => {
        console.error('Произошла ошибка при получении курса обмена:', error);
      });
  }, []);
  useEffect(() => {
    fetchExchangeRate();

    const intervalId = setInterval(() => {
      fetchExchangeRate();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [fetchExchangeRate]);

  useEffect(() => {
    setA(item.rub * qwer);
  }, [item.rub, qwer]);

  const dispatch = useDispatch();

  const favorites = useSelector((store: RootState) => store.userReducer.favorites);
  console.log(favorites);

  const isFavorite = useMemo(() => favorites.find((v) => v.id === item.id), [favorites]);

  const handleRemoveFromFavorites = async (id: Item['id']): Promise<void> => {
    try {
      const newCount = item.count + 0;
      console.log(newCount, '+++');
      await api.removeFromFavorites(id, newCount);
      dispatch({ type: 'user/favorites/remove', payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToFavorites = async (id: Item['id']): Promise<void> => {
    try {
      const newCount = item.count - 1;
      console.log(newCount, '---');

      await api.saveToFavorites(id, newCount);
      dispatch({ type: 'user/favorites/add', payload: item });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.itemCard} key={item.id}>
      <b>{item.count}</b>
      <p>{item.name}</p>
      <p>rub:{a}</p>
      <p>usd:{item.usd}</p>

      {isFavorite ? (
        <HeartSolid
          onClick={() => handleRemoveFromFavorites(item.id)}
          className="w-8 ml-2 cursor-pointer"
        />
      ) : (
        <Heart className="w-8 ml-2 cursor-pointer" onClick={() => handleAddToFavorites(item.id)} />
      )}
    </div>
  );
}

export default ItemCard;
