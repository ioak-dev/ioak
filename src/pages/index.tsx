import React from "react"
import { Link } from "gatsby"
import FooterSection from "../components/FooterSection"
import HeroSection from "../components/HeroSection"
import SpecialitySection from "../components/SpecialitySection"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import HeroSection from "../components/HeroSection"
// import KeySection from "../components/KeySection"
// import ClosingSection from "../components/ClosingSection"
// import OnboardSection from "../components/OnboardSection"
// import ContactSection from "../components/ContactSection"
// import FaqSection from "../components/FaqSection"
// import FooterSection from "../components/FooterSection"
// import CopyrightSection from "../components/CopyrightSection"
// import SpecialitySection from "../components/SpecialitySection"

import highlightContentOne from "../assets/content/HighlightSectionOne.json"
import AppCountSection from "../components/AppCountSection"
// import highlightContentTwo from "../assets/content/HighlightSectionTwo.json"
// import highlightContentThree from "../assets/content/HighlightSectionThree.json"
// import FeatureSection from "../components/FeatureSection"

const IndexPage = () => (
  <div className="page-home">
    <div>Header</div>
    <HeroSection />
    <SpecialitySection data={highlightContentOne} />
    <AppCountSection />
    {/* <SEO title="Features and getting started" />
    <SpecialitySection data={highlightContentOne} />
    <FeatureSection />
    <SpecialitySection data={highlightContentTwo} direction="left" />
    <ContactSection />
    <ClosingSection />
    <SpecialitySection data={highlightContentThree} direction="right" />
    <CopyrightSection /> */}
    <FooterSection />
  </div>
)

export default IndexPage
