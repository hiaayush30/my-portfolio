"use client";
import { useState, useEffect } from "react";

const greetings = ["hola", "konichiwa", "hello", "namaste","bonjour"];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Blinking cursor logic
  useEffect(() => {
    if (subIndex === greetings[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500); // Wait before erasing
      return;
    }

    if (subIndex === 0 && reverse) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReverse(false);
      setIndex((prev) => (prev + 1) % greetings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Speed of typing vs erasing

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span>
      {`${greetings[index].substring(0, subIndex)}`}
      <span className="animate-caret-blink font-light">|</span>
    </span>
  );
}