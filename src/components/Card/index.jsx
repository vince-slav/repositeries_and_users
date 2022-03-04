/* eslint-disable */
import React, { useState } from 'react';
import './style.css';

export function Card({ repo }) {

    const [favRepos, setFavRepos] = useState([]);
    

    return (
        <div>
            <div className="col-md-4 card-repo">
                <div className="card">
                    <div className="card-header text-center text-primary font-weight-bold">
                        Repository informations
                    </div>
                    <div className="card-body">
                        <p className="card-text">Title: {repo.name}</p>
                        <p className="card-text">stars:</p>
                        <p className="card-text">forks:</p>
                        <p className="card-text">description:</p>
                    </div>
                    <div className="card-footer text-left">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Mark as favorite
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}