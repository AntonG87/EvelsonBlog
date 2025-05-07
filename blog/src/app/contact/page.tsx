import {Container,BackgroundBubbles} from "@/components";
import {ContactSection} from "@/components/contact-page/contact-section";
import VideoPlayer from "@/components/contact-page/video-player";
import React from "react";



export default function About() {
  return (
    <>
      <BackgroundBubbles className={'top-[22%] max-sm:top-[34%] w-[100%]'} />
      <Container className={"max-w-[1140px] m-auto"}>
        <div className={'px-6'}>
          <VideoPlayer/>
        <ContactSection/>
        </div>
      </Container>
    </>
  );
}
