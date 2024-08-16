import useDraggable from "@/hooks/useDraggable";
import React from "react";

interface WindowProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  ref?: React.Ref<HTMLDivElement>;
  draggable?: boolean;
}

export const Window = React.forwardRef(
  (
    { id, children, title, draggable = true, ...props }: WindowProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    if (draggable) useDraggable(id);
    return (
      <div
        id={id}
        {...props}
        className={`window ${
          !draggable
            ? "z-50 w-full h-full"
            : "draggable max-w-screen-md w-[inherit]"
        }`}
        ref={forwardedRef}
      >
        <div
          id={id + "_header"}
          {...props}
          className={`windowHeader ${props.className ?? ""}`}
        >
          {title}
        </div>
        <div
          className={`windowContainer ${props.className ?? ""} ${
            !draggable ? "w-full" : ""
          }`}
        >
          {children}
        </div>
      </div>
    );
  }
);
