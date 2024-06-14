// import {type Color} from "../ldld/..d."
export type SideBarState = 'open' | 'close';

export type NavBtnProps = {
  sideBarState: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};
