import { RefObject, useLayoutEffect, useState } from "react";
import { useWidth } from "./useWidth";

type ContainerQuery = { className: string; min?: number; max?: number }[];

export function useContainerQuery(
  ref: RefObject<HTMLElement>,
  queries: ContainerQuery
) {
  const [className, setClassName] = useState("");
  const width = useWidth(ref);
  useLayoutEffect(() => {
    const matchingQuery = queries.find(
      ({ min, max }) => (!min || min <= width) && (!max || max > width)
    );

    setClassName(matchingQuery ? matchingQuery.className : "");
  }, [width, queries]);

  return className;
}
