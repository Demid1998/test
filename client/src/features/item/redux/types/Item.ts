type Item = {
  id: number;
  name: string;
  rub: string;
  usd: string;
  count: number;
};

export type ItemWithoutId = Omit<Item, 'id'>;

export default Item;
