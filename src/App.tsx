import Board from '@/components/Board';

function App() {
  return (
    <div className="flex min-h-screen">
      <nav className="h-svh w-[300px] bg-white"></nav>
      <div className="grow">
        <Board />
      </div>
    </div>
  );
}

export default App;
