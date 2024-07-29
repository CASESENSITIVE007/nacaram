"use client";

import {
  ChevronDown,
  CopyCheckIcon,
  CopyIcon,
  PaintBucketIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useColor from "@/hooks/useColor";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ColorSelector = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `--primary : ${primary}\n--secondary : ${secondary}\n--accent : ${accent}\n--header : ${header}\n--background : ${background}\n--foreground : ${foreground}\n--card : ${card}\n--cardForeground : ${cardForeground}`,
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const {
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
    addToButton,
  } = useColor();

  return (
    <Sheet>
      <SheetTrigger
        aria-describedby="Choose Color"
        className="group flex items-center underline-offset-4 hover:underline"
      >
        <PaintBucketIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-slate-50 group-hover:text-slate-200"
        />
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="flex w-full flex-col sm:max-w-lg"
      >
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Colors </SheetTitle>
        </SheetHeader>
        <ScrollArea>
          <div>
            <span className="text-sm">
              Primary (Elements background like buttons etc.): {primary}
            </span>
            <Input
              type="color"
              value={primary}
              onChange={handlePrimaryChange}
            />
          </div>
          <div>
            <span className="text-sm">
              Secondary (Not used much): {secondary}
            </span>
            <Input
              type="color"
              onChange={handleSecondaryChange}
              value={secondary}
            />
          </div>
          <div>
            <span className="text-sm">
              Accent (That about card on home page its background): {accent}
            </span>
            <Input type="color" onChange={handleAccentChange} value={accent} />
          </div>
          <div>
            <span className="text-sm">Header & Footer: {header}</span>
            <Input type="color" onChange={handleHeaderChange} value={header} />
          </div>

          <div>
            <span className="text-sm">Background : {background}</span>
            <Input
              type="color"
              onChange={handleBackgroundChange}
              value={background}
            />
          </div>
          <div>
            <span className="text-sm">Foreground (Text): {foreground}</span>
            <Input
              type="color"
              onChange={handleForegroundChange}
              value={foreground}
            />
          </div>
          <div>
            <span className="text-sm">Card (Background): {card}</span>
            <Input
              type="color"
              onChange={handleCardBackroundChange}
              value={card}
            />
          </div>
          <div>
            <span className="text-sm">
              Card Foreground (Text Inside Card): {cardForeground}
            </span>
            <Input
              type="color"
              onChange={handleCardForegroundChange}
              value={cardForeground}
            />
          </div>
        </ScrollArea>

        <Accordion type="single" collapsible className="mr-4">
          <AccordionItem value="colors">
            <AccordionTrigger className="w-full">Colors</AccordionTrigger>
            <AccordionContent className="relative rounded-md bg-slate-800 p-4 font-mono text-slate-100">
              <Button className="absolute right-2 top-2" onClick={handleCopy}>
                {copied ? (
                  <CopyCheckIcon className="h-4 w-4 text-slate-100" />
                ) : (
                  <CopyIcon className="h-4 w-4 text-slate-100" />
                )}
              </Button>
              <p>--primary : {primary}</p>
              <p>--secondary : {secondary}</p>
              <p>--accent : {accent}</p>
              <p>--header : {header}</p>
              <p>--background : {background}</p>
              <p>--foreground : {foreground}</p>
              <p>--card : {card}</p>
              <p>--cardForeground : {cardForeground}</p>
              <p>--buyButton : {buyButton}</p>
              <p>--addToButton : {addToButton}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default ColorSelector;
