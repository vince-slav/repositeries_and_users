import React from 'react';
import { Modal } from '../Modal';


export function Header() {
    return (
        <div>
            <header>
                <div className="navbar navbar-dark bg-primary shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Test Thalles</strong>
                        </a>
                        <Modal/>
                    </div>
                </div>
            </header>
        </div>
    );
}