import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Browse = () => {
  return (
    <Query query={GET_GAMES}>
      {({ data, loading }) => {
        if (loading) return "Loading...";

        return (
          data && data.games && data.games.map((game) => <p>{game.title}</p>)
        );
      }}
    </Query>
  );
};

const GET_GAMES = gql`
  query {
    games {
      title
      platform
    }
  }
`;

export default Browse;
