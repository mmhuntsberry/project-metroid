import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Browse = () => {
  return (
    <Query query={GET_GAMES}>
      {({ data, loading }) => {
        if (loading) return "Loading...";

        return (
          data &&
          data.games &&
          data.games.map((game) => (
            <>
              <h4>{game.title}</h4>
              <p>{game.platform}</p>
              <p>{game.release_year}</p>
              <img src={game.box_art} />
              <p>{game.synopsis}</p>
              <p>{game.description}</p>
              <iframe src={game.trailer} frameborder="0"></iframe>
              <img src={game.hero} />
              <p>{game.developer}</p>
            </>
          ))
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
