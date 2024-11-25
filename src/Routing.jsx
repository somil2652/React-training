import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Assignment_1 from "./Assignment1/Assignment_1";
import Assignment_2 from "./Assignment2/Assignment_2";
import Assignment_3 from "./Assignment3/Assignment_3";
import Home from "./Assignment3/Ques3/Home";
import About from "./Assignment3/Ques3/About";
import NotFound from "./Assignment3/Ques3/NotFound";
import LoginPage from "./Assignment3/Ques4/LoginPage";
import HomeQ4 from "./Assignment3/Ques4/HomeQ4";
import AboutQ4 from "./Assignment3/Ques4/AboutQ4";
import Dashboard from "./Assignment3/Ques5/Dashboard";
import Profile from "./Assignment3/Ques5/Profile";
import Setting from "./Assignment3/Ques5/Setting";
import DashboardHome from "./Assignment3/Ques5/DashboardHome";
import ProductsList from "./Assignment3/Ques6/ProductsList";
import ProductDetail from "./Assignment3/Ques6/ProductDetail";
import HomeQ9 from "./Assignment4/Ques9/HomeQ9";
import Inbox from "./Assignment4/Ques9/Inbox";
import Assignment_4 from "./Assignment4/Assignment_4";
import Assignment_5 from "./Assignment5/Assignment_5";
import HomeQ14 from "./Assignment5/Question14.3";
import Assignment_6 from "./Assignment6/Assignment_6";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/assignment1" element={<Assignment_1 />} />
          <Route path="/assignment2" element={<Assignment_2 />} />
          <Route path="/assignment3" element={<Assignment_3 />} />
          <Route path="/assignment3/home" element={<Home />} />
          <Route path="/assignment3/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/assignment4/home" element={<HomeQ4 />} />
          <Route path="/assignment4/login" element={<LoginPage />} />
          <Route path="/assignment4/about" element={<AboutQ4 />} />
          <Route path="/assignment5" element={<Dashboard />} />
          <Route path="/assignment5/profile" element={<Profile />} />
          <Route path="/assignment5/setting" element={<Setting />} />
          <Route path="/assignment5/dhome" element={<DashboardHome />} />
          <Route path="/question6" element={<ProductsList />} />
          <Route path="/question6/:productId" element={<ProductDetail />} />
          <Route path="/assignment4" element={<Assignment_4 />} />
          <Route path="/assignment5/q9" element={<HomeQ9 />} />
          <Route path="/assignment5/q9/inbox" element={<Inbox />} />
          <Route path="/assign5" element={<Assignment_5 />} />
          <Route path="/assignment-5/Ques-14" element={<HomeQ14 />} />
          <Route path="/assignment6" element={<Assignment_6 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
