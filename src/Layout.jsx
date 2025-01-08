import React from "react";
import HomeLayout from "./Components/Components/Home/HomeLayout";
import NavLayout from "./Components/Components/Navbar/Nav Layout";
import AboutLayout from "./Components/Components/About/AboutLayout";
import AdvantagesLayout from "./Components/Components/Advantages/AdvantagesLayout";
import ServicesLayout from "./Components/Components/Services/ServicesLayout";
import VideoLayout from "./Components/Components/Video/VideoLayout";
import ProcessLayout from "./Components/Components/Proccess/ProccessLayout";
import PortfolioLayout from "./Components/Components/Portfolio/PortfolioLayout";
import TestiLayout from "./Components/Components/Testimonials/TestiLayout";
import PartnerLayout from "./Components/Components/Partner/PartnerLayout";
import FooterLayout from "./Components/Components/Footer/FooterLayout";
export default function Layout() {
  return (
    <>
      <NavLayout />
      <HomeLayout />
      <AboutLayout />
      <AdvantagesLayout />
      <ServicesLayout />
      <VideoLayout />
      <ProcessLayout />
      <PortfolioLayout />
      <PartnerLayout />
      <TestiLayout />
      <FooterLayout />
    </>
  );
}
