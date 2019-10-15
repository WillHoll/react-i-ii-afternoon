import React from 'react';

export default class DisplayMaker extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
        let favList = this.props.object.favoriteMovies.map((movie) => <li>{movie}</li>)
        return(
            <div className="annoying-div-that-must-exist">
                <h1>{this.props.object.name.first} {this.props.object.name.last}</h1>
                <ul>
                    <li><div className='bold'>From:</div>&nbsp;{this.props.object.city}, {this.props.object.country}</li>
                    <li><div className='bold'>Job Title:</div>&nbsp;{this.props.object.title}</li>
                    <li><div className='bold'>Employer:</div>&nbsp;{this.props.object.employer}</li>
                </ul>
                    <h3>Favorite Movies:</h3>
                <ol>
                    {favList}
                </ol>
            </div>
        )
    }
}
