/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Landing from "../pages/Landing/Landing";
import Tabs from "./tabs";
import Topics from "../pages/Topics/Topics";
import TopicDetail from "../pages/TopicDetail/TopicDetail";
import UserProfile from "../pages/UserProfile/UserProfile";

export default function Router() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/tabs">
          <Tabs />
        </Route>
        <Route path="/main/topics">
          <Topics />
        </Route>
        <Route path="/main/topic-details">
          <TopicDetail />
        </Route>
        <Route path="/main/user-profile">
          <UserProfile />
        </Route>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
