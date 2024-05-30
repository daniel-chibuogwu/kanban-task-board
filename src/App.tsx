import { useState } from 'react';
import Board from '@/components/Board';
import LogoDark from '@/assets/logo-dark.svg';
import { cn } from './lib/utils';

function App() {
  const [showSideNav, setShowSideNav] = useState(true);

  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <nav
        className={cn(
          'h-screen w-[300px] border-r border-border bg-white pl-8 pr-6 pt-8 transition-[margin] duration-700 ease-in-out',
          { 'ml-[-300px]': !showSideNav },
        )}
      >
        <div
          className={cn(
            { 'opacity-0': !showSideNav },
            'transition-opacity duration-300 ease-in-out',
          )}
        >
          <LogoDark />
        </div>
      </nav>

      <Board showNav={showSideNav} setShowNav={setShowSideNav} />
    </div>
  );
}

export default App;
