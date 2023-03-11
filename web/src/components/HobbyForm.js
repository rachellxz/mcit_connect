/* eslint-disable */
import React from "react";
import HobbyStyles from "../HobbyForm.module.css";
import "../match.css";

class HobbyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                "Hiking/Outdoors",
                "Video Games",
                "Shopping",
                "Photography",
                "Sports",
                "Gardening",
                "Music",
                "Cooking",
                "Board Games",
                "Reading",
                "Yoga/Pilates",
                "Gym/Workout",
            ],
            selectedOptions: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ],
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

        this.props.setSelectedHobbyList(list);
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
            setSelectedHobbyList,
            handleIsVisibleL,
            handleIsVisibleR,
        } = this.props;
        if (window.innerWidth > 700) {
            return (
                <div>
                    <div>
                        <h2
                            className={`${HobbyStyles.SemiBoldFont} ${HobbyStyles.Question}`}
                        >
                            Hobbies/Activities You Enjoy
                        </h2>
                    </div>

                    <div className={HobbyStyles.SelectionGroup}>
                        <div className={HobbyStyles.Row}>
                            <div
                                className={
                                    this.state.selectedOptions[0]
                                        ? `${HobbyStyles.SelectedButtonBig}`
                                        : `${HobbyStyles.UnselectedButtonBig}`
                                }
                                onClick={() => this.handleSelectionChange(0)}
                            >
                                <text>{`${this.state.options[0]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[1]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(1)}
                            >
                                <text>{`${this.state.options[1]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[2]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(2)}
                            >
                                <text>{`${this.state.options[2]}`}</text>
                            </div>
                        </div>
                        <div className={HobbyStyles.Row}>
                            <div
                                className={
                                    this.state.selectedOptions[3]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(3)}
                            >
                                <text>{`${this.state.options[3]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[4]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(4)}
                            >
                                <text>{`${this.state.options[4]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[5]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(5)}
                            >
                                <text>{`${this.state.options[5]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[6]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(6)}
                            >
                                <text>{`${this.state.options[6]}`}</text>
                            </div>
                        </div>
                        <div className={HobbyStyles.Row}>
                            <div
                                className={
                                    this.state.selectedOptions[7]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(7)}
                            >
                                <text>{`${this.state.options[7]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[8]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(8)}
                            >
                                <text>{`${this.state.options[8]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[9]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(9)}
                            >
                                <text>{`${this.state.options[9]}`}</text>
                            </div>
                        </div>
                        <div className={HobbyStyles.Row}>
                            <div
                                className={
                                    this.state.selectedOptions[10]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(10)}
                            >
                                <text>{`${this.state.options[10]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[11]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(11)}
                            >
                                <text>{`${this.state.options[11]}`}</text>
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
        } else {
            return (
                <div>
                    <div>
                        <h2
                            className={`${HobbyStyles.SemiBoldFont} ${HobbyStyles.Question}`}
                        >
                            Hobbies/Activities You Enjoy
                        </h2>
                    </div>

                    <div className={HobbyStyles.SelectionGroup}>
                        <div className={HobbyStyles.Column}>
                            <div
                                className={
                                    this.state.selectedOptions[0]
                                        ? `${HobbyStyles.SelectedButtonBig}`
                                        : `${HobbyStyles.UnselectedButtonBig}`
                                }
                                onClick={() => this.handleSelectionChange(0)}
                            >
                                <text>{`${this.state.options[0]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[1]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(1)}
                            >
                                <text>{`${this.state.options[1]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[2]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(2)}
                            >
                                <text>{`${this.state.options[2]}`}</text>
                            </div>
                        </div>
                        <div className={HobbyStyles.Column}>
                            <div
                                className={
                                    this.state.selectedOptions[3]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(3)}
                            >
                                <text>{`${this.state.options[3]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[4]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(4)}
                            >
                                <text>{`${this.state.options[4]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[5]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(5)}
                            >
                                <text>{`${this.state.options[5]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[6]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(6)}
                            >
                                <text>{`${this.state.options[6]}`}</text>
                            </div>
                        </div>
                        <div className={HobbyStyles.Column}>
                            <div
                                className={
                                    this.state.selectedOptions[7]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(7)}
                            >
                                <text>{`${this.state.options[7]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[8]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(8)}
                            >
                                <text>{`${this.state.options[8]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[9]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(9)}
                            >
                                <text>{`${this.state.options[9]}`}</text>
                            </div>
                        </div>
                        <div className={HobbyStyles.Column}>
                            <div
                                className={
                                    this.state.selectedOptions[10]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(10)}
                            >
                                <text>{`${this.state.options[10]}`}</text>
                            </div>
                            <div
                                className={
                                    this.state.selectedOptions[11]
                                        ? `${HobbyStyles.SelectedButton}`
                                        : `${HobbyStyles.UnselectedButton}`
                                }
                                onClick={() => this.handleSelectionChange(11)}
                            >
                                <text>{`${this.state.options[11]}`}</text>
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
}

export default HobbyForm;
