import { Button } from '@/components/ui/Button';
import BoardHeader from '@/components/BoardHeader';

type Props = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Board({ showSideBar, setShowSideBar }: Props) {
  return (
    <main className="relative z-20 flex h-svh flex-1 flex-col overflow-auto bg-background">
      <BoardHeader showSideBar={showSideBar} />
      <div className="grid flex-1 place-content-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-lg text-foreground">
            This board is empty. Create a new column to get started.
          </p>
          <Button className="mt-8" onClick={() => setShowSideBar(!showSideBar)}>
            + Add New Column
          </Button>
        </div>
      </div>
    </main>
  );
}
