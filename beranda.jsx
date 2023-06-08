import React from 'react'
import Navbar from './Navbar';

class Beranda extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="hero min-h-screen" style={{ backgroundImage: `url("image/bg.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CupCake by Bianca</h1>
                        <p className="mb-5">cupcake sprinkle.id</p>
                        <button className="btn btn-ghost"><a href='/karya'>Get Started</a></button>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Beranda;