import React from "react";
import {BrowseBtn} from '../components/Browse/Browse.styles'

//Your function here VV
function clicky(e) {
    e.preventDefault();
    console.log(e.target.value)
  }


//Make buttons  
  export function makePlatformBtn(browse_platform) {
    return <BrowseBtn value={browse_platform.platform} onClick={clicky}>{browse_platform.platform}</BrowseBtn>;
  }

 export function makeGenreBtn(browse_genre) {
    return <BrowseBtn value={browse_genre.genre} onClick={clicky}>{browse_genre.genre}</BrowseBtn>;
  }

  export function makeThemeBtn(browse_theme) {
    return <BrowseBtn value={browse_theme.theme} onClick={clicky}>{browse_theme.theme}</BrowseBtn>;
  }

  export function makeKeywordBtn(browse_keyword) {
    return <BrowseBtn value={browse_keyword.keyword} onClick={clicky}>{browse_keyword.keyword}</BrowseBtn>;
  }

 export function makeDecadeBtn(browse_decade) {
  return <BrowseBtn value={browse_decade.decade} onClick={clicky}>{browse_decade.decade}</BrowseBtn>
  }

  export function makeRatingBtn(browse_rating) {
  return <BrowseBtn value={browse_rating.id} onClick={clicky}>{browse_rating.rating}</BrowseBtn>
  }


//Platform Data
export const browse_platform = [
  {
    id: "1",
    platform: "Playstation 5",
  },
  {
    id: "2",
    platform: "Xbox Series X",
  },
  {
    id: "3",
    platform: "Nintendo Switch",
  },
  {
    id: "4",
    platform: "Playstation 4",
  },
  {
    id: "5",
    platform: "Xbox One",
  },
  {
    id: "6",
    platform: "Nintendo 3DS",
  },
  {
    id: "7",
    platform: "Xbox 360",
  },
  {
    id: "8",
    platform: "Playstation 3",
  },
  {
    id: "9",
    platform: "SteamOS",
  },
  {
    id: "10",
    platform: "PC",
  },
  {
    id: "11",
    platform: "Playstation Vita",
  },
  {
    id: "12",
    platform: "Wii U",
  },
  {
    id: "13",
    platform: "Playstation Portable",
  },
  {
    id: "14",
    platform: "Nintendo DS",
  },
  {
    id: "15",
    platform: "Wii",
  },
  {
    id: "16",
    platform: "Playstation 2",
  },
  {
    id: "17",
    platform: "Xbox",
  },
  {
    id: "18",
    platform: "Dreamcast",
  },
  {
    id: "19",
    platform: "Gamecube",
  },
];

//Genre Data
export const browse_genre = [
  {
    id: "1",
    genre: "Point-and-click",
  },
  {
    id: "2",
    genre: "Fighting",
  },
  {
    id: "3",
    genre: "Shooter",
  },
  {
    id: "4",
    genre: "Music",
  },
  {
    id: "5",
    genre: "Platform",
  },
  {
    id: "6",
    genre: "Puzzle",
  },
  {
    id: "7",
    genre: "Racing",
  },
  {
    id: "8",
    genre: "Real Time Strategy (RTS)",
  },
  {
    id: "9",
    genre: "Role-playing (RPG)",
  },
  {
    id: "10",
    genre: "Simulator",
  },
  {
    id: "11",
    genre: "Sport",
  },
  {
    id: "12",
    genre: "Strategy",
  },
  {
    id: "13",
    genre: "Turn-based strategy (TBS)",
  },
  {
    id: "14",
    genre: "Tactical",
  },
  {
    id: "15",
    genre: "Hack and slash/Beat 'em up",
  },
  {
    id: "16",
    genre: "Quiz/Trivia",
  },
  {
    id: "17",
    genre: "Pinball",
  },
  {
    id: "18",
    genre: "Adventure",
  },
  {
    id: "19",
    genre: "Indie",
  },
  {
    id: "20",
    genre: "Arcade",
  },
  {
    id: "21",
    genre: "Visual Novel",
  },
  {
    id: "22",
    genre: "Card & Board Game",
  },
  {
    id: "23",
    genre: "MOBA",
  },
];

