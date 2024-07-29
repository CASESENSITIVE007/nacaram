import { ChangeEvent, useEffect, useState } from "react";

function getInitialValue(variableName: any) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

const useColor = () => {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [background, setBackground] = useState("");
  const [foreground, setForeground] = useState("");
  const [card, setCard] = useState("");
  const [cardForeground, setCardForeground] = useState("");

  useEffect(() => {
    setPrimary(getInitialValue("--primary"));
    setSecondary(getInitialValue("--secondary"));
    setBackground(getInitialValue("--background"));
    setForeground(getInitialValue("--foreground"));
    setCard(getInitialValue("--card"));
    setCardForeground(getInitialValue("--card-foreground"));
  }, []);

  const handlePrimaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrimary(e.target.value);
    document.documentElement.style.setProperty("--primary", e.target.value);
  };

  const handleSecondaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondary(e.target.value);
    document.documentElement.style.setProperty("--secondary", e.target.value);
  };

  const handleBackgroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--background", e.target.value);
    setBackground(e.target.value);
  };

  const handleForegroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--foreground", e.target.value);
    setForeground(e.target.value);
  };

  const handleCardBackroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--card", e.target.value);
    setCard(e.target.value);
  };

  const handleCardForegroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty(
      "--card-foreground",
      e.target.value,
    );
    setCardForeground(e.target.value);
  };

  return {
    primary,
    handlePrimaryChange,
    secondary,
    handleSecondaryChange,
    background,
    handleForegroundChange,
    foreground,
    handleBackgroundChange,
    card,
    handleCardBackroundChange,
    cardForeground,
    handleCardForegroundChange,
  };
};

export default useColor;
