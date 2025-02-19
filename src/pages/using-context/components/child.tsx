import GrandChild from './grand-child';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function Child({ message, setMessage }: Props) {
  return (
    <div className="flex justify-center flex-1 p-5 border-4 rounded-full">
      <GrandChild message={message} setMessage={setMessage} />
    </div>
  );
}

export default Child;
