import React from "react";

export function Modal({ fav }) {
    return (
        <div>
            <a type="button" className="" data-toggle="modal" data-target="#exampleModal">
                View favorites repositories
            </a>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-primary font-weight-bold" id="exampleModalLabel">Favorites repositories</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <span>{fav}</span><p className="text-right"> <a href="#" role="button" className="btn btn-danger popover-test text-right" title="Remove of favorites"><i className="fa-solid fa-trash-can"></i></a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i>  Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}