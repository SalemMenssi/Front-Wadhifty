import React from "react";
import JobTable from "../../components/Admin/JobTable";

const Jobs = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <JobTable />
    </div>
  );
};

export default Jobs;
