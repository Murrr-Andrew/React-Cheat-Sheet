import { useParams } from "react-router-dom";

import Nav from "./Nav";

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <Nav />
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

export default UserProfile;
