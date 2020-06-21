import React from "react";
import Notice from "../Notice";
import InfoCard from "../InfoCard";
import {
  PageWrapper,
  DashboardBoardBodyContainer,
  CardRow,
  CardRowGrid,
  TrailerCardRowGrid,
  RowTitle,
} from "./Dashboard.styles";
import { default as popularGameCardData } from "./popularGameCardData.json";
import { default as infoCardData } from "./infoCardData.json";
import { default as recentReviewsCardData } from "./recentReviewsCardData.json";
import { default as newestTrailersCardData } from "./newestTrailersCardData.json";
import GameCard from "../GameCard/GameCard";
import TrailerCard from "../TrailerCard";
import Carousel from "../Carousel";

const Dashboard = () => {
  return (
    <PageWrapper className="page-wrapper">
      <Carousel />
      <Notice />
      <DashboardBoardBodyContainer>
        <RowTitle className="card-row__title">Popular</RowTitle>
        <CardRowGrid>
          {popularGameCardData.map((card) => (
            <GameCard
              key={card.id}
              img={card.img}
              title={card.title}
              developer={card.developer}
            />
          ))}
        </CardRowGrid>
        <RowTitle className="card-row__title">
          Project Metroid Lets You
        </RowTitle>
        <CardRow>
          {infoCardData.map((card) => {
            return <InfoCard key={card.id} icon={card.icon} copy={card.copy} />;
          })}
        </CardRow>
        <RowTitle className="card-row__title">Recent Reviews</RowTitle>
        <CardRowGrid>
          {recentReviewsCardData.map((card) => (
            <GameCard
              key={card.id}
              img={card.img}
              title={card.title}
              developer={card.developer}
            />
          ))}
        </CardRowGrid>
        <RowTitle className="card-row__title">Newest Trailers</RowTitle>
        <TrailerCardRowGrid>
          {newestTrailersCardData.map((card) => (
            <TrailerCard
              key={card.id}
              thumbnail={card.thumbnail}
              title={card.title}
              creator={card.creator}
            />
          ))}
        </TrailerCardRowGrid>
      </DashboardBoardBodyContainer>
    </PageWrapper>
  );
};

export default Dashboard;
