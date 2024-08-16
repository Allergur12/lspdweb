import { useEffect, useState } from "react";

export function useAutoToggle(delay: number) {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBool(true);
    }, delay);
  }, []);

  return bool;
}
