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
import Signup from "./signup/index.js";
import Forget from "./forget/index.js";
import Revise from "./forget/index2.js";
import Comment from "./Comment/index.js";
import Petlist  from "./Petlist/index.js";
import Norequest  from "./sendrequest/norequest.js";
import Sendrequest  from "./sendrequest/sendrequest.js";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forget" element={<Forget />} />
          <Route path="revise" element={<Revise />} />
          <Route path="comment" element={<Comment />} />
          <Route path="petlist" element={<Petlist />} />
          <Route path="norequest" element={<Norequest/>} />
          <Route path="sendrequest" element={<Sendrequest/>} />
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          {/* 飼主專區 */}
          <Route path="Experience/owner-illustrate/post" element={<Owner />} />
          {/* 飼主專區-無寵物 */}
          <Route path="Experience/owner-illustrate/nopost" element={<NoPet />} />
          {/* 飼主專區-查看詳細 */}
          <Route path="Experience/owner-illustrate/post/ex-pet-detail" element={<CheckPet />} />
          {/* 飼主專區-查看詳細-無評論 */}
          <Route path="Experience/owner-illustrate/post/ex-pet-detail-no" element={<CheckPetN />} />
          {/* 體驗者專區首頁 */}
          <Route path="Experience/experiencer-illustrate/card" element={<ExPet />} />
          {/* 體驗者專區-查看 */}
          <Route path="Experience/experiencer-illustrate/card/ex-pet-detail" element={<ExPetCheck />} />
          
          {/* 已有共養人 */}
          <Route path="Share-already" element={<Adoption />} />



        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
