import { useState } from 'react';
import type { SideBarState } from '@/lib/types';
import { sideBarStateStorageKey } from '@/lib/contants';

import { ThemeProvider } from '@/store/theme-provider';
import Board from '@/components/Board';
import { SideBar } from '@/components/SideBar';

function App() {
  const [sideBarState, setSideBarState] = useState<SideBarState>(() => {
    const persistedSidebarState = localStorage.getItem(
      sideBarStateStorageKey,
    ) as SideBarState;
    return persistedSidebarState || 'open';
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="kanban-theme">
      <div className="relative flex min-h-screen overflow-hidden">
        <SideBar
          sideBarState={sideBarState}
          setSideBarState={setSideBarState}
        />
        <Board sideBarState={sideBarState} />
      </div>
    </ThemeProvider>
  );
}

export default App;
