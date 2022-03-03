import React, { useState } from 'react';
import { Card } from '../Card';

export function Main() {

    const [repos, setRepos] = useState([]);
    const [value, setValue] = useState('');


    function searchRepos () {
        fetch(`https://api.github.com/users/${value}/repos`)
            .then(resp => {
                setRepos(resp);
            })
    }

    return (
        <div>
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter the username" value={value} onChange={(e) => setValue(e.target.value)} />
                            <div class="input-group-append">
                                <button class="btn btn-primary" onClick={searchRepos} type="button">search repositories</button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <h1 className='text-center text-primary mt-0'>Results for: {value}</h1>
                        {repos.map((repo) => {
                            <Card key={repo.id} repos={repo} />
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}