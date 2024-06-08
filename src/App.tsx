import { useState } from 'react';
import Board from '@/components/Board';
import { Navigation } from '@/components/Navigation';

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <Navigation showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Board showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
}

export default App;
