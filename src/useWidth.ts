import { RefObject, useState, useLayoutEffect } from "react";

export function useWidth(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries[entries.length - 1];
      setWidth(
        (entry.contentBoxSize && entry.contentBoxSize.inlineSize) ||
          entry.contentRect.width
      );
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return width;
}
