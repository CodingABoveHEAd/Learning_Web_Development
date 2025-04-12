import { signal } from "@preact/signals-react";

export const count = signal(20);
export const double = signal(20);

export default function Counter() {
  return (
    <>
      <hr />
      <p>Another File</p>
      <div>{count}</div>
      <div>{double}</div>
    </>
  );
}
