import {Header} from "@/components/header";
import {Container} from "@/components/container";
import {Footer} from "@/components/footer";
import {ArticleAbouteList} from "@/components/article-aboute-list";
import {WelcomeBox} from "@/components/welcome-box";
import {Contacts} from "@/components/contacts";

export default function About() {
  return(
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Container className={"max-w-[985px] m-auto"}>
          <WelcomeBox className={' mt-[90px] flex justify-center gap-[100px] items-center  w-full bg-[linear-gradient(to_right,#675CFF,#5954AA)] rounded-3xl h-[285px]'}/>
          <Contacts className={'mt-[75px]'}/>
        </Container>
      </main>
      <footer>
        <Footer className={" flex flex-col gap-[40px] items-center justify-center w-full mt-[120px] h-[350px] bg-[linear-gradient(to_right,#363455,#7772BB)]"}/>
      </footer>
    </>
  )
}
