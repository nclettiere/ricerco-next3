import { FunctionComponent, ReactComponentElement } from "react";

export default interface ISidebarProps {
  content: ReactComponentElement<any> | FunctionComponent;
  title: string;
  position: 'left' | 'right' | 'bottom';
  collapsed?: boolean;
}
