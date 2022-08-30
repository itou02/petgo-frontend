import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/QQLayout";
import Experience from "./Experience/Experience";
import Illustrate from "./Experience/Illustrate";
import Member from "./Member/Member";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />

          {/* 體驗 */}
          <Route path="experience" element={<Experience />} />
          <Route path="experience/illustrate" element={<Illustrate />} />

          {/* 會員資料 */}
          <Route path="member" element={<Member />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
