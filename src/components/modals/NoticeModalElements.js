import styled from "styled-components";

export const NoticeModalWrap = styled.div`
  display: none;
  width: 300px;
  height: 200px;
  position: absolute;
  top: 55px;

  border-radius: 10px;
  -webkit-box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  border: 1px solid #cdcdcd;
  display: ${({ contentsIsOpen, contentsIsClose }) =>
    contentsIsOpen === "notice"
      ? "block"
      : contentsIsClose === "notice"
      ? "none"
      : ""};
  z-index: ${({ contentsIsOpen, contentsIsClose }) =>
    contentsIsOpen === "notice"
      ? "1"
      : contentsIsClose === "notice"
      ? "-999"
      : ""};

  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: 0;
    -webkit-box-shadow: 0 0 0 0 rgb(0 0 0 / 0);
    box-shadow: 0 0 0 0 rgb(0 0 0 / 0);
    border: 0;
  }
`;

export const NoticeModalContent = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
