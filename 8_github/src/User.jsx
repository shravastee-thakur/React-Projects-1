import React from "react";

const User = ({user}) => {
  const { avatar_url, followers, following, public_repos, name, login} = user;
  return (
    <div className="user">
        <div className="image">
            <img src={avatar_url} className="avatar" />
        </div>
        <div className="name-container">
            <a href={`https://github.com/${login}`}>{name || login}</a>
        </div>

        <div className="profile-info">
        <div>
            <p>Public Repos: {public_repos}</p>
        </div>
        <div>
            <p>Followers: {followers}</p>
        </div>
        <div>
            <p>Following: {following}</p>
        </div>
        </div>
    </div>
  )
};

export default User;
