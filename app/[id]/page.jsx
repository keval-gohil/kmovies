'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/header'
import Footer from '@/components/footer'

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
          const data = await response.json();
          setMovie(data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
          setMovie(null);
        }
      };

      fetchMovieDetails();
    }
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Header></Header>
    <div className='details'>
      <h1>{movie.name}</h1>
      <div className="m-details">
      <img src={movie.image ? movie.image.medium : ''} alt={movie.name} />
      <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
      <style jsx>{`
        img {
          width: 200px;
          height: auto;
        }
      `}</style>

    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default MovieDetailsPage;
