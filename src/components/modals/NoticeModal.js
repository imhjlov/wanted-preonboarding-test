import React from "react";
import { NoticeModalWrap, NoticeModalContent } from "./NoticeModalElements";

const NoticeModal = (handler) => {
  return (
    <NoticeModalWrap
      contentsIsOpen={handler.contentsIsOpen}
      contentsIsClose={handler.contentsIsClose}
    >
      <NoticeModalContent>공지내용이 없습니다!</NoticeModalContent>
    </NoticeModalWrap>
  );
};
export default NoticeModal;
