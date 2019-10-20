import React from "react";
import CelebritiesList from "../../components/CelebritiesList/CelebritiesList";
import Footer from "../../components/Footer/Footer";
import MessageBanner from "../../components/MessageBanner/MessageBanner";
import SubmitBanner from "../../components/SubmitBanner/SubmitBanner";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <MessageBanner />
      <CelebritiesList />
      <SubmitBanner />
      <Footer />
    </>
  );
};

export default HomePage;
