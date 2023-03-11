import React from "react";
// import { Text } from "react-native";
import BLeft from "../assets/Bottom_Left.png";
import BRight from "../assets/Bottom_Right.png";
import TRight from "../assets/Top_Right.png";
import text_bcg from "../assets/test_bcg.png";

const FinishPage = () => {
    return (
        <div className="homepage App">
            <h2 className="Title">CIT CONNECT</h2>
            <div className="myText">
                <p className="mainLink">Thanks for your response!</p>
            </div>
            <img className="BLeft" src={BLeft} alt="Beautiful" />
            <img className="BRight" src={BRight} alt="Rock" />
            <img className="TRight" src={TRight} alt="Rocks" />
            <img className="text_bcg" src={text_bcg} alt="Should be bcg" />
        </div>
    );
};

export default FinishPage;
