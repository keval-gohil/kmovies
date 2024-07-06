'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        setMovies(data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div id="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link href={`/${movie.id}`}>
                <img src={movie.image ? movie.image.medium : ''} alt={movie.name} />
                <p>{movie.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
