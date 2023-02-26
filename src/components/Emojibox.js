import React from "react";

function Emojibox({ emojiValue }) {
  return (
    <div className="container">
      {emojiValue.map((value, index) => (
        <div
          className="emoji-div"
          onClick={() => {
            let emoji = value.character;
            navigator.clipboard.writeText(emoji);
          }}
          key={`emoji-${index}`}
        >
          <p className="emoji-picture">{value.character}</p>
          <p className="emoji-name">{value.unicodeName}</p>
          <p className="hide"> Click to copy emoji</p>
        </div>
      ))}
    </div>
  );
}

export default Emojibox;
