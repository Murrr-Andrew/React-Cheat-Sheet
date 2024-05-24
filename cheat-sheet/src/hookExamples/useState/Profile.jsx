import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    age: 0,
    name: "",
    city: "",
  });

  const updateProfile = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={profile.name}
            onChange={(e) => updateProfile("name", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={profile.age}
            onChange={(e) => updateProfile("age", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            type="text"
            value={profile.city}
            onChange={(e) => updateProfile("city", e.target.value)}
          />
        </label>
      </div>
      <p>
        {profile.name} is {profile.age} years old and lives in {profile.city}.
      </p>
    </div>
  );
}

export default Profile;
