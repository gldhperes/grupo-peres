import React from 'react'

import "./Presentation.css"

const Presentation = ({ title, content }) => {
    return (
        <section className="presentation">

            <ApCard title={title} content={content} />

        </section>
    )
}


const ApCard = ({ title, content }) => {

    return (
        <div className="ap-card">

            <div className="ap-content-container">

                <h3 className='ap-title mainTitle'> {title} </h3>

                <p className="ap-content"> {content} </p>

            </div>

            <div className="ap-content-img img" ></div>

        </div>
    )
}

export default Presentation