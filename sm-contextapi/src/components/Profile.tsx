//({ user }: UserProps

import { useUserContext } from "../state/context";

function Profile() {
  const user = useUserContext();
  console.log(user);

  return (
    <div className="card">
      <h1>User: {user.name}</h1>
      <p>Subscribed: {"" + user.isSubscribed}</p>
    </div>
  );
}

export default Profile;
