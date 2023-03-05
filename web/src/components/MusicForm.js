/* eslint-disable */
import React from "react";
import MusicStyles from "../MusicForm.module.css";
import "../match.css";

class MusicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                "Pop",
                "Classical",
                "Hip Hop",
                "EDM",
                "Jazz",
                "Rock",
                "Country",
            ],
            selectedOptions: [false, false, false, false, false, false, false],
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

        this.props.setSelectedMusicList(list);
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
            setSelectedMusicList,
            handleIsVisibleL,
            handleIsVisibleR,
        } = this.props;
        return (
            <div>
                <div>
                    <h2
                        className={`${MusicStyles.SemiBoldFont} ${MusicStyles.Question}`}
                    >
                        Favorite Music Genre
                    </h2>
                </div>

                <div className={MusicStyles.SelectionGroup}>
                    <div className={MusicStyles.Column}>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${MusicStyles.SelectedButton}`
                                    : `${MusicStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            <text>Pop</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${MusicStyles.SelectedButton}`
                                    : `${MusicStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            <text>Classical</text>
                        </div>
                    </div>
                    <div className={MusicStyles.Column}>
                        <div
                            className={
                                this.state.selectedOptions[2]
                                    ? `${MusicStyles.SelectedButton}`
                                    : `${MusicStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(2)}
                        >
                            <text>Hip Hop</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[3]
                                    ? `${MusicStyles.SelectedButton}`
                                    : `${MusicStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(3)}
                        >
                            <text>EDM</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[4]
                                    ? `${MusicStyles.SelectedButton}`
                                    : `${MusicStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(4)}
                        >
                            <text>Jazz</text>
                        </div>
                    </div>
                    <div className={MusicStyles.Column}>
                        <div
                            className={
                                this.state.selectedOptions[5]
                                    ? `${MusicStyles.SelectedButton}`
                                    : `${MusicStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(5)}
                        >
                            <text>Rock</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[6]
                                    ? `${MusicStyles.SelectedButton}`
                                    : `${MusicStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(6)}
                        >
                            <text>Country</text>
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

export default MusicForm;
