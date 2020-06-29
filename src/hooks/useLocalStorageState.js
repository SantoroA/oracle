import { useState, useEffect } from "react";

export default function UseLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.getItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
