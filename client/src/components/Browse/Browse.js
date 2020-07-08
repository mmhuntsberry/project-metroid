import React from "react";
import GameCard from "../GameCard/GameCard";
import { BrowseContainer, BackgroundImage } from "./Browse.styles";
import './Browse.styles'
import { CardRowGrid } from "../../styles/layout/layout.styles.js";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Browse = () => {
  

        return (
          <BrowseContainer>
            <BackgroundImage/>
            test
          </BrowseContainer>
        
  );
};



export default Browse;


// References //


{/* <CardRowGrid>
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
  </CardRowGrid> */}

//   const GET_GAMES = gql`
//   query {
//     games {
//       id
//       title
//       platform
//       release_year
//       box_art
//       synopsis
//       description
//       trailer
//       hero
//       developer
//     }
//   }
// `;
