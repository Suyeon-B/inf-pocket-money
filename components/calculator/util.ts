// 계산
export const getCalculatedResult = (expression: string): number | string => {
  const sanitizedExpression = expression.replace(/[^0-9+*\/()-]/g, ""); // 유효하지 않은 문자 제거
  try {
    const fn = new Function(`return ${sanitizedExpression}`);
    const result = fn();

    if (result < 0) {
      return "용돈이 음수라니";
    }

    if (result.toString().length > 10) {
      return "Infinity";
    }

    if (isNaN(result)) {
      return "숫자 아님";
    }

    return Math.floor(result).toString();
  } catch (error) {
    alert("올바른 계산식이 아님");
    return "";
  }
};

// 숫자, 연산자만 허용
export const getCleanedText = (text: string) =>
  text.replace(/[^0-9=+\-*/C]/g, "");

export const numberRegex = /\d+/g;
export const operatorRegex = /[+\-*\/]/g;

export const getNewInput = (prev: string, curr: string) => {
  // 현재 입력값(curr)이 연산자일 때
  // 마지막 요소가 연산자라면
  const lastChar = prev[prev.length - 1];
  if (/[/+\-*]/.test(lastChar) && /[/+\-*]/.test(curr)) {
    // 새로운 연산자로 대체
    return prev.slice(0, -1) + curr;
  }

  // 현재 입력값(curr)이 숫자일 때
  const newInput = prev + curr;
  const numbers = newInput.match(numberRegex);
  const operators = newInput.match(operatorRegex) || [];

  const newNumbers =
    numbers?.map((number) =>
      // 맨 앞 0 제거
      // 각 숫자는 최대 10자리
      parseInt(number).toString().slice(0, 10)
    ) || [];
  const combinedArray = newNumbers.reduce(
    (acc: string[], curr: string, idx: number) => {
      let result = [...acc, curr];
      if (idx < operators.length) {
        result = [...acc, curr, operators[idx]];
      }
      return result;
    },
    []
  );

  return combinedArray.join("\n");
};
