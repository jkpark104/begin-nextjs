"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: VoidFunction;
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Products Error</h1>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
