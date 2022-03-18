/*


import React, { useContext, useEffect, useState } from "react";

import { Admin } from "../interfaces/Admin";

export type UserContextType = Admin | null | undefined;

export interface UserContextState {
  user?: UserContextState;
  setUser: React.Dispatch<React.SetStateAction<UserContextType>>;
  refreshUser: () => void;
}

export const UserContext = React.createContext<UserContextState>(null!);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within the UserProvider component"
    );
  }
  return context;
};

interface UserProviderProps {
  children: JSX.Element;
}

export default function UserProvider(props: UserProviderProps): JSX.Element {
  const { children } = props;
  const [userContext, setUser] = useState<UserContextType>(undefined);

  const { currentUser, getCurrentUser } = useGetCurrentUser();

  return (
    <UserContext.Provider
      value={{
        user: userContext,
        setUser,
        refreshUser: getCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

*/
export {};
