import { tm } from '@/utils/tw-merge';
import Card from './card';
import { type ColorMoodItem } from '../types';

interface SearchedListProps {
  list: ColorMoodItem[];
}

function SearchedList({ list }: SearchedListProps) {
  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      <ul className={tm('flex flex-col gap-12')}>
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;
