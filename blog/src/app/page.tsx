import {Container} from "@/components/container";
import {ShareThoughtsButton} from "@/components/share-thoughts-button";
import {Title} from "@/components/ui/title";
import {ArticleList} from "@/components/article-list";
import {StayUpdatedBlock} from "@/components/stay-updated-block";
import {SortSelection} from "@/components/choose-variable-posts";
import React from "react";
import {PaginationComponent} from "@/components/pagination";
import {SpotlightSection} from "@/components/firs-main-component";
import {Footer} from "@/components/footer";

export default function Home() {
  return(
 <>
   <SpotlightSection/>
   <Container className={"max-w-[985px] m-auto"}>
     <ShareThoughtsButton className={' rounded-[25px] w-[100%] h-[185px] bg-[linear-gradient(to_right,#675CFF,#615EC5)]'}/>
     <div className={'flex justify-between items-center mb-6  mt-[72px]'}>
       <Title className={'text-[32px] font-extrabold font-fustat text-[#4B50A2] '} title={'Latest Articles'}/>
       <SortSelection />
     </div>
     <ArticleList className={'grid-cols-2 grid gap-[40px] mt-[10px] mb-[55px]'}/>
     <PaginationComponent className={'flex justify-center  gap-4 mb-[75px]'}/>
     <StayUpdatedBlock className={'text-center  bg-[linear-gradient(to_right,#FDEEEE,#EBEEF4)] rounded-tl-[45px] rounded-br-[45px] w-full max-w-[1000px] h-[300px] mb-[40px] h-[185px]'}/>
   </Container>
   <footer>
     <Footer className={" flex flex-col gap-[40px] items-center justify-center w-full mt-[120px] h-[100px] bg-[linear-gradient(to_right,#363455,#7772BB)]"}/>
   </footer>
 </>
  )
}
