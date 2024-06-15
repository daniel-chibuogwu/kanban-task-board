import { Button } from '@/components/ui/Button';

export default function BoardEmptyView() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center space-y-8 px-6 pt-6">
      <p className="text-lg text-foreground">
        This board is empty. Create a new column to get started.
      </p>
      <Button>+ Add New Column</Button>
    </main>
  );
}
