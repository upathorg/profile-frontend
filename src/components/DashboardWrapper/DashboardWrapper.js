import React from "react";
import Sidebar from "../Sidebar";
import "./styles.scss";

export default function DashboardWrapper({ children, className }) {
  return (
    <div className="dashboard__root">
      <Sidebar />
      <section className={`w-100 overflow-auto ${className}`}>
        {children}
      </section>
    </div>
  );
}
