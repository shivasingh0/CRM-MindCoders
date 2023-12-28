import React from "react";
import InnerLayout from "../../components/InnerLayout";
import TableComponent from "./AdmissionTable";

const Admissions = () => {
  return (
    <>
      {/* <InnerLayout Component={TableComponent} /> */}
      <InnerLayout>
        <TableComponent/>
      </InnerLayout>
    </>
  );
};

export default Admissions;
