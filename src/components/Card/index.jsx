import React from 'react';

export function Card(props) {

    return (
        <div class="col-md-4">
            <div className="card">
                <div className="card-header text-center text-primary font-weight-bold">
                    Repository informations
                </div>
                <div className="card-body">
                    <p className="card-text">Title:</p>
                    <p className="card-text">stars:</p>
                    <p className="card-text">forks:</p>
                    <p className="card-text">description:</p>
                </div>
                <div className="card-footer text-left">
                    <a href="#" className="btn btn-primary"><span className="fa-solid fa-thumbs-up"></span></a>
                </div>
            </div>
        </div>
    )
}