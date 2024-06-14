import type { Task } from '@/lib/types';

type Props = {
  task: Task;
};

export function TaskCard({ task }: Props) {
  const totalSubtasks = task.subtasks.length;
  const numOfCompletedSubtasks = task.subtasks.reduce((acc, substask) => {
    return substask.isCompleted ? acc + 1 : acc;
  }, 0);
  return (
    <article className="space-y-2 rounded-lg bg-white px-4 py-6 shadow-[0_4px_6px_rgba(54,78,126,0.1)]">
      <h3 className="line-clamp-3 text-base text-card-header">{task.title}</h3>
      <p className="text-xs">{`${numOfCompletedSubtasks} of ${totalSubtasks} subtasks`}</p>
    </article>
  );
}
