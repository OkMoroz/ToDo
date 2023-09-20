import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const FollowersList = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=5");
    setFollowers(data.results);
  };

  return (
    <div className="followerslist-container">
      {followers.map((follower) => (
        <div className="follower-item" key={follower.login.uuid}>
          <img
            src={follower.picture.large}
            alt={`${follower.name.first} ${follower.name.last}`}
          />
          <div className="followers-details">
            <div className="follower-item-name">
              <h4>
                {follower.name.first} {follower.name.last}
              </h4>
            </div>
            <p>{follower.login.username}</p>
          </div>
        </div>
      ))}
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default FollowersList;
