import LogoDark from '@/assets/logo-dark.svg';
import KebabMenuIcon from '@/assets/icon-vertical-ellipsis.svg';
import { Button } from '@/components/ui/Button';
import { type NavBtnProps } from '@/lib/types';

export default function BoardHeader({ showNav, setShowNav }: NavBtnProps) {
  return (
    <header className="sticky inset-x-0 top-0 z-10 flex h-24 items-center border-b border-b-border bg-white pl-6 pr-8">
      {!showNav && (
        <div className="mr-8 flex h-full items-center border-r border-border pr-8">
          <LogoDark />
        </div>
      )}
      <h1 className="text-card-header text-xl font-bold">Platform Launch</h1>
      <Button
        className="ml-auto mr-6"
        disabled={true}
        onClick={() => setShowNav(!showNav)}
      >
        + Add New Column
      </Button>
      <KebabMenuIcon />
    </header>
  );
}
