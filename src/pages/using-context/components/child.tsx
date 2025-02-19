import GrandChild from './grand-child';

function Child() {
  return (
    <div className="flex justify-center flex-1 p-5 border-4 rounded-full">
      <GrandChild />
    </div>
  );
}

export default Child;
