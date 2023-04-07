import React from "react";

// layout
import Layout from "@/src/layout/dashboard/Layout";
import Dashboard from "@/src/contents/dashboard/home";

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Home() {
  return <Dashboard />;
}
