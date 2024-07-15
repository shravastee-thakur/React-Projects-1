import React, { useEffect, useState } from "react";
import User from "./User";

const GithubProfile = () => {
  const [username, setUsername] = useState("shravastee-thakur");
  const [userData, setUserData] = useState(null);

  const fetchGithub = async () => {
    const api = await fetch(`https://api.github.com/users/${username}`);
    const response = await api.json();

    if (response) {
      setUserData(response);
      setUsername("");
    }
  };

  const handleSubmit = () => {
    fetchGithub();
  };

  useEffect(() => {
    fetchGithub();
  }, []);
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search"
          placeholder="Search github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfile;
