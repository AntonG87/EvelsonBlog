import {Header} from "@/components/header";
import {Container} from "@/components/container";
import {ShareThoughtsButton} from "@/components/share-thoughts-button";
import {Title} from "@/components/ui/title";

import {ArticleList} from "@/components/article-list";
import {StayUpdatedBlock} from "@/components/stay-updated-block";
import {Footer} from "@/components/footer";


export default function Home() {
  return(
 <>
   <header>
     <Header/>
   </header>
   <main>
   <Container className={"max-w-[985px] m-auto"}>
     <ShareThoughtsButton className={'mt-[75px] rounded-[25px] w-[100%] h-[185px] bg-[linear-gradient(to_right,#675CFF,#615EC5)] '}/>
     <Title className={'text-[32px] font-extrabold font-fustat mt-[72px]'} title={'Latest Articles'}/>
     <ArticleList className={'grid-cols-2 grid gap-[40px] mt-[40px] mb-[75px]'}/>
     <StayUpdatedBlock className={'text-center  bg-[linear-gradient(to_right,#FDEEEE,#EBEEF4)] rounded-tl-[45px] rounded-br-[45px] w-full max-w-[1000px] h-[255px] mb-[40px] h-[185px]'}/>
   </Container>
   </main>
   <footer>
     <Footer className={" flex flex-col gap-[40px] items-center justify-center w-full mt-[120px] h-[350px] bg-[linear-gradient(to_right,#363455,#7772BB)]"}/>
   </footer>
 </>
  )
}
