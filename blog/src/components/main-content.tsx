import {Container,PostList,SortSelection} from "@/components";
import {Title} from "@/components/ui/title";
import React from "react";


interface Props {
  className: string
}
export function MainContent({className} : Props ){
  return(
    <section id={'main'}>
    <div className={className}>
      <Container className={"max-w-[1140px] m-auto "}>
        <div className={'flex justify-between items-center mb-6  mt-[72px]'}>
          <Title className={'text-[32px] max-sm:text-[22px] font-extrabold font-fustat text-[#4B50A2] '} title={'Latest Articles'}/>
          <SortSelection className={'relative z-10 '} />
        </div>
        <PostList className={'relative z-10  grid-cols-2 max-md:grid-cols-1  grid gap-[40px] mt-[10px] mb-[55px]'}/>
      </Container>
    </div>
    </section>
  )
}
