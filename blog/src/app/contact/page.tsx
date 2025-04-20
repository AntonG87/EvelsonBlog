
import {Container} from "@/components/container";
import {ContactSection} from "@/components/contact-page/contact-section";
import VideoPlayer from "@/components/contact-page/video-player";
import {BackgroundBubbles} from "@/components/background-bubbles";
import React from "react";



export default function About() {
  return (
    <>
      <BackgroundBubbles className={'top-[22%] w-[100%]'} />
      <Container className={"max-w-[1140px] m-auto"}>
        <div className={'p-6 '}>
          <VideoPlayer/>
        </div>
        <ContactSection/>
      </Container>
    </>
  );
}
