import { Button } from '@/components/ui/Button';
import LogoDark from '@/assets/logo-dark.svg';
import KebabMenuIcon from '@/assets/icon-vertical-ellipsis.svg';

export default function Board() {
  return (
    <main className="relative z-10 grid h-svh bg-background">
      {/* BOARD HEADER */}
      <header className="fixed inset-x-0 top-0 flex h-24 items-center border-b border-b-border bg-white pl-6 pr-8">
        <div className="mr-8 flex h-full items-center border-r border-border pr-8">
          <LogoDark />
        </div>
        <h1 className="text-card-header text-xl font-bold">Platform Launch</h1>
        <Button className="ml-auto mr-6" disabled={true}>
          + Add New Column
        </Button>
        <KebabMenuIcon />
      </header>
      {/* BOARD BODY */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-lg font-bold text-foreground">
          This board is empty. Create a new column to get started.
        </p>
        <Button className="mt-7">+ Add New Column</Button>
      </div>
    </main>
  );
}
