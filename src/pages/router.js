import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";

import Owner from "./Experience/owner";
import NoPet from "./Experience/ownerNoPet";

import CheckPetN from "./Experience/ownerCheckPetNoComm";
import CheckPet from "./Experience/ownerCheckPet";

import ExPet from "./Experience/exPet";
import ExPetCheck from "./Experience/exPetCheckPet";

import Adoption from "./Adoption/adoptionAlready";



import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/QQLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="owner" element={<Owner />} />
          <Route path="nopet" element={<NoPet />} />
          <Route path="check-no" element={<CheckPetN />} />
          <Route path="check" element={<CheckPet />} />
          <Route path="expet" element={<ExPet />} />
          <Route path="expet-check" element={<ExPetCheck />} />

          <Route path="adoption" element={<Adoption />} />



        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
