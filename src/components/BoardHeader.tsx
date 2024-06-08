import LogoDark from '@/assets/logo-dark.svg';
import KebabMenuIcon from '@/assets/icon-vertical-ellipsis.svg';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Props = {
  showSideBar: boolean;
};

export default function BoardHeader({ showSideBar }: Props) {
  return (
    <header className="sticky inset-x-0 top-0 flex h-24 shrink-0 items-center border-b border-b-border bg-white pl-6 pr-8">
      <div
        className={cn(
          'mr-8 flex h-full items-center border-r border-border pr-8',
          { hidden: showSideBar },
        )}
      >
        <LogoDark />
      </div>

      <h1 className="text-xl font-bold text-card-header">Platform Launch</h1>
      <Button className="ml-auto mr-6" disabled={true}>
        + Add New Column
      </Button>
      <KebabMenuIcon />
    </header>
  );
}
