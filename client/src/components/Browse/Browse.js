import React from "react";
import GameCard from "../GameCard/GameCard";
import { BrowseContainer } from "./Browse.styles";
import { CardRowGrid } from "../../styles/layout/layout.styles.js";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Browse = () => {
  return (
    <Query query={GET_GAMES}>
      {({ data, loading }) => {
        console.log(data);
        if (loading) return "Loading...";

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
      }}
    </Query>
  );
};

const GET_GAMES = gql`
  query {
    games {
      id
      title
      platform
      release_year
      box_art
      synopsis
      description
      trailer
      hero
      developer
      reviews {
        review
      }
      rating {
        rating
      }
      theme {
        type
      }
      genre {
        type
      }
    }
  }
`;

export default Browse;
