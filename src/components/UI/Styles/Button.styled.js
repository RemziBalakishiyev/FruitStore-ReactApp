import styled from "styled-components";
const color = {
  primary: "#00b4d8",
  secondary: "#ffc857",
  thirsdy: "#ef233c",
  fourthy: "#52b788",
};
export const Button = styled.button`
  display: inline-block;
  background-color: ${({ bg, isOutline }) =>
    isOutline ? "transparent" : color[bg]};
  border: ${({ bg, isOutline }) =>
    isOutline ? `1px solid ${color[bg]}` : "none"};
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${({ bg, isOutline }) => (isOutline ? `${color[bg]}` : "#ffffff")};

  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  padding: 5px 12px;
  cursor: pointer;

  ${({ bg, isOutline }) =>
    isOutline &&
    `
      &:hover {
        background-color: ${color[bg]};
        color: #fff;
      }
    `}
`;
