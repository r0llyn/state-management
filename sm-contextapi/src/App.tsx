import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { UserContext } from "./state/context";
import { User } from "./types/User";

function App() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "Iceman",
  });
  return (
    <>
      {/*<Dashboard user={user} />*/}
      {/*<Profile user={user} />*/}
      <UserContext.Provider value={user}>
        <Dashboard />
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default App;
