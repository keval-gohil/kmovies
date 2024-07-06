import React from 'react'
import Conform from './conForm'

const footer = () => {
  return (
    <>
        <div className="c-footer">
            <h2 id='contact'>Contact Us</h2>
            <div className="con-form">
                <Conform></Conform>
            </div>
        </div>
    </>
  )
}

export default footer
