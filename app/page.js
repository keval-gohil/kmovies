import React from 'react'
import Header from '@/components/header'
import Banner from '@/components/banner'
import MovieList from '@/components/moviesList'
import More from '@/components/more'
import Footer from '@/components/footer'

const page = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <MovieList></MovieList>
      <More></More>
      <Footer></Footer>
    </>
  )
}

export default page
