import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css'
export const MovieSliderItem = ({movies, posters}) => {
    return (
        <div className="slider-item-background">
            <div className="row">
                <Link className='col-2' to={`/movie/${movies[0].id}`}>
                    <img style={{maxWidth: "200px"}} src={posters[0]}/>
                </Link>
                <Link className='col-2' to={`/movie/${movies[1].id}`}>
                    <img style={{maxWidth: "200px"}} src={posters[1]}/>
                </Link>
                <Link className='col-2' to={`/movie/${movies[2].id}`}>
                    <img style={{maxWidth: "200px"}} src={posters[2]}/>
                </Link>

                <Link className='col-2' to={`/movie/${movies[3].id}`}>
                    <img style={{maxWidth: "200px"}} src={posters[3]}/>
                </Link>

                <Link className='col-2' to={`/movie/${movies[4].id}`}>
                    <img style={{maxWidth: "200px"}} src={posters[4]}/>
                </Link>
                <Link className='col-2' to={`/movie/${movies[5].id}`}>
                    <img style={{maxWidth: "200px"}} src={posters[5]}/>
                </Link>

                

            </div>
        </div>
    )
}