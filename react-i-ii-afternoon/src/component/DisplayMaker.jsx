import React from 'react';

const DisplayMaker = (props) => {
        let favList = props.object.favoriteMovies.map((movie) => <li>{movie}</li>)
        return(
            <div className="annoying-div-that-must-exist">
                <h1>{props.object.name.first} {props.object.name.last}</h1>
                <ul>
                    <li><div className='bold'>From:</div>&nbsp;{props.object.city}, {props.object.country}</li>
                    <li><div className='bold'>Job Title:</div>&nbsp;{props.object.title}</li>
                    <li><div className='bold'>Employer:</div>&nbsp;{props.object.employer}</li>
                </ul>
                    <h3>Favorite Movies:</h3>
                <ol>
                    {favList}
                </ol>
            </div>
        )
    }
    export default DisplayMaker
