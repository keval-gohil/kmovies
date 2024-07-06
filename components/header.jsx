import React from 'react'

const header = () => {
  return (
    <>
        <div className="h-main">

            <h2><a href="/"><span style={{color:"#8d00f9"}}>K</span>M<span>
            <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24"><path fill="#8d00f9" d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z"/><path fill="#8d00f9" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5"/></svg>
            </span>VIES</a></h2>

            <form>
                <div className="input-container">
		            <input type="text" className="search-input" placeholder="Its just a demo purpose..." />
                    <button type="submit" className="search-submit"><i className="iconamoon--search">search</i></button>
                </div>
            </form>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#" className='dis'>Netflix</a></li>
                <li><a href="#" className='dis'>Prime V</a></li>
            </ul>

        </div>
    </>
  )
}

export default header
