import { cn } from '@/lib/utils';
import BoardIcon from '@/components/Icons/BoardIcon';
import LogoDark from '@/assets/logo-dark.svg';
import HideSideBarIcon from '@/assets/icon-hide-sidebar.svg';
import LightThemeIcon from '@/assets/icon-light-theme.svg';
import DarkThemeIcon from '@/assets/icon-dark-theme.svg';
import { Switch } from '@/components/ui/switch';

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

export function Navigation({ showSideBar, setShowSideBar }: Props) {
  return (
    <aside
      className={cn(
        'h-screen w-[300px] border-r border-border bg-white py-8 pr-6 transition-[margin] duration-700 ease-in-out',
        { 'ml-[-300px]': !showSideBar },
      )}
    >
      {/* div containing the logo, nav and toggle */}
      <div
        className={cn(
          { 'opacity-0': !showSideBar },
          'grid h-full grid-rows-[repeat(2,_auto)_1fr] transition-opacity duration-300 ease-in-out',
        )}
      >
        <div className="ms-8">
          <LogoDark />
        </div>

        {/* Nav links */}
        <div className="mt-14">
          <p className="ms-8 text-xs tracking-[2.5px]">ALL BOARDS (3)</p>
          <ul className="mt-5 text-base">
            {boards.map(board => (
              <li key={board.title} className="last:text-primary">
                <button className="flex w-full items-center gap-4 rounded-e-full py-3.5 pl-8 focus:bg-primary focus:text-white">
                  <BoardIcon className="fill-current" />
                  {board.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Hide side bar and Toggle light/dark mode */}
        <div className="ms-6 space-y-2 self-end">
          <div className="flex items-center justify-center gap-6 rounded-lg bg-background py-3.5">
            <LightThemeIcon />
            <Switch />
            <DarkThemeIcon />
          </div>
          <button
            className="flex w-full items-center gap-3.5 py-3.5 pl-2"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <HideSideBarIcon />
            Hide Sidebar
          </button>
        </div>
      </div>
    </aside>
  );
}
