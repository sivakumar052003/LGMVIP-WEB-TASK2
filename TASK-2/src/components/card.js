import React, { useEffect, useState } from "react";
import fetchUsersfromAPI from "./FetchAPI";

const Users = () => {
  const [loading, setLoading] = useState(false); // State to track loading status
  const [userData, setUserData] = useState([]); // State to store fetched user data

  const fetchData = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const users = await fetchUsersfromAPI(); // Fetch user data from the API
      setUserData(users); // Update the user data state

      setTimeout(() => {
        setLoading(false); // Set loading to false after a delay
      }, 2000); // Delay in milliseconds (e.g., 3000ms = 3 seconds)
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false if an error occurs
    }
  };

  useEffect(() => {
    setUserData([]); // Clear the user data when the component mounts or reloads
  }, []);  // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <div className="my-api">My API</div>
      <p className="created-by">created by : Padmesh Khanwilkar</p>
      <button className="get-users" onClick={fetchData}>
        Get Users
      </button>
      {loading ? ( // Conditional rendering based on the loading state
        <div className="loader"></div>
      ) : (
        <div>
          {userData.map((user) => (
            <div className="user-item" key={user.id}>
              <img src={user.avatar} alt={user.avatar} className="avatar" />
              <div className="right-section">
                <h1>
                  {user.first_name} {user.last_name}
                </h1>
                <p>ID: {user.id}</p>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
