/* eslint-disable */
import React, { useState } from 'react';
import { Card } from '../Card';
import axios from 'axios';

export function Main() {

    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState('');

    function searchRepos() {
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then((res) => {
                const dataRepos = res.data;
                setRepos(dataRepos);
            });
    }

    return (
        <div>
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter the username" value={user} onChange={(e) => setUser(e.target.value)} />
                            <div className="input-group-append">
                                <button className="btn btn-primary" onClick={searchRepos} type="button">search repositories</button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <h1 className='text-center text-primary mt-0'>Results for: {user}</h1>
                        {repos.map((repo) => {
                            <Card key={repo.id} repos={repo} />
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}