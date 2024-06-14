import { Button } from '@/components/ui/Button';
import BoardHeader from '@/components/BoardHeader';
import DATA from '../../dev-data/data.json';
import { SideBarState } from '@/lib/types';

type Props = {
  sideBarState: SideBarState;
};

export default function Board({ sideBarState }: Props) {
  const hasColumns = DATA.boards[0]?.columns?.length > 0;

  return (
    <main className="relative z-20 flex h-svh flex-1 flex-col overflow-auto bg-background">
      <BoardHeader sideBarState={sideBarState} />
      {hasColumns ? <BoardColumns /> : <BoardEmptyView />}
    </main>
  );
}

function BoardEmptyView() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-8 px-6 pt-6">
      <p className="text-lg text-foreground">
        This board is empty. Create a new column to get started.
      </p>
      <Button>+ Add New Column</Button>
    </div>
  );
}

function BoardColumns() {
  return (
    <div className="px-6 pt-6">
      {DATA.boards[0].columns.map(item => (
        <p key={item.name}>{item.name}</p>
      ))}{' '}
    </div>
  );
}
