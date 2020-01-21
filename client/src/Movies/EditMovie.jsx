import React, { useEffect, useState } from "react";
import axios from "axios";

const EditMovie = props => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    axios.get(`http://localhost:5000/api/movies/${id}`).then(res => {
      setMovie(res.data);
      console.log(res.data);
    });
  }, []);

  const handleChange = e => {
    console.log(movie);
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('works?')
    axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie).then(res=>{
        console.log(res)
        props.history.push(`/movies/${movie.id}`)
    })
  }

  return (
    <div className="edit-movie">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Title"
          name="title"
          value={movie.title}
          type="text"
        />
        <input
          onChange={handleChange}
          placeholder="Director"
          name="director"
          value={movie.director}
          type="text"
        />
        <input
          onChange={handleChange}
          placeholder="Metascore"
          name="metascore"
          value={movie.metascore}
          type="text"
        />
        <input
          onChange={handleChange}
          placeholder="Star"
          name="stars"
          value={movie.stars}
          type="text"
        />
      <button>Save</button>
      </form>
    </div>
  );
};

export default EditMovie;
