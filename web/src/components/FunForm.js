/* eslint-disable */
import React from "react";
import FunStyles from "../FunForm.module.css";

class FunForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["spaces", "tabs"],
            selectedOptions: [false, false],
        };
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
            languages,
            classes,
            twoSums,
            setSelectedSpacesTabs,
            handleLanguagesChange,
            handleClassesChange,
            handleTwoSumsChange,
            handleFormSubmit,
        } = this.props;

        return (
            <div className={FunStyles.Content}>
                <div
                    className={`${FunStyles.Question1Block} ${FunStyles.RegularFont}`}
                >
                    <text>What is your favorite language and IDE?</text>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <label>
                            <input
                                className={`${FunStyles.TransparentInput} ${FunStyles.RegularFont}`}
                                type="text"
                                value={languages}
                                onChange={handleLanguagesChange}
                            />
                        </label>
                    </form>
                    <text>What is you favorite CIT class?</text>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <label>
                            <input
                                className={`${FunStyles.TransparentInput} ${FunStyles.RegularFont}`}
                                type="text"
                                value={classes}
                                onChange={handleClassesChange}
                            />
                        </label>
                    </form>
                    <div className={FunStyles.QRow}>
                        <text>Spaces or tabs?</text>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${FunStyles.SelectedButton}`
                                    : `${FunStyles.UnselectedButton}`
                            }
                            onClick={() => {
                                this.handleSelectionChange(0);
                                // this.updateSelection();
                            }}
                        >
                            <text>spaces</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${FunStyles.SelectedButton}`
                                    : `${FunStyles.UnselectedButton}`
                            }
                            onClick={() => {
                                this.handleSelectionChange(1);
                                // this.updateSelection();
                            }}
                        >
                            <text>tabs</text>
                        </div>
                    </div>

                    <div className={FunStyles.TwoSumsBlock}>
                        <div className={FunStyles.TwoSumsQ}>
                            Try doing this <a href="https://leetcode.com/problems/two-sum/" target="_blank"> "Two Sum" </a> Question 😜
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <label>
                                <textarea
                                    className={`${FunStyles.TwoSumsA} ${FunStyles.RegularFont}`}
                                    type="textarea"
                                    value={twoSums}
                                    onChange={handleTwoSumsChange}
                                />
                            </label>
                        </form>
                    </div>
                    <button
                        className={FunStyles.SubmitButton}
                        onClick={() => {
                            const updateSelection = new Promise((resolve) => {
                                var list = [];
                                for (
                                    var i = 0;
                                    i < this.state.selectedOptions.length;
                                    i++
                                ) {
                                    if (this.state.selectedOptions[i]) {
                                        list.push(this.state.options[i]);
                                    }
                                }

                                this.props.setSelectedSpacesTabs(list);

                                resolve();
                            });

                            updateSelection.then((results) => {
                                this.props.handleFormSubmit();
                            });
                        }}
                    ></button>
                </div>
            </div >
        );
    }
}

export default FunForm;
