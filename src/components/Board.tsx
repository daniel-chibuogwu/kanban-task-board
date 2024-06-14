import { cn } from '@/lib/utils';
import { SideBarState } from '@/lib/types';

import DATA from '../../dev-data/data.json';
import { Button } from '@/components/ui/Button';
import BoardHeader from '@/components/board-ui/BoardHeader';
import { TaskCard } from '@/components/board-ui/TaskCard';

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
    <div className="grid auto-cols-[280px] grid-flow-col gap-x-6 px-6 pb-40">
      {DATA.boards[0].columns.map((col, i) => (
        <section key={col.name}>
          <h2
            className={cn(
              'inline-flex items-center py-6 text-xs uppercase tracking-[2.4px] before:mr-3 before:block before:size-[15px] before:rounded-full',
              {
                'before:bg-column-1': i === 0,
              },
              {
                'before:bg-column-2': i === 1,
              },
              {
                'before:bg-column-3': i === 2,
              },
            )}
          >
            {col.name} ({col.tasks.length})
          </h2>
          <ul className="space-y-4">
            {col.tasks.map(task => (
              <li key={task.title}>
                <TaskCard task={task} columnNumber={i + 1} />
              </li>
            ))}
          </ul>
        </section>
      ))}
      {/* CREATE NEW COLUMN */}
      <section className="flex flex-col">
        <h2 aria-hidden="true" className="invisible py-6 text-xs">
          Add new column
        </h2>
        <div className="flex flex-1 rounded-lg bg-gradient-to-b from-[rgba(233,239,250,1)] to-[rgba(233,239,250,0.5)] ">
          <button className="text-2xl basis-full">+ New Column</button>
        </div>
      </section>
    </div>
  );
}
