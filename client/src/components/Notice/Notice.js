import React from "react";
import { NoticeContainer, NoticeText, NoticeAction } from "./Notice.styles";

const Notice = () => {
  return (
    <NoticeContainer>
      <NoticeText>
        Track the games you own. Share the games you’ve played!
      </NoticeText>
      <NoticeAction href="#">Get Started</NoticeAction>
    </NoticeContainer>
  );
};

export default Notice;
