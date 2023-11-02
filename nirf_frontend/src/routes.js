// import
import React, { Component, useEffect } from "react";
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import Survey from "views/Form/Survey.js";

import RankPredictor from "views/Dashboard/RankPredictor";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import LandingPage from "views/LandingPage/LandingPage";

var dashRoutes = [
  {
    path: "/landingpage",
    name: "LandingPage",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: LandingPage,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/overall-performance",
    name: "Overall Performance",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/survey",
    name: "Survey",
    rtlName: "Hehe",
    icon: <CreditIcon color="inherit" />,
    component: Survey,
    layout: "/admin",
  },
  {
    path: "/rank-predictor",
    name: "Rank Predictor",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: RankPredictor,
    layout: "/admin",
  },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   rtlName: "لوحة القيادة",
      //   icon: <RocketIcon color="inherit" />,
      //   component: SignUp,
      //   layout: "/auth",
      // },
    ],
  },
];

export default dashRoutes;
