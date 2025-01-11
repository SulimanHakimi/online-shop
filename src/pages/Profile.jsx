import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Suliman Hakimi",
    email: "afgsuliman50@gmail.com",
    phone: "+93 784 966 018",
    address: "123 Main St, Springfield",
  });

  const [editedUser, setEditedUser] = useState(user);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) setUser(editedUser);
  };

  const handleChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6 max-w-xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEp4qksSwNcXw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731496707875?e=1741824000&v=beta&t=abF7hMg1PPIxwNPvM_BB82xZqaTgbwDl3hCOqUpdAko"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <hr className="my-6" />

        {/* Profile Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={editedUser.phone}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={editedUser.address}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
            </div>
          )}
        </div>

        <hr className="my-6" />

        {/* Edit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleEditToggle}
            className={`py-2 px-6 rounded-lg ${
              isEditing
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
