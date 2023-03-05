/* eslint-disable */
import React from "react";
import DayStyles from "../DayForm.module.css";
import "../match.css";

class DayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["Morning", "Night"],
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

        this.props.setSelectedDayList(list);
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
            setSelectedDayList,
            handleIsVisibleL,
            handleIsVisibleR,
        } = this.props;
        return (
            <div>
                <div>
                    <h2
                        className={`${DayStyles.SemiBoldFont} ${DayStyles.Question}`}
                    >
                        Morning or Night person?
                    </h2>
                </div>

                <div className={DayStyles.SelectionGroup}>
                    <div className={DayStyles.Row}>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${DayStyles.SelectedButton}`
                                    : `${DayStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            <text>{`${this.state.options[0]}`}</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${DayStyles.SelectedButton}`
                                    : `${DayStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            <text>{`${this.state.options[1]}`}</text>
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

export default DayForm;
