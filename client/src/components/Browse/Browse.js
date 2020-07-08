import React from "react";
import "../../db/Browse";
import { BrowseContainer, BackgroundImage, TitleDiv, CustomTitle, CustomTitleWithCarrot } from "./Browse.styles";
import './Browse.styles'


const Browse = () => {
   function makePlatformBtn(){
     return(
       
     )
   }

        return (
          <BrowseContainer>
            <BackgroundImage/>
            <TitleDiv>
              Browse 
              <CustomTitle>customize</CustomTitle>
              <CustomTitleWithCarrot>Customize&gt;</CustomTitleWithCarrot>
            </TitleDiv>

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
