import { useEffect, useRef, useState } from "react";
import { CalculatorWrapper, CalculatorTextarea } from "./calculator.styles";
import { CalculatorProps } from "./calcalator.types";
import { CalculatorBody } from "./calculator-body";
import { getNewInput, getCleanedText } from "./util";

export const Calculator = ({ total, onCalculate }: CalculatorProps) => {
  const [input, setInput] = useState<string>("0");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // autoFocus
  useEffect(() => {
    const handleKeyPress = () => {
      if (textareaRef.current && document.activeElement) {
        if (!document.activeElement.isEqualNode(textareaRef.current)) {
          textareaRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // autoResize
  const autoResizeTextarea = () => {
    let textarea = document.querySelector(
      ".autoTextarea"
    ) as HTMLTextAreaElement;

    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight;
      textarea.style.height = `${height + 8}px`;
    }
  };

  // 버튼으로 동작 시
  const onClickButton = (curr: string) => {
    autoResizeTextarea();
    if (curr === "AC") {
      return setInput("0");
    }
    if (curr === "C") {
      return setInput(input.length > 1 ? input.slice(0, -1) : "0");
    }

    const newInput = getNewInput(input, curr);
    setInput(newInput);

    if (curr === "=") {
      onCalculate(newInput);
    }
  };

  // 키보드로 동작 시
  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const key = event.key;

    // 전체 삭제
    if ((key === "Backspace" && event.metaKey) || key === "C") {
      return setInput("0");
    }

    // 부분 삭제
    if (key === "Backspace") {
      return setInput(input.length > 1 ? input.slice(0, -1) : "0");
    }

    // 쉼표(,)를 제거하여 숫자에 추가
    if (key === "," && input.includes(",")) {
      return;
    }

    const newInput = getNewInput(input, getCleanedText(key));
    setInput(newInput);

    // Enter 허용
    if (key === "=" || key === "Enter") {
      onCalculate(newInput);
    }
  };

  // 복붙
  const onPaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = event.clipboardData.getData("text/plain");
    const newInput = getNewInput(input, getCleanedText(pastedText));

    if (input + getCleanedText(pastedText).includes("=")) {
      onCalculate(newInput);
    }
    setInput(newInput);
  };

  return (
    <CalculatorWrapper>
      <CalculatorTextarea
        ref={textareaRef}
        className="autoTextarea"
        value={input}
        onChange={autoResizeTextarea}
        onPaste={onPaste}
        onKeyDown={onKeyDown}
      />
      <CalculatorBody onClickButton={onClickButton} />
      <div>
        <p>Total: {total}</p>
      </div>
    </CalculatorWrapper>
  );
};
