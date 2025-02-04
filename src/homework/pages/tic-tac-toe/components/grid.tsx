import { tm } from '@/utils/tw-merge';
import Cell from './cell';

function Grid() {
  return (
    <div className={tm('grid gird-row-3 grid-cols-3 gap-1')}>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}

export default Grid;
