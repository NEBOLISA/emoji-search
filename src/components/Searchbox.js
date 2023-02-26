import React, { useState, useEffect } from "react";
import Emojibox from "./Emojibox";
function Searchbox() {
  const [data, setData] = useState([]);
  const [valueHolder, setvalueHolder] = useState([]);

  useEffect(() => {
    fetch(
      "https://emoji-api.com/emojis?access_key=60f8517f434747a32430aa08724df6b274a01d70"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  useEffect(() => {
    fetch(
      "https://emoji-api.com/emojis?access_key=60f8517f434747a32430aa08724df6b274a01d70"
    )
      .then((res) => res.json())
      .then((res) => setvalueHolder(res));
  }, []);
  const [search, setSearch] = useState("");
  let handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value !== "") {
      let filteredEmoji = data.filter((e) => {
        return e.unicodeName.includes(search);
      });
      setData(filteredEmoji);
    } else {
      setData(valueHolder);
    }
  };

  return (
    <div>
      <div className="search-div">
        <input
          className="search-box"
          placeholder="Search Emoji"
          type="text"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <Emojibox emojiValue={data} />
    </div>
  );
}

export default Searchbox;
