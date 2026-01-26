import { Navigate } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const NetworkCheck = ({ children }) => {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <Navigate to="/network-error" replace />;
  }

  return children;
};

export default NetworkCheck;
