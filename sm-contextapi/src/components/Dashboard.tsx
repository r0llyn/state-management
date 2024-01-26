import { useUserContext } from "../state/context";

function Dashboard() {
  const user = useUserContext();

  return (
    <div className="card">
      <h1>User: {user.name}</h1>
      <p>Subscribed Status: {"" + user.isSubscribed}</p>
    </div>
  );
}

export default Dashboard;
