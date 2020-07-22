import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../../actions/actions'

class BuyGame extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-dark btn-sm mb-2"
                        onClick={() => {
                             this.props.buy_pokemon_action(1);
                            }
                        }>
                    Buy
                </button>
                <button className="btn btn-dark btn-sm mb-1"
                        onClick={() => {
                            this.props.return_pokemon_action(1);
                        }}>
                    Return
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
};

export default connect(null, mapDispatchToProps)(BuyGame);