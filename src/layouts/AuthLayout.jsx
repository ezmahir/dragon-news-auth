import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>AuthLayyy</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
