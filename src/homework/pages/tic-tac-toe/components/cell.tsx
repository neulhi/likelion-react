import { tm } from '@/utils/tw-merge';

function Cell() {
  return (
    <button type="button" className={tm('size-10 border rounded-md')}>
      셀
    </button>
  );
}

export default Cell;
