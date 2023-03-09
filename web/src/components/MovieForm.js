/* eslint-disable */
import React from "react";
import MovieStyles from "../MovieForm.module.css";
import "../match.css";

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                "Action",
                "Horror",
                "Sci-fi",
                "Romance",
                "Drama",
                "Anime",
                "Comedy",
                "Sit-com",
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

        this.props.setSelectedMovieList(list);
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
            setSelectedMovieList,
            handleIsVisibleL,
            handleIsVisibleR,
        } = this.props;
        return (
            <div>
                <div>
                    <h2
                        className={`${MovieStyles.SemiBoldFont} ${MovieStyles.Question}`}
                    >
                        Favorite TV/Movie Genre
                    </h2>
                </div>

                <div className={MovieStyles.SelectionGroup}>
                    <div className={MovieStyles.Column}>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            <text>Action</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            <text>Horror</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[2]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(2)}
                        >
                            <text>Sci-fi</text>
                        </div>
                    </div>
                    <div className={MovieStyles.Column}>
                        <div
                            className={
                                this.state.selectedOptions[3]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(3)}
                        >
                            <text>Romance</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[4]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(4)}
                        >
                            <text>Drama</text>
                        </div>
                    </div>
                    <div className={MovieStyles.Column}>
                        <div
                            className={
                                this.state.selectedOptions[5]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(5)}
                        >
                            <text>Anime</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[6]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(6)}
                        >
                            <text>Comedy</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[7]
                                    ? `${MovieStyles.SelectedButton}`
                                    : `${MovieStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(7)}
                        >
                            <text>Sit-com</text>
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

export default MovieForm;
