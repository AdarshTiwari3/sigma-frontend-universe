import { useUserContext } from "./context";

const AdminPanel = () => {
  const user = useUserContext();
  return (
    <div>
      <h3>Admin Panel</h3>
      <p>isAdmin:{user.isAdmin ? " Admin" : " User"}</p>
    </div>
  );
};

export default AdminPanel;
