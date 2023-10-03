import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  margin: 0 auto;
`;

export const HomeTitle = styled.h1``;

export const PrevInput = styled.input`
  width: 300px;
  font-size: 24px;
`;

export const HomeContents = styled.div`
  display: flex;
`;

export const CalculatorWrapper = styled.div`
  width: 300px;
`;

export const CalculatorTextarea = styled.textarea`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
  transition: height 0.3s ease;
  resize: none;
  font-size: 24px;
  padding: 10px;
  text-align: left;
`;

export const CalculatorButton = styled.button`
  width: 25%;
  font-size: 20px;
  padding: 10px;
  background-color: #eee;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #ddd;
  }
`;

export const InflationContents = styled.div`
  display: flex;
  max-width: 60vw;
  flex-direction: column;
`;
