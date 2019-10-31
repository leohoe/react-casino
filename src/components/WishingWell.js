import React, {Component} from 'react'

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../reducer';

class WishingWell extends Component {

    throwChipInWell = () => {
        this.props.adjustChips(-1);
        this.props.adjustChipsInWishingWell(1);
    }

    retrieveAllChipsFromWell = () => {
        this.props.adjustChips(this.props.chipsInWishingWell);
        this.props.adjustChipsInWishingWell(-1 * this.props.chipsInWishingWell);
    }

    getWellStatusString = () => {
        switch (this.props.chipsInWishingWell) {
            case 0:
                return "Der Brunnen ist leer.";
            case 1:
                return "Es  liegt ein Chip im Brunnen.";
            default:
                return "Es liegen " + this.props.chipsInWishingWell + " Chips im Brunnen.";
        }
    }

    render() {
        return (
            <div>
                <h2>Wünschbrunnen</h2>
                {this.props.chips > 0 ? (
                    <label>
                        <p>Werfe einen Chip in den Brunnen und wünsch dir was!</p>
                        <button disabled={this.props.chips < 1} onClick={() => this.throwChipInWell()}>
                            Auf gut Glück
                        </button>
                    </label>
                ) : (
                    <label>
                        <p>Du hast keine Chips mehr. Kein Glück heute, hm?</p>
                        <button disabled={this.props.chipsInWishingWell < 1} onClick={() => this.retrieveAllChipsFromWell()}>
                        {this.props.chipsInWishingWell > 1 ? "Fische die Chips aus dem Brunnen." : "Verdammt."}
                        </button>
                    </label>
                )}
                <div>
                    {this.getWellStatusString()}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishingWell)