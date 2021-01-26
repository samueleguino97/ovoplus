import { useState } from "react";

export function useLoadingState(initialState = false) {
  const [loading, setLoading] = useState<boolean>(initialState);
  function toggleLoading() {
    setLoading(!loading);
  }
  return { loading, toggleLoading };
}
