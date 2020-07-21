import React, { Component } from 'react';

class BuyGame extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-dark btn-sm mb-2">
                    Buy
                </button>
                <button className="btn btn-dark btn-sm mb-1">
                    Return
                </button>
            </div>
        )
    }
}

export default BuyGame;