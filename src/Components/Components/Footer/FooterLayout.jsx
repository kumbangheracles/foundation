import React from "react";
import TopSide from "./TopSide";
import MidSide from "./MidSide";
import FooterLine from "./FooterLine";
import BottomSide from "./BottomSide";
export default function FooterLayout() {
  return (
    <section id="footer">
      <TopSide />
      <FooterLine />
      <MidSide />
      <BottomSide />
    </section>
  );
}
