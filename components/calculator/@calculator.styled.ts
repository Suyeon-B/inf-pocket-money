import styled from "@emotion/styled";

export const CalculatorWrapper = styled.div`
  width: 100%;
`;

export const CalculatorTextarea = styled.textarea`
  background-color: #fafbfc;
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(136, 148, 158, 0.25),
    0 0 2px 0 rgba(136, 148, 158, 0.3);
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
  transition: height 0.3s ease;
  resize: none;
  font-size: 24px;
  padding: 10px;
  text-align: right;
`;

export const CalculatorResult = styled.div`
  font-size: 30px;
  padding: 10px;
  text-align: right;
`;

export const CalculatorButtonWrapper = styled.div`
  border-radius: 8px;
  background-image: linear-gradient(to bottom, #eceff3 100%, #eceff3 0%);
  padding: 16.5px 12px;
  box-shadow: 0 1px 3px 0 rgba(136, 148, 158, 0.25),
    0 0 2px 0 rgba(136, 148, 158, 0.3);
`;
export const CalculatorButtonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

export const CalculatorButton = styled.button<{
  active: boolean;
  theme: "operator" | "equals" | "ac" | "";
}>`
  border-radius: 16px;
  width: 100% !important;
  height: 44.5px;
  color: #6b707a;
  box-shadow: inset 1px 1px 1px 0 #ffffff,
    inset -1px -1px 1px 0 rgba(111, 126, 145, 0.42);
  background-image: linear-gradient(122deg, #eceff3, #ffffff 97%);
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  border: none;

  ${(props) => {
    if (props.theme === "" && props.active) {
      return `
        box-shadow: inset 1px 1px 1px 0 rgba(111, 126, 145, 0.47), inset -1px -1px 1px 0 #ffffff;
        color: rgba(107, 112, 122, 0.5);
        background-image: linear-gradient(to bottom, #e3e9f0, #eceff3);
      `;
    }
    if (props.theme === "operator") {
      if (props.active) {
        return `
          background-image: linear-gradient(124deg, #e2e8f1, #e6eaf1 97%);
        `;
      }
      return `
        background-image: linear-gradient(124deg, #e2e8f1, #e6eaf1 97%);
      `;
    }
    if (props.theme === "equals") {
      if (props.active) {
        return `
          box-shadow: inset 1px 1px 1px 0 rgba(111, 126, 145, 0.47), inset -1px -1px 1px 0 #ffffff;
          color: rgba(107, 112, 122, 0.5);
          background-image: linear-gradient(to top,#FF827E, #FFA29F);
        `;
      }
      return `
        background-image: linear-gradient(124deg, #DE1812, #FF635F 97%);
        color: white;
      `;
    }
    if (props.theme === "ac") {
      if (props.active) {
        return `
          color: rgba(222, 24, 18, 0.5);
          box-shadow: inset 1px 1px 1px 0 rgba(111, 126, 145, 0.47), inset -1px -1px 1px 0 #ffffff;
        `;
      }
      return `
        color: #DE1812;
      `;
    }
  }}
`;
