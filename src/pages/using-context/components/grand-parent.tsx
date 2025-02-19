import Parent from './parent';

function GrandParent() {
  return (
    <div className="flex justify-center flex-1 p-5 border-4 rounded-full">
      <Parent />
    </div>
  );
}

export default GrandParent;
