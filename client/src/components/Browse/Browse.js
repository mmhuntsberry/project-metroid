import React from "react";
import GameCard from "../GameCard/GameCard";
import { BrowseContainer } from "./Browse.styles";
import { CardRowGrid } from "../../styles/layout/layout.styles.js";
import { useQuery, gql } from "@apollo/client";

const Browse = () => {
  const { loading, error, data } = useQuery(GET_GAMES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <BrowseContainer>
      <CardRowGrid>
        {data &&
          data.games &&
          data.games.map((game) => (
            <GameCard
              id={game.id}
              key={game.id}
              img={game.box_art}
              title={game.title}
              developer={game.developer}
            />
          ))}
      </CardRowGrid>
    </BrowseContainer>
  );
};
export default Browse;

const GET_GAMES = gql`
  query {
    games {
      id
      title
      release_year
      box_art
      synopsis
      description
      trailer
      hero
      developer
    }
  }
`;
