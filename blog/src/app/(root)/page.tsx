import {
  Container,
  ShareThoughtsButton,
  StayUpdatedBlock,
  SpotlightSection,
  Footer,
  MainContent,
  BackgroundBubbles
} from "@/components";

import React, {Suspense} from "react";

export default function Home() {
  return(
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col">
        <SpotlightSection />
        <BackgroundBubbles className={'top-[122%] max-sm:top-[155%] max-md:top-[100%] w-[100%]'} />
        <BackgroundBubbles className={'w-[100%] max-sm:top-[4%]'} />
        <Container className="flex flex-col px-10 flex-1 max-w-full sm:max-w-[1140px] m-auto  sm:px-6 lg:px-10">
          <ShareThoughtsButton className={'relative z-10 rounded-[25px] w-[100%] h-[185px]  bg-[linear-gradient(to_right,#675CFF,#615EC5)]'}/>
          <Suspense fallback={<div>Loading of Posts...</div>}>
          <MainContent  className={'w-full p-0 m-0'} />
          </Suspense>
     <StayUpdatedBlock className={' relative z-10  text-center  bg-[linear-gradient(to_right,#FDEEEE,#EBEEF4)] rounded-tl-[45px] rounded-br-[45px] w-full max-w-[ 1140px] h-[300px] max-sm:h-[340px] mb-[40px] '}/>
   </Container>
      </main>
      <footer>
        <Footer className="bottom-0 w-full h-[100px]  flex items-center justify-center mt-[80px] bg-[linear-gradient(to_right,#675CFF,#615EC5)]" />
      </footer>
 </div>
  )
}
