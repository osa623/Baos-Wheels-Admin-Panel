import React from "react";
import Navbar from "../Components/Navbar";

const Admin_Dashboard = () => {
  return (
    <div className="relative h-screen w-full bg-baseextra5">
      <Navbar />
      <div className="pt-16 flex flex-col h-full w-full p-4">
        {/* Flex container for horizontal layout */}
        <div className="flex w-full gap-4 mb-4">
          {/* Articles Container */}
          <div className="flex-1 flex flex-col items-center p-4">
            <div className="w-full min-h-[400px] rounded-lg shadow-lg bg-baseextra4 flex flex-col items-center justify-start relative overflow-hidden">
              <h2 className="text-white font-russoone text-3xl font-bold mt-4 mb-2">
                Articles
              </h2>
              <div className="w-1/2 h-1 bg-baseprimary animate-pulse"></div>
              <div className="absolute inset-0 rounded-lg shadow-lg glow-effect"></div>
            </div>
          </div>
          {/* Reviews Container */}
          <div className="flex-1 flex flex-col items-center p-4">
            <div className="w-full min-h-[400px] rounded-lg shadow-lg bg-baseextra4 flex flex-col items-center justify-start relative overflow-hidden">
              <h2 className="text-white font-russoone text-3xl font-bold mt-4 mb-2">
                Reviews
              </h2>
              <div className="w-1/2 h-1 bg-baseprimary animate-pulse"></div>
              <div className="absolute inset-0 rounded-lg shadow-lg glow-effect"></div>
            </div>
          </div>
        </div>
        {/* Logins Container */}
        <div className="w-full flex justify-center">
          <div className="w-full h-[200px] rounded-lg shadow-lg bg-baseextra4 flex flex-col items-center justify-start relative overflow-hidden">
            <h2 className="text-white font-russoone text-3xl font-bold mt-4 mb-2">
              Logins
            </h2>
            <div className="w-1/2 h-1 bg-baseprimary animate-pulse"></div>
            <div className="absolute inset-0 rounded-lg shadow-lg glow-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Dashboard;
