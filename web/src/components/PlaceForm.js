/* eslint-disable */
import React from "react";
import PlaceStyles from "../PlaceForm.module.css";
import "../match.css";

class PlaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                "Big Cities",
                "Nature",
                "Architecture",
                "Leisure & Chill",
            ],
            selectedOptions: [false, false, false, false],
        };

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection() {
        var list = [];
        for (var i = 0; i < this.state.selectedOptions.length; i++) {
            if (this.state.selectedOptions[i]) {
                list.push(this.state.options[i]);
            }
        }

        this.props.setSelectedPlaceList(list);
    }

    handleSelectionChange(index) {
        const updatedSelection = this.state.selectedOptions.map(
            (isSelected, i) => {
                if (i === index) {
                    return !isSelected;
                } else {
                    return isSelected;
                }
            }
        );
        this.setState({ selectedOptions: updatedSelection });
    }

    render() {
        const {
            num,
            setSelectedPlaceList,
            handleIsVisibleL,
            handleIsVisibleR,
        } = this.props;
        return (
            <div>
                <div>
                    <h2
                        className={`${PlaceStyles.SemiBoldFont} ${PlaceStyles.Question}`}
                    >
                        Ideal Vacation
                    </h2>
                </div>

                <div className={PlaceStyles.SelectionGroup}>
                    <div className={PlaceStyles.Row}>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${PlaceStyles.SelectedButton}`
                                    : `${PlaceStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            <text>{`${this.state.options[0]}`}</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${PlaceStyles.SelectedButton}`
                                    : `${PlaceStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            <text>{`${this.state.options[1]}`}</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[2]
                                    ? `${PlaceStyles.SelectedButton}`
                                    : `${PlaceStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(2)}
                        >
                            <text>{`${this.state.options[2]}`}</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[3]
                                    ? `${PlaceStyles.SelectedButton}`
                                    : `${PlaceStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(3)}
                        >
                            <text>{`${this.state.options[3]}`}</text>
                        </div>
                    </div>
                </div>

                <button
                    className="ArrowL"
                    onClick={() => {
                        this.updateSelection();
                        this.props.handleIsVisibleL(num);
                    }}
                ></button>

                <button
                    className="ArrowR"
                    onClick={() => {
                        this.updateSelection();
                        this.props.handleIsVisibleR(num);
                    }}
                ></button>
            </div>
        );
    }
}

export default PlaceForm;
