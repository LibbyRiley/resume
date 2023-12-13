import { useEffect } from "react";

const RainbowText: React.FC<{ text: string }> = ({ text }) => {
  useEffect(() => {
    // This code will now run on the client side
    const rainbowText = document.querySelector(".animate-rainbow");
    if (rainbowText) {
      const textContent = rainbowText.textContent || "";
      const letters = textContent.split("");
      const colourfulText = letters
        .map(
          (letter, index) =>
            `<span class="rainbow-letter" style="animation-delay: ${
              index * 0.1
            }s">${letter}</span>`
        )
        .join("");
      rainbowText.innerHTML = colourfulText;
    }
  }, []); // Empty dependency array ensures it runs once after initial render on the client side

  return (
    <h1 className="text-4xl font-bold cursor-pointer animate-rainbow">
      {text}
    </h1>
  );
};

export default RainbowText;
