import {Container} from "@/components/container";
import {AboutList} from "@/components/about-page/article-aboute-list";
import {VectorAbout} from "@/components/about-vector";
import {Footer} from "@/components/footer";
import React from "react";

export default function About() {
  return(
    <>
        <Container className={"max-w-[985px] m-auto"}>
          <VectorAbout className={'flex justify-between items-center mt-[60px]'}/>
          <AboutList className={'grid-cols-2 grid gap-[40px] mt-[80px] mb-[75px]'}/>
        </Container>
      <footer>
        <Footer className={" flex flex-col gap-[40px] items-center justify-center w-full mt-[120px] h-[100px] bg-[linear-gradient(to_right,#363455,#7772BB)]"}/>
      </footer>
    </>
  )
}
