import React from "react";
import ApplicationsTable from "../../components/Admin/ApplicationsTable";

const Applications = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ApplicationsTable />
    </div>
  );
};

export default Applications;
