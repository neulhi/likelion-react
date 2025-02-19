import Parent from './parent';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function GrandParent({ message, setMessage }: Props) {
  return (
    <div className="flex justify-center flex-1 p-5 border-4 rounded-full">
      <Parent message={message} setMessage={setMessage} />
    </div>
  );
}

export default GrandParent;
