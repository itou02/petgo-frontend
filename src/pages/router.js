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
import AdoptionCheck from "./Adoption/adoptionCheckPet";

import ReceiveMemberDetail from "./ReceiveRequest/memberDetail";
import CheckMembersPet from "./ReceiveRequest/checkMembersPet";



import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/QQLayout";
import Experience from "./Experience/Experience";
import Illustrate from "./Experience/Illustrate";
import Member from "./Member/Member";
import Pet from "./Member/Pet";
import RearingPet from "./Member/Rearing-pet";
import EXAddForm from "./Form/EXAddForm";
import EXForm from "./Form/EXForm";
import SearchRequestForm from "./Form/SearchRequestForm";
import SearchSharerForm from "./Form/SearchSharerForm";
import DoingShareDetailed from "./RecordDeatiled/DoingShareDetailed";
import ExperienceDetailed from "./RecordDeatiled/ExperienceDetailed";
import ShareDetailed from "./RecordDeatiled/ShareDetailed";
import DoingShareList from "./RecordList/DoingShareList";
import ExperienceList from "./RecordList/ExperienceList";
import ShareList from "./RecordList/ShareList";

import Signup from "./signup/index.js";
import Forget from "./forget/index.js";
import Revise from "./forget/index2.js";
import Comment from "./Comment/index.js";
import Petlist from "./Petlist/index.js";
import Norequest from "./sendrequest/norequest.js";
import Sendrequest from "./sendrequest/sendrequest.js";
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
          <Route path="norequest" element={<Norequest />} />
          <Route path="sendrequest" element={<Sendrequest />} />
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />

          {/* 體驗 */}
          <Route path="experience" element={<Experience />} />
          <Route path="experience/illustrate" element={<Illustrate />} />

          {/* 會員資料 */}
          <Route path="member" element={<Member />} />
          <Route path="Pet-list/pet" element={<Pet />} />
          <Route path="Rearing-pet" element={<RearingPet />} />

          {/* 表單 */}
          <Route
            path="Experience/owner-illustrate/post/add-form"
            element={<EXAddForm />}
          />
          <Route
            path="Experience/experiencer-illustrate/card/ex-pet-detail/ex-form"
            element={<EXForm />}
          />
          <Route
            path="Share-already/Search-request-form"
            element={<SearchRequestForm />}
          />
          <Route
            path="Share-already/Search-sharer-form"
            element={<SearchSharerForm />}
          />

          {/* 紀錄清單 */}
          <Route path="Record/DoingShare/list" element={<DoingShareList />} />
          <Route path="Record/Experience/list" element={<ExperienceList />} />
          <Route path="Record/Share/list" element={<ShareList />} />

          {/* 紀錄詳細 */}
          <Route
            path="Record/DoingShare/detailed"
            element={<DoingShareDetailed />}
          />
          <Route
            path="Record/Experience/detailed"
            element={<ExperienceDetailed />}
          />
          <Route path="Record/Share/detailed" element={<ShareDetailed />} />

          {/* <Route path="owner" element={<Owner />} />
          <Route path="nopet" element={<NoPet />} />
          <Route path="check-no" element={<CheckPetN />} />
          <Route path="check" element={<CheckPet />} />
          <Route path="expet" element={<ExPet />} />
          <Route path="expet-check" element={<ExPetCheck />} />
          <Route path="adoption" element={<Adoption />} /> */}

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
          <Route path="Share-already/share-pet-detail" element={<AdoptionCheck />} />

          {/* 我收到的請求-查看詳細-會員資料 */}
          <Route path="Receive-request/member-detail" element={<ReceiveMemberDetail />} />
          {/* 我收到的請求-查看詳細-會員資料-養寵經歷寵物詳細 */}
          <Route path="Receive-request/member-detail/request-pet-detail" element={<CheckMembersPet />} />

          
          

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
