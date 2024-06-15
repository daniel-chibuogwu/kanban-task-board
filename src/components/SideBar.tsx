import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { SideBarState } from '@/lib/types';
import { sideBarStateStorageKey } from '@/lib/contants';

import { useTheme } from '@/store/theme-provider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/Button';
import BoardIcon from '@/components/Icons/BoardIcon';
import ShowSideBarIcon from '@/assets/icon-show-sidebar.svg';
import HideSideBarIcon from '@/assets/icon-hide-sidebar.svg';
import LightThemeIcon from '@/assets/icon-light-theme.svg';
import DarkThemeIcon from '@/assets/icon-dark-theme.svg';
import { Logo } from '@/components/Icons/Logo';

type Props = {
  sideBarState: SideBarState;
  setSideBarState: React.Dispatch<React.SetStateAction<SideBarState>>;
};

const boards = [
  { title: 'Platform Launch' },
  { title: 'Marketing Plan' },
  { title: 'Roadmap' },
  { title: '+ Create New Board' },
];

export function SideBar({ sideBarState, setSideBarState }: Props) {
  const [currentBoard, setCurrentBoard] = useState(boards[0].title);
  const { theme, setTheme } = useTheme();

  // Persisting the Side bar state after refresh
  useEffect(() => {
    localStorage.setItem(sideBarStateStorageKey, sideBarState);
  }, [sideBarState]);

  const sideBarIsOpen = sideBarState === 'open';

  return (
    <aside
      className={cn(
        'h-screen w-[300px] overflow-auto border-r border-border bg-secondary py-8 pr-6 transition-[margin] duration-700 ease-in-out',
        { '-ml-[300px]': !sideBarIsOpen },
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.65, 0.05, 0.36, 1)' }}
    >
      {/* div containing the logo, nav and toggle */}
      <div
        className={cn(
          'grid h-full grid-rows-[repeat(2,_auto)_1fr] transition-opacity duration-700 ease-in-out',
          { 'opacity-0': !sideBarIsOpen },
        )}
      >
        <div className="ms-8">
          <Logo theme={theme} />
        </div>

        {/* Nav links */}
        <nav className="mt-14">
          <p role="heading" className="ms-8 text-xs tracking-[2.5px]">
            ALL BOARDS (3)
          </p>
          <ul className="mt-5 text-base">
            {boards.map(board => (
              <li key={board.title} className="last:text-primary">
                <Button
                  className={cn(
                    'flex w-full items-center justify-start gap-4 rounded-e-full rounded-s-none bg-transparent py-3.5 pl-8 text-inherit hover:bg-foreground/10 ',
                    {
                      'bg-primary text-white hover:bg-primary':
                        board.title === currentBoard,
                    },
                  )}
                  rippleColor={
                    board.title === currentBoard
                      ? 'bg-primary-hover/40'
                      : 'bg-foreground/40'
                  }
                  onClick={() => setCurrentBoard(board.title)}
                >
                  <BoardIcon className="fill-current" />
                  {board.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Hide side bar and Toggle light/dark mode */}
        <div className="ms-6 space-y-2 self-end">
          <div className="flex items-center justify-center gap-6 rounded-lg bg-background py-3.5">
            <span aria-label="Switch to light mode" title="Light Mode">
              <LightThemeIcon />
            </span>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={() =>
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }
            />
            <span aria-label="Switch to dark mode" title="Dark Mode">
              <DarkThemeIcon />
            </span>
          </div>
          <button
            className="flex w-full items-center gap-3.5 py-3.5 pl-2 transition-opacity duration-200 hover:opacity-80"
            onClick={() => setSideBarState('close')}
            aria-label="Hide Sidebar"
            title="Hide Sidebar"
          >
            <HideSideBarIcon />
            Hide Sidebar
          </button>
        </div>
      </div>
      {/* Fixed Show Side Nav button */}
      <Button
        className={cn(
          'fixed bottom-8 left-0 z-50 inline-flex rounded-s-none pl-[18px] pr-[22px] transition-all duration-500',
          { '-translate-x-full opacity-0': sideBarIsOpen },
        )}
        aria-label="Show Sidebar"
        title="Show Sidebar"
        onClick={() => setSideBarState('open')}
      >
        <ShowSideBarIcon />
      </Button>
    </aside>
  );
}
