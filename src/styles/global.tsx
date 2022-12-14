import styled from "styled-components";

interface InfoTextProps {
  fontSize: string;
  mgb?: string;
}

interface TextTitleProps {
  textAlign?: string;
}

export const InfoText = styled.label<InfoTextProps>`
  font-size: ${(props) => props.fontSize};
  color: #fff;
`;

export const Title = styled.label<InfoTextProps>`
  font-size: ${(props) => props.fontSize};
  color: #a8aeba;
  margin-bottom: ${(props) => props.mgb};
`;

export const TextTitle = styled.div<TextTitleProps>`
  font-size: 1.6rem;
  text-align: ${(props) => props.textAlign};
`;


export const ButtonSendAndFilter = styled.button`
  width: 112px;
  height: 48px;
  background: #202128;
  font-size: 1.8rem;
  border: 0px;
  border-radius: 8px;
  cursor: pointer;
  @media (min-width: 1024px) {
  }
`;
