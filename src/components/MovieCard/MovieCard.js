import React from 'react';
import './MovieCard.scss'
import {Link} from "react-router-dom"

const MovieCard = (props) => {
    const {data}=props;
    console.log(data.imdbID)
    return (
        <div className='card-item'>
            <Link to={`/movies/${data.imdbID}`}>
            <div className="card-inner">
                <div className="card-top">
                    <img loading="lazy" src={data.Poster} alt={data.title}/>
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div></Link>
        </div>
    );
};

export default React.memo(MovieCard);