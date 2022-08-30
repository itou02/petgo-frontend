import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/QQLayout";
import Signup from "./signup/index.js";
import Sign2 from "./signup/index222"
import Forget from "./forget/index.js";
import Revise from "./forget/index2.js";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup2" element={<Sign2 />} />
          <Route path="forget" element={<Forget />} />
          <Route path="revise" element={<Revise />} />
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
