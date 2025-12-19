import React, { useState } from "react";

const Profile = () => {
  // BASIC USER FROM LOGIN
  const authUser = JSON.parse(localStorage.getItem("user")) || {};

  // PROFILE DATA (SEPARATE)
  const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};

  const [profile, setProfile] = useState({
    name: authUser.name || "",
    email: authUser.email || "",
    phone: storedProfile.phone || "",
    gender: storedProfile.gender || "",
    dob: storedProfile.dob || "",
    bio: storedProfile.bio || "",
    city: storedProfile.city || "",
    state: storedProfile.state || "",
    country: storedProfile.country || "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // SAVE ONLY EXTRA PROFILE DETAILS
    const profileToSave = {
      phone: profile.phone,
      gender: profile.gender,
      dob: profile.dob,
      bio: profile.bio,
      city: profile.city,
      state: profile.state,
      country: profile.country,
    };

    localStorage.setItem("profile", JSON.stringify(profileToSave));
    alert("✅ Profile details saved successfully!");
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-100 to-purple-200 flex justify-center py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">

        
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center text-4xl font-bold">
            {profile.name.charAt(0).toUpperCase()}
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-8">
          My Profile
        </h2>

        
        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
          Basic Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={profile.name}
            disabled
            className="border p-2 rounded bg-gray-100"
          />

          <input
            value={profile.email}
            disabled
            className="border p-2 rounded bg-gray-100"
          />
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4 text-indigo-600">
          Personal Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-2 rounded"
          />

          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

   
        <h3 className="text-xl font-semibold mt-6 mb-4 text-indigo-600">
          Address
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="city"
            value={profile.city}
            onChange={handleChange}
            placeholder="City"
            className="border p-2 rounded"
          />
          <input
            name="state"
            value={profile.state}
            onChange={handleChange}
            placeholder="State"
            className="border p-2 rounded"
          />
          <input
            name="country"
            value={profile.country}
            onChange={handleChange}
            placeholder="Country"
            className="border p-2 rounded"
          />
        </div>

        
        <button
          onClick={handleSave}
          className="mt-8 w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          Save Profile Details
        </button>
      </div>
    </div>
  );
};

export default Profile;
