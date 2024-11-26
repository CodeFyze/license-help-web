"use client";
import { useState } from "react";
import { MdDashboard, MdAccountBalanceWallet, MdGroup, MdFeedback, MdHelp } from "react-icons/md";
import DashboardComponent from "./DashboardComponent";
import WalletComponent from "./WalletComponent";
import InviteComponent from "./InviteComponent";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardComponent />;
      case "wallet":
        return <WalletComponent />;
      case "invite":
        return <InviteComponent />;
      default:
        return <DashboardComponent />; 
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-between h-screen w-56 bg-gray-800 p-4 text-white">
        <div className="space-y-4">
          <div
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center space-x-2 p-2 rounded-full cursor-pointer ${
              activeTab === "dashboard" ? "bg-white text-gray-800" : "bg-gray-700"
            }`}
          >
            <MdDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </div>
          <div
            onClick={() => setActiveTab("wallet")}
            className={`flex items-center space-x-2 p-2 rounded-full cursor-pointer ${
              activeTab === "wallet" ? "bg-white text-gray-800" : "bg-gray-700"
            }`}
          >
            <MdAccountBalanceWallet className="w-5 h-5" />
            <span className="text-sm font-medium">Wallet</span>
          </div>
          <div
            onClick={() => setActiveTab("invite")}
            className={`flex items-center space-x-2 p-2 rounded-full cursor-pointer ${
              activeTab === "invite" ? "bg-white text-gray-800" : "bg-gray-700"
            }`}
          >
            <MdGroup className="w-5 h-5" />
            <span className="text-sm font-medium">Invite</span>
          </div>
        </div>
        <div className="space-y-4 text-white mt-8">
          <div className="flex items-center space-x-2 cursor-pointer">
            <MdFeedback className="w-5 h-5" />
            <span className="text-sm">Give Feedback</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <MdHelp className="w-5 h-5" />
            <span className="text-sm">Support</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        {renderContent()}
      </div>
    </div>
  );
}
