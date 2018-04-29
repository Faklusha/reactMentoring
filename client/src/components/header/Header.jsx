import React, {Component} from 'react';
import './_header.css';

export default class Header extends Component {

    render() {
        const {isFilmSelected, resetActiveFilm} = this.props;

        return (
            <div className={"header"}>
                <span className={"main-title"}>netflixroulette</span>
                {isFilmSelected &&
                <div
                    onClick={resetActiveFilm}
                    className={"search-button"}>
                    SEARCH
                </div>}
            </div>
        );
    }
}
