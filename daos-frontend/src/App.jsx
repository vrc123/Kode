import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import FindMusician from "./pages/FindMusician";
import Musician from "./pages/Musician";
import FindEnsemble from "./pages/FindEnsemble";
import Ensemble from "./pages/Ensemble";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ProfileChangePassword from "./pages/ProfileChangePassword";
import ProfileChangeNewsletterSettings from "./pages/ProfileChangeNewsletterSettings";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import AddInstrument from "./pages/AddInstrument";
import EditInstrument from "./pages/EditInstrument";
import CreateEnsemble from "./pages/CreateEnsemble";
import EditEnsemble from "./pages/EditEnsemble";
import AddEnsemblePost from "./pages/AddEnsemblePost";
import Footer from "./components/shared/Footer";
import EditEnsemblePost from "./pages/EditEnsemblePost";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("token") == null && localStorage.getItem("profileId") == null) {
      setLoggedIn(false);
    } else if (localStorage.getItem("token") != "undefined" && localStorage.getItem("profileId") != "undefined") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

  }, [loggedIn]);

  return (
      <div>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicians" element={<FindMusician />} />
          <Route path="/musicians/:id" element={<Musician />} />
          <Route path="/ensembles" element={<FindEnsemble />} />
          <Route path="/ensembles/:id" element={<Ensemble />} />
          <Route path="/ensembles/:id/posts/:postId" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/settings" element={<h1>Profile settings</h1>} />
          <Route path="/profile/settings/password" element={<ProfileChangePassword />} />
          <Route path="/profile/settings/newsletter" element={<ProfileChangeNewsletterSettings />} />
          <Route path="/sign-up" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/profile/instruments/add" element={<AddInstrument />} />
          <Route path="/profile/instruments/:id/edit" element={<EditInstrument />} />
          <Route path="/profile/ensembles/create" element={<CreateEnsemble />} />
          <Route path="/profile/ensembles/:id/edit" element={<EditEnsemble />} />
          <Route path="/profile/ensembles/:id/posts/add" element={<AddEnsemblePost />} />
          <Route path="/profile/ensembles/:id/posts/:postid/edit" element={<EditEnsemblePost />} />
        </Routes>
        <Footer />
      </div>
  );
}