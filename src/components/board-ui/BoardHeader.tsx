import { Logo } from '@/components/Icons/Logo';
import KebabMenuIcon from '@/assets/icon-vertical-ellipsis.svg';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/store/theme-provider';
import { SideBarState } from '@/lib/types';

type Props = {
  sideBarState: SideBarState;
};

export default function BoardHeader({ sideBarState }: Props) {
  const { theme } = useTheme();
  return (
    <header className="sticky inset-x-0 top-0 flex h-24 shrink-0 items-center border-b border-b-border bg-secondary pl-6 pr-8">
      <div
        className={cn(
          'mr-8 flex h-full items-center border-r border-border pr-8',
          { hidden: sideBarState === 'open' },
        )}
      >
        <Logo theme={theme} />
      </div>

      <h1 className="text-2xl font-bold text-card-header">Platform Launch</h1>
      <Button className="ml-auto mr-6" disabled={false}>
        + Add New Column
      </Button>
      <KebabMenuIcon />
    </header>
  );
}
