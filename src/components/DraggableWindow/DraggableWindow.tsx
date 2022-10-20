import { ReactNode, useRef } from "react";
import Draggable from "react-draggable";

interface DraggableWindowProps {
  title: string;
  children?: ReactNode;
}

export default function DraggableWindow({
  title,
  children,
}: DraggableWindowProps) {
  const windowContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={windowContainerRef} handle=".window-title-bar">
      <div
        className="w-80 h-80 border border-sky-500 p-2 bg-white relative z-0 hover:z-50"
        ref={windowContainerRef}
      >
        <div className="window-title-bar flex justify-between items-center">
          <span className="">{title}</span>
          <div className="flex gap-2">
            <button className="w-5">_</button>
            <button className="w-5">X</button>
          </div>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </Draggable>
  );
}
