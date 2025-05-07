import {Container,VectorAbout,Footer,BackgroundBubbles} from "@/components";
import {AboutList} from "@/components/about-page/article-aboute-list";;
import React from "react";


export default function About() {
  return(
    <>
        <Container className={"max-w-[1140px] m-auto px-4"}>
          <BackgroundBubbles className={'top-[25%]   w-[100%]'} />
          <VectorAbout className={'flex max-sm:flex-col justify-between items-center relative z-10 mt-[60px]'}/>
          <AboutList className={'grid-cols-2 max-lg:grid-cols-1 max-lg:max-w-[600px] max-lg:mx-auto grid gap-[40px]  mt-[80px] relative z-10 mb-[75px] max-sm:mb-[20px]'}/>
        </Container>
      <footer>
        <Footer className={"flex flex-col gap-[40px] items-center justify-center w-full mt-[120px] h-[100px] bg-[linear-gradient(to_right,#675CFF,#615EC5)]"}/>
      </footer>
    </>
  )
}
