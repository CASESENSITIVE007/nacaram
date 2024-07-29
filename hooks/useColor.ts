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
  const [accent, setAccent] = useState("");
  const [header, setHeader] = useState("");
  const [buyButton, setBuyButton] = useState("");
  const [addToButton, setAddToButton] = useState("");

  useEffect(() => {
    setPrimary(getInitialValue("--primary"));
    setSecondary(getInitialValue("--secondary"));
    setBackground(getInitialValue("--background"));
    setForeground(getInitialValue("--foreground"));
    setCard(getInitialValue("--card"));
    setCardForeground(getInitialValue("--card-foreground"));
    setAccent(getInitialValue("--accent"));
    setHeader(getInitialValue("--header"));
    setBuyButton(getInitialValue("--buy-button"));
    setAddToButton(getInitialValue("--add-to-button"));
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

  const handleAccentChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--accent", e.target.value);
    setAccent(e.target.value);
  };

  const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--header", e.target.value);
    setHeader(e.target.value);
  };

  const handleBuyButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--buy-button", e.target.value);
    setBuyButton(e.target.value);
  };

  const handleAddToButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty(
      "--add-to-button",
      e.target.value,
    );
    setAddToButton(e.target.value);
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
    accent,
    handleAccentChange,
    header,
    handleHeaderChange,
    buyButton,
    handleBuyButtonChange,
    addToButton,
    handleAddToButtonChange,
  };
};

export default useColor;
