import React, { useEffect, useReducer, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { useMutation, gql, useQuery } from "@apollo/client";

import { CreateGameForm, CreateGameLabel } from "./CreateGame.styles";

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const initialState = {
  title: "",
  release_year: null,
  box_art: "",
  synopsis: "",
  description: "",
  hero: "",
  trailer: "",
  developer: "",
  rating: "",
};

// TODO hook up functionality to  query genres, platforms, rating, etc...
const CreateGame = () => {
  const { 
    loading, 
    // error, 
    data: details } = useQuery(GET_DETAILS);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [genre, setGenres] = useState([]);
  const [platform, setPlatforms] = useState([]);
  const [theme, setThemes] = useState([]);

  const [
    addGame, 
    // { data }
  ] = useMutation(CREATE_GAME);

  useEffect(() => {}, [state, genre, platform, theme]);

  const handleChange = (evt) => {
    if (!evt.target) {
      const name = Object.keys(evt[0])[1];
      const value = String(Object.values(evt[0])[1]);
      dispatch({ field: name, value: value });
    } else {
      dispatch({ field: evt.target.name, value: evt.target.value });
    }
  };

  const handleGenre = (val) => {
    let name;
    // eslint-disable-next-line
    let field;
    val.forEach((v) => {
      field = Object.keys(v);
      name = Object.values(v);
      setGenres([...genre, name[1]]);
    });
  };

  const handleTheme = (val) => {
    let name;
    // eslint-disable-next-line
    let field;
    val.forEach((v) => {
      field = Object.keys(v);
      name = Object.values(v);
      setThemes([...theme, name[1]]);
    });
  };

  const handlePlatform = (val) => {
    let name;
    // eslint-disable-next-line
    let field;
    val.forEach((v) => {
      field = Object.keys(v);
      name = Object.values(v);
      setPlatforms([...platform, name[1]]);
    });
  };

  const handleSubmit = (evt) => {
    /* let newState = {
      ...state,
      themes: [...theme],
      genres: [...genre],
      platforms: [...platform],
    }; */

    evt.preventDefault();
    addGame({
      variables: {
        data: {
          title: state.title,
          release_year: Number(state.release_year),
          box_art: state.box_art,
          synopsis: state.synopsis,
          description: state.description,
          trailer: state.trailer,
          hero: state.hero,
          developer: state.developer,
          rating: Number(state.rating),
          genre: [...genre],
          theme: [...theme],
          platform: [...platform],
        },
      },
    });
  };

  return (
    <CreateGameForm
      className="form__create-game"
      method="POST"
      onSubmit={handleSubmit}
    >
      <CreateGameLabel for="title">Title:</CreateGameLabel>
      <input
        type="text"
        name="title"
        id="title"
        value={state.title}
        onChange={handleChange}
      />
      <CreateGameLabel for="release_year">Release Year:</CreateGameLabel>
      <input
        value={state.release_year}
        type="text"
        name="release_year"
        id="release_year danger"
        onChange={handleChange}
      />
      <CreateGameLabel for="box_art">Box art:</CreateGameLabel>
      <input
        type="text"
        name="box_art"
        id="box_art"
        value={state.box_art}
        onChange={handleChange}
      />
      <CreateGameLabel for="synopsis">Synopsis:</CreateGameLabel>
      <textarea
        value={state.synopsis}
        type="text"
        name="synopsis"
        id="synopsis"
        onChange={handleChange}
      />
      <CreateGameLabel for="description">Description:</CreateGameLabel>
      <textarea
        value={state.description}
        type="text"
        name="description"
        id="description"
        onChange={handleChange}
      />
      <CreateGameLabel for="trailer">Trailer:</CreateGameLabel>
      <input
        type="text"
        name="trailer"
        id="trailer"
        value={state.trailer}
        onChange={handleChange}
      />
      <CreateGameLabel for="hero">Hero:</CreateGameLabel>
      <input
        type="text"
        name="hero"
        id="hero"
        value={state.hero}
        onChange={handleChange}
      />
      <CreateGameLabel for="developer">Developer:</CreateGameLabel>
      <input
        value={state.developer}
        type="text"
        name="developer"
        id="developer"
        onChange={handleChange}
      />

      <CreateGameLabel for="rating">Choose a rating:</CreateGameLabel>
      <select name="rating" id="rating" onChange={handleChange}>
        <option value="">--Please choose a rating--</option>
        {loading ? (
          <option>Loading...</option>
        ) : (
          details &&
          details.ratings.map((d) => (
            <option value={d.rating}>{d.rating}</option>
          ))
        )}
      </select>

      <CreateGameLabel for="genre">Choose a genre:</CreateGameLabel>
      {/* <select name="genre" id="genre" onChange={handleChange}>
        <option value="">--Please choose a genre--</option>
        {loading ? (
          <option>Loading...</option>
        ) : (
          details &&
          details.genres.map((d) => <option value={d.genre}>{d.genre}</option>)
        )}
      </select> */}
      {loading ? (
        <p>Loading</p>
      ) : (
        details && (
          <Multiselect
            name="genre"
            options={details.genres} // Options to display in the dropdown
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={handleGenre} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="genre" // Property name to display in the dropdown options
          />
        )
      )}

      <CreateGameLabel for="theme">Choose a theme:</CreateGameLabel>
      {/* <select name="theme" id="theme" onChange={handleChange}>
        <option value="">--Please choose a theme--</option>
        {loading ? (
          <option>Loading...</option>
        ) : (
          details &&
          details.themes.map((d) => <option value={d.theme}>{d.theme}</option>)
        )}
      </select> */}
      {loading ? (
        <p>Loading</p>
      ) : (
        details && (
          <Multiselect
            options={details.themes} // Options to display in the dropdown
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={handleTheme} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="theme" // Property name to display in the dropdown options
          />
        )
      )}

      <CreateGameLabel for="platform">Choose a platform:</CreateGameLabel>
      {/* <select name="platform" id="platform" onChange={handleChange}>
        <option value="">--Please choose a platform--</option>
        {loading ? (
          <option>Loading...</option>
        ) : (
          details &&
          details.platforms.map((d) => (
            <option value={d.platform}>{d.platform}</option>
          ))
        )}
      </select> */}
      {loading ? (
        <p>Loading</p>
      ) : (
        details && (
          <Multiselect
            options={details.platforms} // Options to display in the dropdown
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={handlePlatform} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="platform" // Property name to display in the dropdown options
          />
        )
      )}
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
`;
