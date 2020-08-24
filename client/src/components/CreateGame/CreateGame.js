import React, { useEffect, useReducer } from "react";
import { CreateGameForm, CreateGameLabel } from "./CreateGame.styles";
import { useMutation, gql, useQuery } from "@apollo/client";

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const initialState = {
  title: "",
  release_year: "",
  box_art: "",
  synopsis: "",
  description: "",
  hero: "",
  trailer: "",
};

const CreateGame = () => {
  const { loading, error, data: details } = useQuery(GET_DETAILS);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [addGame, { data }] = useMutation(CREATE_GAME);

  useEffect(() => {
    console.log(loading);
    console.log(error);
    console.log(details);
  }, [state]);

  const handleChange = (evt) => {
    dispatch({ field: evt.target.name, value: evt.target.value });
  };

  const handleSubmit = (evt) => {
    console.log(state);

    evt.preventDefault();
    console.log(state);
    // addGame({
    //   variables: {
    //     title: state.value,
    //   },
    // });
  };

  return (
    <CreateGameForm
      className="form__create-game"
      method="POST"
      onSubmit={handleSubmit}
    >
      <CreateGameLabel for="title">Title:</CreateGameLabel>
      <input type="text" name="title" id="title" onChange={handleChange} />
      <CreateGameLabel for="release_year">Release Year:</CreateGameLabel>
      <input
        type="text"
        name="release_year"
        id="release_year danger"
        onChange={handleChange}
      />
      <CreateGameLabel for="box_art">Box art:</CreateGameLabel>
      <input type="text" name="box_art" id="box_art" onChange={handleChange} />
      <CreateGameLabel for="synopsis">Synopsis:</CreateGameLabel>
      <textarea
        type="text"
        name="synopsis"
        id="synopsis"
        onChange={handleChange}
      />
      <CreateGameLabel for="description">Description:</CreateGameLabel>
      <textarea
        type="text"
        name="description"
        id="description"
        onChange={handleChange}
      />
      <CreateGameLabel for="trailer">Trailer:</CreateGameLabel>
      <input type="text" name="trailer" id="trailer" onChange={handleChange} />
      <CreateGameLabel for="hero">Hero:</CreateGameLabel>
      <input type="text" name="hero" id="hero" onChange={handleChange} />
      <CreateGameLabel for="developer">Developer:</CreateGameLabel>
      <input
        type="text"
        name="developer"
        id="developer"
        onChange={handleChange}
      />

      <CreateGameLabel for="rating">Choose a rating:</CreateGameLabel>
      <select name="rating" id="rating" onChange={handleChange}>
        <option value="">--Please choose a rating--</option>
        {loading ? <p>Loading...</p> : data && console.log(details)}
      </select>

      <CreateGameLabel for="genre">Choose a genre:</CreateGameLabel>
      <select name="genre" id="genre" onChange={handleChange}>
        <option value="">--Please choose a genre--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>

      <CreateGameLabel for="theme">Choose a theme:</CreateGameLabel>
      <select name="theme" id="theme" onChange={handleChange}>
        <option value="">--Please choose a theme--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>

      <CreateGameLabel for="platform">Choose a platform:</CreateGameLabel>
      <select name="platform" id="platform" onChange={handleChange}>
        <option value="">--Please choose a platform--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <button type="submit">Create Game</button>
    </CreateGameForm>
  );
};

export default CreateGame;

export const CREATE_GAME = gql`
  mutation createGame($data: createGameInput!) {
    createGame(data: $data) {
      id
      title
      release_year
      box_art
      synopsis
      description
      hero
      trailer
    }
  }
`;

export const GET_DETAILS = gql`
  query getDetails {
    details {
      platforms {
        platform
      }
      genres {
        genre
      }
      themes {
        theme
      }
      ratings {
        rating
      }
    }
  }
`;
