import React from "react";
import UserTable from "../../components/Admin/UserTable";

const UsersMap = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <UserTable />
    </div>
  );
};

export default UsersMap;
