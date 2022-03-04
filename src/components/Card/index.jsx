/* eslint-disable */
import React, { useState, useRef } from 'react';
import './style.css';

export function Card({ repo }) {

    const [favRepos, setFavRepos] = useState([]);
    const chechFav = useRef();

    function handleFav() {

        for (var i = 0; i < chechFav.length; i++) {
            if (chechFav[i].checked == true) {
                setFavRepos(repo)
            } 
        }
    }

    return (
        <div>
            <div className="col-md-4 card-repo">
                <div className="card">
                    <div className="card-header text-center text-primary font-weight-bold">
                        Repository informations
                    </div>
                    <div className="card-body">
                        <p className="card-text"><span className='text-primary font-weight-bold'>Title:</span> {repo.name}</p>
                        <p className="card-text"><span className='text-primary font-weight-bold'>stars:</span> {repo.stargazers_count}</p>
                        <p className="card-text"><span className='text-primary font-weight-bold'>forks:</span> {repo.forks_count}</p>
                        <p className="card-text"><span className='text-primary font-weight-bold'>description:</span> {repo.description}</p>
                        <hr />
                        <p className='mx-auto'>
                            <input className="form-check-input" ref={chechFav} onChange={handleFav} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Mark as favorite
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}