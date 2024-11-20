import { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const fullText = "Start typing and see your speed in action!"

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust speed by changing the interval time (100ms)
    return () => clearInterval(interval);
  }, []);

  return <div>{text}</div>;
};

export default TypingAnimation;
