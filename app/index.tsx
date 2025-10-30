//import Latihan1 from "@/components/latihan/Latihan1";
//import LoginScreen from "@/components/tugas/LoginScreen";
//import Latihan2 from "@/components/latihan/latihan2";
//import Latihan3 from "@/components/latihan/latihan3";
//import Latihan4 from "@/components/latihan/latihan4";

import HomeScreen from "@/components/tugas/HomeScreen";
import React, { useState } from "react";

export default function App() {
  const [nama, setNama] = useState("");

  return (
    <>
      {/*<Latihan1/>*/}
      {/*<LoginScreen />*/}
      {/*<Latihan2/>*/}
      {/*<Latihan3/>*/}
      {/*<Latihan4/>*/}
      <HomeScreen />
    </>
  );
}
