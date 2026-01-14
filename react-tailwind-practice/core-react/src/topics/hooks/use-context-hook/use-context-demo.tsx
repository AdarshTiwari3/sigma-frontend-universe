import { useState } from "react";
import { AppContext } from "./context";
import UserProfile from "./user-profile";

export interface User {
  name: string;
  isAdmin: boolean;
}
const UseContextDemo = () => {
  const [user] = useState<User>({
    name: "Ronny",
    isAdmin: false,
  });
  return (
    <AppContext.Provider value={user}>
      <div className="p-8">
        <div>
          <h2 className="text-center">Use Context Demo</h2>
        </div>
        <UserProfile />
      </div>
    </AppContext.Provider>
  );
};
export default UseContextDemo;
