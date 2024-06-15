import { cn } from '@/lib/utils';
import DATA from '../../../dev-data/data.json';
import { TaskCard } from '@/components/board-ui/TaskCard';

export default function BoardColumns() {
  return (
    <div className="grid flex-1 auto-cols-[280px] grid-flow-col gap-x-6 px-6 pb-24">
      {DATA.boards[0]?.columns.map((col, i) => (
        <section key={col.name}>
          <h2
            className={cn(
              'inline-flex w-full items-center bg-background py-6 text-xs uppercase tracking-[2.4px] before:mr-3 before:block before:size-[15px] before:rounded-full',
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
        <div className="flex flex-1 rounded-lg bg-gradient-to-b from-[rgba(233,239,250,1)] to-[rgba(233,239,250,0.5)] dark:from-[rgba(43,44,55,0.25)] dark:to-[rgba(43,44,55,0.13)]">
          <button className="text-2xl basis-full">+ New Column</button>
        </div>
      </section>
    </div>
  );
}
