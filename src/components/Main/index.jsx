import React, { useEffect, useState } from 'react';
import { Card } from '../Card';

export function Main() {

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((resp) => setUsers(resp))
    }, []);
    console.log(resp);
    return (
        <div>
            
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <div class="input-group mb-3">
                            <select className="custom-select" name='users'>
                                {users.map((user) => {
                                    return (
                                        <option value={user.id}>{user.login}</option>

                                    )
                                    console.log(user);
                                })}
                            </select>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">search repositories</button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <h1 className='text-center text-primary mt-0'>Results for: </h1>
                        <Card />
                    </div>
                </div>
            </main>
        </div>
    )
}