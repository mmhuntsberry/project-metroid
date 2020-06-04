import React from "react";
import Notice from "../Notice";
import InfoCard from "../InfoCard";
import styled from "@emotion/styled";

const infoCardData = [
  {
    icon: `fas fa-clipboard-list`,
    copy:
      "Keep track of all the games you’ve played or start from the day you join.",
  },
  {
    icon: `fas fa-gamepad`,
    copy:
      "Start a video game collection and keep track of all the games you love!",
  },
  {
    icon: `fas fa-star-half-alt`,
    copy: "Tell others how you felt about a game by reviewing it.",
  },
  {
    icon: `fas fa-heart`,
    copy: "Share your love for a game by leaving a like!",
  },
  {
    icon: `fas fa-book-open`,
    copy:
      "Keep a gaming journal about tips, tricks and easter eggs you’ve found.",
  },
];

const InfoCardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 1em;
`;

const Dashboard = () => {
  return (
    <div>
      <Notice />
      <InfoCardWrapper>
        {infoCardData.map((card, i) => {
          return <InfoCard key={i} icon={card.icon} copy={card.copy} />;
        })}
      </InfoCardWrapper>
    </div>
  );
};

export default Dashboard;
