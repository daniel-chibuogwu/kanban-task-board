import { Button } from '@/components/ui/Button';
import BoardHeader from '@/components/BoardHeader';
import { type NavBtnProps } from '@/lib/types';

export default function Board({ showNav, setShowNav }: NavBtnProps) {
  return (
    <main className="relative z-20 h-svh overflow-auto bg-background">
      <BoardHeader showNav={showNav} setShowNav={setShowNav} />
      <div className=" grid h-full place-content-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-lg font-bold text-foreground">
            This board is empty. Create a new column to get started.
          </p>
          <Button className="mt-6" onClick={() => setShowNav(!showNav)}>
            + Add New Column
          </Button>
        </div>
      </div>
    </main>
  );
}
