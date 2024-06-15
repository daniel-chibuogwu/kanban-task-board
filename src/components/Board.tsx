import { SideBarState } from '@/lib/types';

import DATA from '../../dev-data/data.json';

import BoardHeader from '@/components/board-ui/BoardHeader';
import BoardColumns from '@/components/board-ui/BoardColumns';
import BoardEmptyView from '@/components/board-ui/BoardEmptyView';

type Props = {
  sideBarState: SideBarState;
};

export default function Board({ sideBarState }: Props) {
  const hasColumns = DATA.boards[3]?.columns?.length > 0;

  return (
    <main className="relative z-20 flex h-svh flex-1 flex-col overflow-auto bg-background">
      <BoardHeader sideBarState={sideBarState} />
      {hasColumns ? <BoardColumns /> : <BoardEmptyView />}
    </main>
  );
}
