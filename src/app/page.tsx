
import { HomeView } from "@/views/HomeView";
import React from "react";

const HomePage = React.memo(() => {
  return <HomeView />;
});

export default HomePage;
HomePage.displayName = "HomePage";
