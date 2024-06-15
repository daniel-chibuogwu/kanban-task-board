import type { Task } from '@/lib/types';
import { cn } from '@/lib/utils';

type Props = {
  task: Task;
  columnNumber: number;
};

export function TaskCard({ task, columnNumber }: Props) {
  const totalSubtasks = task.subtasks.length;
  const numOfCompletedSubtasks = task.subtasks.reduce((acc, substask) => {
    return substask.isCompleted ? acc + 1 : acc;
  }, 0);
  return (
    <article
      role="button"
      tabIndex={0}
      className="group/underline space-y-2 rounded-lg bg-secondary px-4 py-6 shadow-[0_4px_6px_rgba(54,78,126,0.1)] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:shadow-[0_4px_6px_rgba(54,8,126,0.1)]"
    >
      <h3 className="line-clamp-3 text-base text-card-header">
        <span
          className={cn(
            'bg-gradient-to-r from-60% to-secondary bg-[length:0%_3px] bg-[left_top_102%] bg-no-repeat transition-[background-size] duration-500 ease-in-out group-hover/underline:bg-[length:100%_3px]',
            { 'from-column-1': columnNumber === 1 },
            { 'from-column-2': columnNumber === 2 },
            { 'from-column-3': columnNumber === 3 },
          )}
        >
          {task.title}
        </span>
      </h3>
      <p className="text-xs">{`${numOfCompletedSubtasks} of ${totalSubtasks} subtasks`}</p>
    </article>
  );
}
