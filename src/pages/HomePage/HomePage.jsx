import React from "react";
import CelebritiesList from "../../components/CelebritiesList/CelebritiesList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HighlightedCelebrity from "../../components/HighlightedCelebrity/HighlightedCelebrity";
import MessageBanner from "../../components/MessageBanner/MessageBanner";
import SubmitBanner from "../../components/SubmitBanner/SubmitBanner";

const HomePage = () => {
  return (
    <>
      <Header />
      <HighlightedCelebrity />
      <MessageBanner />
      <CelebritiesList />
      <SubmitBanner />
      <Footer />
    </>
  );
};

export default HomePage;
