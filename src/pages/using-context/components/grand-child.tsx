interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function GrandChild({ message, setMessage }: Props) {
  return (
    <div className="flex flex-col justify-center flex-1 gap-3 p-5 border-4 rounded-full text-center">
      {message}
      <button
        type="button"
        className="bg-react text-white p-2 text-sm rounded-full"
        onClick={() => {
          setMessage('반갑습니다. Mr. 페이지!');
        }}
      >
        Page 컴포넌트에게 인사하기
      </button>
    </div>
  );
}

export default GrandChild;
