import {Header} from "@/components/header";
import {Container} from "@/components/container";
import {ShareThoughtsButton} from "@/components/share-thoughts-button";
import {Title} from "@/components/ui/title";
import {ArticleList} from "@/components/article-list";
import {StayUpdatedBlock} from "@/components/stay-updated-block";
import {Footer} from "@/components/footer";
import {ArticleAbouteList} from "@/components/article-aboute-list";

export default function About() {
  return(
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Container className={"max-w-[985px] m-auto"}>
          <ArticleAbouteList className={'grid-cols-2 grid gap-[40px] mt-[80px] mb-[75px]'}/>
        </Container>
      </main>
      <footer>
        <Footer className={" flex flex-col gap-[40px] items-center justify-center w-full mt-[120px] h-[350px] bg-[linear-gradient(to_right,#363455,#7772BB)]"}/>
      </footer>
    </>
  )
}
