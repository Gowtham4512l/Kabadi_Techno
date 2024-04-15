import React, { useState } from "react"

import "../../styles/About_Votes.css"

const Votes = () => {
    const [numYes, setNumYes] = useState(0);
    const [numNo, setNumNo] = useState(0);
    const [numVotes, setNumVotes] = useState(0);

    const postVote = (vote) => {
        if (vote === "Yes") {
            setNumYes(numYes + 1);
        } else if (vote === "No") {
            setNumNo(numNo + 1);
        }
        setNumVotes(numVotes + 1);
    };

    return (
        <div className="voting_section">
            <h1>Your Vote is Valuable</h1>
            <div className="voting">
                <h1>
                    We’d love to hear your valuable suggestions! If you feel our service
                    adds value to your life, please click on “Yes, I need this service”.
                    If you feel you don’t require our services, please click on “No, I
                    don’t need this service”. Your response will help us understand your
                    requirements better. Please note that we don’t collect email
                    addresses by default. Please leave your contact details or your
                    suggestions after voting if you’re interested!
                </h1>

                <div className="vote_section">
                    <div className="vote">
                        <button name="Yes" value="Yes" onClick={() => postVote("Yes")}>
                            Yes, I need this service
                        </button>
                        <p>{numYes}</p>
                    </div>

                    <h1>
                        Total Vote
                        <br />
                        <span>{numVotes}</span>
                    </h1>

                    <div className="vote">
                        <button name="No" value="No" onClick={() => postVote("No")}>
                            No, I don"t need this service
                        </button>
                        <p>{numNo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Votes
