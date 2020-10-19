import React from "react";
import { useParams } from "react-router-dom";
import {
  Hero,
  HeroImage,
  HeroTextContainer,
  HeroTitle,
  HeroDetails,
  BoxArt,
  BodyContainer,
  GameDetailsContainer,
  GameDescription,
  GameSynopsis,
  GameTrailer,
  GameSidebar,
  GameInfo,
  GameRating,
  GameGenre,
  GamePlatform,
  GameTheme,
  InfoContainer,
  GameInfoTitle,
  ReviewsContainer,
  SectionContainer,
  SectionTitle,
  SectionLink,
} from "./GamePage.styles.js";
import { CardRowGrid } from "../Dashboard/Dashboard.styles.js";
import GameCard from "../GameCard/GameCard";
// import { GameModel } from "../../models";
import { intersperse } from "../../utils/helpers.js";
import { default as popularGameCardData } from "../Dashboard/popularGameCardData.json";
import { useQuery, gql } from "@apollo/client";
import Review from "../Review/Review";

// interface Props {
//   data: IData;
// }

// interface IData {
//   loading: boolean;
//   game: GameModel;
// }

const GamePage = (props) => {
  const { id: gameID } = useParams();

  const { 
    loading, 
    // error,
    data } = useQuery(GET_GAME, {
    variables: { id: gameID },
  });

  return (
    <div className="game-page">
      {loading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <>
            <Hero>
              <HeroTextContainer>
                <HeroTitle>{data.game.title}</HeroTitle>
                <HeroDetails>{data.game.release_year}</HeroDetails>
                <HeroDetails>{data.game.developer}</HeroDetails>
              </HeroTextContainer>
              <HeroImage image={data.game.hero} />
            </Hero>
            <BodyContainer>
              <GameSidebar>
                <BoxArt src={data.game.box_art} />
                <GameInfo>
                  <InfoContainer>
                    <GameInfoTitle>Rating:</GameInfoTitle>
                    <GameRating>{data.game.rating.rating} / 5</GameRating>
                  </InfoContainer>
                  <InfoContainer>
                    <GameInfoTitle>Platform:</GameInfoTitle>
                    <GamePlatform>
                      {intersperse(data.game.platform, "platform", ", ")}
                    </GamePlatform>
                  </InfoContainer>
                  <InfoContainer>
                    <GameInfoTitle>Theme:</GameInfoTitle>
                    <GameGenre>
                      {intersperse(data.game.theme, "theme", ", ")}
                    </GameGenre>
                  </InfoContainer>
                  <InfoContainer>
                    <GameInfoTitle>Genre:</GameInfoTitle>
                    <GameTheme>
                      {intersperse(data.game.genre, "genre", ", ")}
                    </GameTheme>
                  </InfoContainer>
                </GameInfo>
              </GameSidebar>
              <GameDetailsContainer>
                <GameSynopsis>{data.game.synopsis}</GameSynopsis>
                <GameDescription>{data.game.description}</GameDescription>
                <GameTrailer
                  src={data.game.trailer}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></GameTrailer>
                <SectionContainer>
                  <SectionTitle>Popular reviews</SectionTitle>
                  <SectionLink>More</SectionLink>
                </SectionContainer>
                <ReviewsContainer>
                  {data.game.reviews.length > 0 ? (
                    data.game.reviews.map((review) => {
                      return <Review key={review.id} userReview={review} />;
                    })
                  ) : (
                    <div>No reviews</div>
                  )}
                </ReviewsContainer>
                <SectionContainer>
                  <SectionTitle>Popular Games</SectionTitle>
                  <SectionLink>More</SectionLink>
                </SectionContainer>
                <CardRowGrid>
                  {popularGameCardData.slice(2).map((card) => (
                    <GameCard
                      class="popular__game"
                      key={card.id}
                      img={card.img}
                      title={card.title}
                      developer={card.developer}
                    />
                  ))}
                </CardRowGrid>
              </GameDetailsContainer>
            </BodyContainer>
          </>
        )
      )}
    </div>
  );
};

const GET_GAME = gql`
  query GetGame($id: ID!) {
    game(id: $id) {
      id
      title
      release_year
      box_art
      synopsis
      description
      trailer
      hero
      developer
      rating {
        rating
      }
      genre {
        genre
      }
      theme {
        theme
      }
      reviews {
        review
        created_at
        author {
          username
          thumbnail
        }
      }
      platform {
        platform
      }
    }
  }
`;

export default GamePage;
