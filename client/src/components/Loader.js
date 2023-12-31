import React from 'react';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center' style={{paddingTop: '2 rem'}}>
        <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                    <div className="circle"/>
                </div>
                <div className="gap-patch">
                    <div className="circle"/>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Loader;