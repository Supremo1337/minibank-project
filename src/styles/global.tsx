import styled from "styled-components";

interface InfoTextProps {
  fontSize: string;
  mgb?: string;
}

export const InfoText = styled.label<InfoTextProps>`
  font-size: ${(props) => props.fontSize}; /*  16 ou 18 */
  color: #fff;
`;

export const Title = styled.label<InfoTextProps>`
  font-size: ${(props) => props.fontSize}; /*  16 ou 18 */
  color: #a8aeba;
  margin-bottom: ${(props) => props.mgb};
`;

export const TextTitle = styled.div`
  font-size: 16px;
`;
