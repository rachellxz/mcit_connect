/* eslint-disable */
import React from "react";
import CuisineStyle from "../CuisineForm.module.css";
import "../match.css";

class CuisineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                "Indian",
                "Chinese",
                "Italian",
                "Mexican",
                "Mediterranean",
                "American",
                "Korean",
                "Japanese",
                "Thai",
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
                false
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

        this.props.setSelectedCuisineList(list);
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
            setSelectedCuisineList,
            handleIsVisibleL,
            handleIsVisibleR,
        } = this.props;
        return (
            <div>
                <div>
                    <h2
                        className={`${CuisineStyle.SemiBoldFont} ${CuisineStyle.Question}`}
                    >
                        Favorite Cuisine
                    </h2>
                </div>

                <div className={CuisineStyle.SelectionGroup}>
                    <div className={CuisineStyle.Row}>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            <text>Indian</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            <text>Chinese</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[2]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(2)}
                        >
                            <text>Italian</text>
                        </div>
                    </div>
                    <div className={CuisineStyle.Row}>
                        <div
                            className={
                                this.state.selectedOptions[3]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(3)}
                        >
                            <text>Mexican</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[4]
                                    ? `${CuisineStyle.SelectedButtonBig}`
                                    : `${CuisineStyle.UnselectedButtonBig}`
                            }
                            onClick={() => this.handleSelectionChange(4)}
                        >
                            <text>Mediterranean</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[5]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(5)}
                        >
                            <text>American</text>
                        </div>
                    </div>
                    <div className={CuisineStyle.Row}>
                        <div
                            className={
                                this.state.selectedOptions[6]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(6)}
                        >
                            <text>Korean</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[7]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(7)}
                        >
                            <text>Japanese</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[8]
                                    ? `${CuisineStyle.SelectedButton}`
                                    : `${CuisineStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(8)}
                        >
                            <text>Thai</text>
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

export default CuisineForm;
