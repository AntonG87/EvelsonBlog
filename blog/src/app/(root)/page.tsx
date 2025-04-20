import {Container} from "@/components/container";
import {ShareThoughtsButton} from "@/components/share-thoughts-button";
import {Title} from "@/components/ui/title";
import {PostList} from "@/components/post-list";
import {StayUpdatedBlock} from "@/components/stay-updated-block";
import {SortSelection} from "@/components/choose-variable-posts";
import React from "react";
import {PaginationComponent} from "@/components/pagination";
import {SpotlightSection} from "@/components/first-welcome-component";
import {Footer} from "@/components/footer";
import {BackgroundBubbles} from "@/components/background-bubbles";

export default function Home() {
  return(
 <>
   <SpotlightSection/>
   <Container className={"max-w-[1140px] m-auto px-10"}>
     <ShareThoughtsButton className={'relative z-10 rounded-[25px] w-[100%] h-[185px] bg-[linear-gradient(to_right,#675CFF,#615EC5)]'}/>
     <div className={'flex justify-between items-center mb-6  mt-[72px]'}>
       <Title className={'text-[32px] font-extrabold font-fustat text-[#4B50A2] '} title={'Latest Articles'}/>
       <SortSelection className={'relative z-10 '} />
     </div>
     <BackgroundBubbles className={'top-[125%] w-[100%]'} />
     <PostList className={' relative z-10  grid-cols-2 grid gap-[40px] mt-[10px] mb-[55px]'}/>
     <PaginationComponent className={' relative z-10  flex justify-center  gap-4 mb-[75px]'}/>
     <StayUpdatedBlock className={' relative z-10  text-center  bg-[linear-gradient(to_right,#FDEEEE,#EBEEF4)] rounded-tl-[45px] rounded-br-[45px] w-full max-w-[ 1140px] h-[300px] mb-[40px] h-[185px]'}/>
   </Container>
   <footer>
     <Footer className={"relative z-10  flex flex-col gap-[40px] items-center justify-center w-full mt-[120px] h-[100px] bg-[linear-gradient(to_right,#363455,#7772BB)]"}/>
   </footer>
 </>
  )
}
