import "./Header.scss"
import React, {useState} from 'react';
import { Link } from "react-router-dom"
import user from "../../images/user.png"
import * as PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice";

// function Li(props) {
//     return null;
// }
//
// Li.propTypes = {
//     className: PropTypes.string,
//     children: PropTypes.node
// };
const Header = () => {

    const [term, setTerm] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit", term)
        if(term === "") return alert('Please add some text!')
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("")
    }

    return (
        <div className="header">
            {/*<Link to="/">*/}
            {/*    <div className="logo">Movie App</div>*/}
            <Link to="/">Movie App</Link>
            {/*</Link>*/}
            <div className="search-bar">
                <form onSubmit={submitHandler}>


                    {/*Fihish this form!*/}


                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user image" />
            </div>

        </div>
    );
};

export default Header;