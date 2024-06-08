import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/Button';
import BoardIcon from '@/components/Icons/BoardIcon';
import ShowSideBarIcon from '@/assets/icon-show-sidebar.svg';
import HideSideBarIcon from '@/assets/icon-hide-sidebar.svg';
import LightThemeIcon from '@/assets/icon-light-theme.svg';
import DarkThemeIcon from '@/assets/icon-dark-theme.svg';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useTheme } from '@/store/theme-provider';
import { Logo } from '@/components/Icons/Logo';

type Props = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const boards = [
  { title: 'Platform Launch' },
  { title: 'Marketing Plan' },
  { title: 'Roadmap' },
  { title: '+ Create New Board' },
];

export function SideBar({ showSideBar, setShowSideBar }: Props) {
  const [currentBoard, setCurrentBoard] = useState(boards[0].title);
  const { theme, setTheme } = useTheme();
  return (
    <aside
      className={cn(
        'h-screen w-[300px] border-r border-border bg-secondary py-8 pr-6 transition-[margin] duration-700 ease-in-out',
        { '-ml-[300px]': !showSideBar },
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.65, 0.05, 0.36, 1)' }}
    >
      {/* div containing the logo, nav and toggle */}
      <div
        className={cn(
          'grid h-full grid-rows-[repeat(2,_auto)_1fr] transition-opacity duration-700 ease-in-out',
          { 'opacity-0': !showSideBar },
        )}
      >
        <div className="ms-8">
          <Logo theme={theme} />
        </div>

        {/* Nav links */}
        <div className="mt-14">
          <p className="ms-8 text-xs tracking-[2.5px]">ALL BOARDS (3)</p>
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
        </div>
        {/* Hide side bar and Toggle light/dark mode */}
        <div className="ms-6 space-y-2 self-end">
          <div className="flex items-center justify-center gap-6 rounded-lg bg-background py-3.5">
            <LightThemeIcon />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={() =>
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }
            />
            <DarkThemeIcon />
          </div>
          <button
            className="flex w-full items-center gap-3.5 py-3.5 pl-2"
            onClick={() => setShowSideBar(false)}
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
          { '-translate-x-full opacity-0': showSideBar },
        )}
        aria-label="Show Sidebar"
        title="Show Sidebar"
        onClick={() => setShowSideBar(true)}
      >
        <ShowSideBarIcon />
      </Button>
    </aside>
  );
}
