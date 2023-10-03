import styled from "@emotion/styled";
import Image from "next/image";

export const HomeWrapper = styled.div`
  margin: 50px 40px;
  border: 1px solid white;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  @media (max-width: 768px) {
    margin: 30px 20px;
  }
`;
export const HomeTitleWrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
export const HomeTitle = styled.h1`
  padding: 20px;
  text-align: center;
  font-family: "UhBeeSe_hyun_Bold";
  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 10px;
  }
`;
export const HomeContents = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 20px;
  border-radius: 6px;
  background-color: #fff1f3;
  box-shadow: 0 1px 3px 0 rgba(136, 148, 158, 0.25),
    0 0 2px 0 rgba(136, 148, 158, 0.3);
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const InputArea = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(136, 148, 158, 0.25),
    0 0 2px 0 rgba(136, 148, 158, 0.3);
`;

export const Emphasize = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || "red"};
`;

export const StyledP = styled.p`
  font-family: monospace;
  text-align: center;
`;
