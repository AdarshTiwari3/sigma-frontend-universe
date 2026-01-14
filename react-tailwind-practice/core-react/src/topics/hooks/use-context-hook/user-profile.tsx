import AdminPanel from "./admin-panel";
import { useUserContext } from "./context";

const UserProfile = () => {
  const user = useUserContext();
  return (
    <div>
      <h3>User Profile</h3>
      <p>{user.name}</p>
      <AdminPanel />
    </div>
  );
};
export default UserProfile;
