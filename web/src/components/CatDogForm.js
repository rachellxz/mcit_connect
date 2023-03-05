/* eslint-disable */
import React from "react";
import CatDogStyle from "../CatDogForm.module.css";
import "../match.css";

class CatDogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["Cats", "Dogs"],
            selectedOptions: [false, false],
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

        this.props.setSelectedCatDogList(list);
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
            setSelectedCatDogList,
            handleIsVisibleL,
            handleIsVisibleR,
        } = this.props;
        return (
            <div>
                <div>
                    <h2
                        className={`${CatDogStyle.SemiBoldFont} ${CatDogStyle.Question}`}
                    >
                        Cats or Dogs?
                    </h2>
                </div>

                <div className={CatDogStyle.SelectionGroup}>
                    <div className={CatDogStyle.Row}>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${CatDogStyle.SelectedButton}`
                                    : `${CatDogStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            {`${this.state.options[0]}`}
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${CatDogStyle.SelectedButton}`
                                    : `${CatDogStyle.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            {`${this.state.options[1]}`}
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

export default CatDogForm;
