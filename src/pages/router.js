import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/QQLayout";
import Signup from "./Signup/index.js";
import Forget from "./Forget/index.js";
import Revise from "./Forget/index2.js";
import Comment from "./Comment/index.js";
import Petlist  from "./Petlist/index.js";
import Norequest  from "./sendrequest/norequest.js";
import Sentrequest  from "./sendrequest/sendrequest.js";
import Receiverequest  from "./Getrequest/getrequest";
import Noreceiverequest  from "./Getrequest/norequest";

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
          <Route path="nosent-request" element={<Norequest/>} />
          <Route path="sent-request" element={<Sentrequest/>} />
          <Route path="receive-request" element={<Receiverequest/>} />
          <Route path="noreceive-request" element={<Noreceiverequest/>} />
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
