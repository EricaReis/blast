import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

// core components
import Header from "components/Header";
import AuthFooter from "components/Footers/AuthFooter.jsx";
import Spotlight from "components/Spotlight";
import Bestseller from "components/Bestseller";
import ForcaDeVendas from "./ForcaDeVendas";
import Navbar from "components/Navbar";
import './styles.scss';

//Página principal com Carousel/Slider de Promos e anúncios internos

const items = [
  {
    id: 1,
    src: 'https://dm2306files.storage.live.com/y4p9zkSltkjkkMXHZS6aAWZijrgVZR6TNSAnlsDp6Jzj71NBATq2lyngPuIuj1xOiJ0L4933FS-0dJ_ZLFoQFejLmQ6ZBnlSUxNQeOGbJjY8Q1b-XaBbSDiiwpUXKeL6qte4b7nlC2_KyO2WyIQtmmw4XrOgcgY9KG_X9VIfpKeIe9xG9TKOD6oMmPB3SJWfVKKJVNbbeW2Gb_-WKmhQlrljl_yKpyXUY653raZaVbktrE/CAPA3.jpg?psid=1&width=1544&height=416',
  },
  {
    id: 2,
    src: 'https://dm2306files.storage.live.com/y4pGGxKRP8HObrKJs8XXD_I47cQvoTrboU3IgMwsTppEsGBrttBaSW9Dugh5AqntAZiaVfN0kiLz2aBZ9XPWJP1g75yPshARqx4Fn5U3aqjZxP46mVsYbYMe8_1af8Kig0oZvggTrtonJUTEnwhMyDMjJrzhStELPPJ-StpBa7efpQLq2LuB6-LKD-As8hSPrdS2KmSHayyOwM6hvceGuj5y892OHP6R0tuo0c5NaMXJw8/CAPA%204.jpg?psid=1&width=1538&height=412',
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img style={{ width: '100%'}} src={item.src} alt='banner-home' />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="main-content">
        <Header />
        <div>
          <Navbar/>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
        <ForcaDeVendas />
        <Spotlight />
        <div>
          <Bestseller />
        </div>  
      </div>
      <AuthFooter />
    </>
  );
}
