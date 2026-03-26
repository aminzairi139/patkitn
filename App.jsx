import React, { useState } from "react";
import "./App.css";
import { LoginPage, Dashboard } from "./components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialReservations = [
    {
      id: 1,
      fullName: "khalil zairi",
      cin: "21435678",
      plateNumber: "13-TUN-255",
      subscriptionType: "1 heure",
      date: "2023-10-15 09:30",
    },
    {
      id: 2,
      fullName: "RIHEM ALLEUGUI",
      cin: "01789012",
      plateNumber: "202-TUN-228",
      subscriptionType: "2 heures",
      date: "2023-10-16 14:15",
    },
    {
      id: 3,
      fullName: "GHASSEN BEN SALEM",
      cin: "09345678",
      plateNumber: "189-TUN-456",
      subscriptionType: "3 heures",
      date: "2023-10-17 11:45",
    },
    {
      id: 4,
      fullName: "ali ben ali",
      cin: "123456779",
      plateNumber: "34-TUN-231",
      subscriptionType: "2 heures",
      date: "2025-10-19 12:45",
    },
    {
         id: 5,
      fullName: "hidri aymen",
      cin: "123456799",
      plateNumber: "99-TUN-1200",
      subscriptionType: "demi-journée",
      date: "2023-10-15 09:30",
    },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Dashboard
      onLogout={handleLogout}
      initialReservations={initialReservations}
    />
  );
}

export default App;
