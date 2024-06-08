import { useState } from 'react';
import { ThemeProvider } from '@/store/theme-provider';
import Board from '@/components/Board';
import { SideBar } from '@/components/SideBar';

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="kanban-theme">
      <div className="relative flex min-h-screen overflow-hidden">
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <Board showSideBar={showSideBar} />
      </div>
    </ThemeProvider>
  );
}

export default App;
