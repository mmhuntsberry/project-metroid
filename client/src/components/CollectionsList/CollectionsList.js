import React from "react";
import { PageWrapper, ContentWrapper } from "./CollectionsList.styles"
import CurrentlyPlayingList from "../CurrentlyPlayingList"

const currentlyPlaying = [
  {
    boxArt: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1qve.jpg",
    title: "The Legend of Zelda: Link's Awakening",
    releaseDate: "2019-09-20",
    platform: "Nintendo Switch",
    startedOn: "2019-11-21"
  },
  {
    boxArt: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.jpg",
    title: "Persona 5 Royal",
    releaseDate: "2019-10-31",
    platform: "Playstation 4",
    startedOn: "2020-06-17"
  }
];

const CollectionsList = () => {
  return <PageWrapper>
    <CurrentlyPlayingList currentlyPlaying={currentlyPlaying} />
    <ContentWrapper currentlyPlaying={true}>Collections List</ContentWrapper>
    </PageWrapper>;
};

export default CollectionsList;
