import React from "react";
import Topbar from "components/Topbar";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      {children}
      <Topbar />
    </>
  );
};

export default Layout;
