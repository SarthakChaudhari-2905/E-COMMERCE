import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    gender: user?.gender || "male",
  });

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  // Default avatars
  const defaultMale = "https://cdn-icons-png.flaticon.com/512/147/147144.png";
  const defaultFemale = "https://cdn-icons-png.flaticon.com/512/2922/2922561.png";

  const profileImage =
    user.avatar || (form.gender === "female" ? defaultFemale : defaultMale);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...form };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
    window.location.reload(); // Refresh to reflect changes
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile Picture */}
        <div className="profile-avatar">
          <img src={profileImage} alt="profile" />
        </div>

        {/* User Info */}
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <span className={`profile-role ${user.role}`}>
          {user.role?.toUpperCase()}
        </span>

        {/* Extra Details */}
        <div className="profile-info">
          <p>
            <strong>Joined:</strong>{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
          <p>
            <strong>Gender:</strong> {form.gender}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          <button className="btn edit-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
          <button className="btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <form onSubmit={handleEditSubmit} className="edit-form">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                required
              />
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="modal-actions">
                <button type="submit" className="btn save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="btn cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
