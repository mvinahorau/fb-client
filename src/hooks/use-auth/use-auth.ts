import * as React from "react";
import { AuthContext } from "components/auth-provider/duck";

const useAuth = () => React.useContext(AuthContext);

export default useAuth;
