import type Item from './redux/types/Item';

export const loadItems = async (): Promise<Item[]> => {
  const response = await fetch('https://65bf60ef25a83926ab94da61.mockapi.io/item/item');
  if (response.ok) {
    return response.json();
  }
  const data: { message: string } = await response.json();
  throw new Error(data.message);
};


export const saveToFavorites = async (id: number, newCount: number): Promise<void> => {
  const response = await fetch(`https://65bf60ef25a83926ab94da61.mockapi.io/item/item/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ count: newCount }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (response.ok) {
    return;
  }
  const data: { message: string } = await response.json();
  throw new Error(data.message);
};

export const removeFromFavorites = async (id: Item['id'], newCount: number): Promise<void> => {
  const response = await fetch(`https://65bf60ef25a83926ab94da61.mockapi.io/item/item/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ count: newCount }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (response.ok) {
    return;
  }
  const data: { message: string } = await response.json();
  throw new Error(data.message);
};
