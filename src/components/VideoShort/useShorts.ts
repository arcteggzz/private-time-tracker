import { shortsList } from "./shortsList";
import { useState } from "react";

const fakeShorts = Array.from(shortsList).map((short, i) => ({
  id: `short-${i}`,
  url: short, // placeholder video
}));

export const useShorts = () => {
  const [shorts, setShorts] = useState(fakeShorts);
  const [loading, setLoading] = useState(false);

  const fetchNext = async () => {
    setLoading(true);
    // simulate network delay
    await new Promise((res) => setTimeout(res, 1000));
    const newShorts = Array.from(shortsList).map((short, i) => ({
      id: `short-${shorts.length + i}`,
      url: short,
    }));
    setShorts((prev) => [...prev, ...newShorts]);
    setLoading(false);
  };

  return {
    data: shorts,
    fetchNext,
    loading,
  };
};
