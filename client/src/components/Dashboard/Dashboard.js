import React from "react";
import Notice from "../Notice";
import InfoCard from "../InfoCard";
import { CardRow, RowTitle } from "./Dashboard.styles";
import { default as popularGameCardData } from "./popularGameCardData.json";
import { default as infoCardData } from "./infoCardData.json";
import GameCard from "../GameCard/GameCard";

const Dashboard = () => {
  return (
    <div>
      <Notice />
      <RowTitle>Popular</RowTitle>
      <CardRow>
        {popularGameCardData.map((card, i) => (
          <GameCard
            key={i}
            img={card.img}
            title={card.title}
            developer={card.developer}
          />
        ))}
      </CardRow>
      <RowTitle>Project Metroid Lets You</RowTitle>
      <CardRow>
        {infoCardData.map((card, i) => {
          return <InfoCard key={i} icon={card.icon} copy={card.copy} />;
        })}
      </CardRow>
    </div>
  );
};

export default Dashboard;