//Theme data
export const browse_theme = [
  {
    id: "1",
    theme: "Action",
  },
  {
    id: "2",
    theme: "Fantasy",
  },
  {
    id: "3",
    theme: "Science fiction",
  },
  {
    id: "4",
    theme: "Horror",
  },
  {
    id: "5",
    theme: "Thriller",
  },
  {
    id: "6",
    theme: "Survival",
  },
  {
    id: "7",
    theme: "Historical",
  },
  {
    id: "8",
    theme: "Stealth",
  },
  {
    id: "9",
    theme: "Comedy",
  },
  {
    id: "10",
    theme: "Business",
  },
  {
    id: "11",
    theme: "Drama",
  },
  {
    id: "12",
    theme: "Non-fiction",
  },
  {
    id: "13",
    theme: "Sandbox",
  },
  {
    id: "14",
    theme: "Educational",
  },
  {
    id: "15",
    theme: "Kids",
  },
  {
    id: "16",
    theme: "Open world",
  },
  {
    id: "17",
    theme: "Warfare",
  },
  {
    id: "18",
    theme: "Party",
  },
  {
    id: "19",
    theme: "4X (explore, expand, exploit, and exterminate)",
  },
  {
    id: "20",
    theme: "Erotic",
  },
  {
    id: "21",
    theme: "Mystery",
  },
  {
    id: "22",
    theme: "Romance",
  },
];

//Keyword data
export const browse_keyword = [
  {
    id: "1",
    keyword: "Digital Distribution",
  },
  {
    id: "2",
    keyword: "Fantasy",
  },
  {
    id: "3",
    keyword: "Sci-Fi",
  },
  {
    id: "4",
    keyword: "Adventure",
  },
  {
    id: "5",
    keyword: "Strategy",
  },
  {
    id: "6",
    keyword: "Role Playing",
  },
  {
    id: "7",
    keyword: "Simulation",
  },
  {
    id: "8",
    keyword: "Puzzle",
  },
  {
    id: "9",
    keyword: "Anime",
  },
  {
    id: "10",
    keyword: "Steam",
  },
  {
    id: "11",
    keyword: "Platformer",
  },
  {
    id: "12",
    keyword: "Licensed Game",
  },
  {
    id: "13",
    keyword: "Sports",
  },
  {
    id: "14",
    keyword: "Comedy",
  },
  {
    id: "15",
    keyword: "Shooter",
  },
  {
    id: "16",
    keyword: "Indie",
  },
  {
    id: "17",
    keyword: "Polygonal 3D",
  },
  {
    id: "18",
    keyword: "Jump",
  },
  {
    id: "19",
    keyword: "Driving/Racing",
  },
  {
    id: "20",
    keyword: "Health",
  },
  {
    id: "21",
    keyword: "Achievements",
  },
  {
    id: "22",
    keyword: "Action-Adventure",
  },
  {
    id: "23",
    keyword: "Horror",
  },
  {
    id: "24",
    keyword: "Sword",
  },
  {
    id: "25",
    keyword: "Gun",
  },
  {
    id: "26",
    keyword: "Boss Fight",
  },
  {
    id: "27",
    keyword: "Steam Achievements",
  },
  {
    id: "28",
    keyword: "High Score",
  },
  {
    id: "29",
    keyword: "Death",
  },
  {
    id: "30",
    keyword: "First Person Shooter",
  },
  {
    id: "31",
    keyword: "Platform Exclusive",
  },
  {
    id: "32",
    keyword: "Shoot 'em Up",
  },
];

//Decade Data
export const browse_decade = [
  {
    id: "1",
    decade: "2020s",
  },
  {
    id: "2",
    decade: "2010s",
  },
  {
    id: "3",
    decade: "2000s",
  },
  {
    id: "4",
    decade: "1990s",
  },
  {
    id: "5",
    decade: "1980s",
  },
  {
    id: "6",
    decade: "1970s",
  },
  {
    id: "7",
    decade: "1960s",
  },
];

//Rating data
export const browse_rating = [
  {
    id: 5,
    rating: <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>,
  },
  {
    id: 4,
    rating: <p>&#9734;&#9734;&#9734;&#9734;</p>,
  },
  {
    id: 3,
    rating: <p>&#9734;&#9734;&#9734;</p>,
  },
  {
    id: 2,
    rating: <p>&#9734;&#9734;</p>,
  },
];


//Can make a "Master export?"



