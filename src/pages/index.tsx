import React, { useState, useEffect } from "react"
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
import highlightContentTwo from "../assets/content/HighlightSectionTwo.json"
import fortunaSection from "../assets/content/FortunaSection.json"
import { OpenRegistrationFormEvent } from "../event/OpenRegistrationFormEvent"
import RegisterForm from "../components/HeroSection/RegisterForm"
import AiSection from "../components/AiSection"
import MirrorSection from "../components/MirrorSection"
import SpiritSection from "../components/SpiritSection"
import FortunaSection from "../components/FortunaSection"
import MembersSection from "../components/MembersSection"
import OpenSourceSection from "../components/OpenSourceSection"
import ElementsSection from "../components/ElementsSection"
import ReachSection from "../components/ReachSection"
import OneauthSection from "../components/OneauthSection"
import TechnologiesSection from "../components/TechnologiesSection"
import SecuritySection from "../components/SecuritySection"
import StatisticsSection from "../components/StatisticsSection"
import FreeSection from "../components/FreeSection"
import { httpGet } from "../components/Lib/RestTemplate"
// import highlightContentTwo from "../assets/content/HighlightSectionTwo.json"
// import highlightContentThree from "../assets/content/HighlightSectionThree.json"
// import FeatureSection from "../components/FeatureSection"

const IndexPage = () => {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    httpGet("/api/member", {}).then((response: any) => {
      setMembers(response.data);
    })
      .catch((error: any) => {
      })
  }, [])

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    OpenRegistrationFormEvent.asObservable().subscribe((event: boolean) => { setShowForm(event) });
  }, []);

  return (
    <>
      <div className="page-home">
        {/* <div>Header</div> */}
        <HeroSection />
        <SpecialitySection data={highlightContentOne} />
        <FortunaSection />
        <MembersSection members={members} />
        <AiSection />
        <MirrorSection />
        <StatisticsSection membersCount={members.length} />
        <ElementsSection />
        <TechnologiesSection />
        <ReachSection />
        <SecuritySection />
        {/* <FreeSection /> */}
        <SpecialitySection data={highlightContentTwo} />
        <OneauthSection />
        <OpenSourceSection />
        <SpiritSection />
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
      {showForm && <RegisterForm />}
    </>
  );
};

export default IndexPage
