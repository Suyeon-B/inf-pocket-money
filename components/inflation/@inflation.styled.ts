import styled from "@emotion/styled";

export const InflationContents = styled.div`
  display: flex;
  max-width: 35vw;
  flex-direction: column;
  background-color: #fafbfc;
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(136, 148, 158, 0.25),
    0 0 2px 0 rgba(136, 148, 158, 0.3);
  padding: 20px;
  background-image: linear-gradient(to bottom, #eceff3 100%, #eceff3 0%);
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

export const InflationContentWrapper = styled.div`
  line-height: 1.7;
`;

export const Emphasize = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || "red"};
`;

export const StyledP = styled.p`
  font-family: monospace;
  text-align: center;
`;
