// components/Profile.js
import React, { useEffect, useState } from 'react';
import { getProfile, updateProfile } from '../Admin/services/api';
import useAuthCheck from '../authentication/useAuthCheck';
const Profile = () => {
  const isLoggedIn = useAuthCheck();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      getProfile()
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.response?.data || 'Error fetching profile');
          setLoading(false);
        });
    }
  }, [isLoggedIn]);

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    updateProfile(newUser)
      .then(response => {
        setUser(response.data);
        setEditMode(false);
      })
      .catch(error => {
        setError(error.response?.data || 'Error updating profile');
      });
  };

  if (loading) return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="w-full h-screen flex items-center justify-center">{error}</div>;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl mb-4">Profile</h1>
        {!editMode ? (
          <div>
            <p>Username: {user.username}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Created On: {user.created}</p>


            {/* Add other user details as needed */}
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          </div>
        ) : (
          <div>
            <input
              className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              value={newUser.username || user.username}
              onChange={handleChange}
            />
            <input
              className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              value={newUser.email || user.email}
              onChange={handleChange}
            />
            {/* Add other editable fields as needed */}
            <button
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
