import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Img } from "../style/style";
import {
  CarouselWrapper,
  CarouselArrow,
  CarouselHeadlineDiv
} from "../style/carouselStyle";

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      currentArticleIndex: 0,

      articles: [
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/39562/the-ball-stadion-football-the-pitch-39562.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],

      nextArticle: (
        <IoIosArrowForward style={{ height: "30px", width: "30px" }} />
      ),
      prevArticle: <IoIosArrowBack style={{ height: "30px", width: "30px" }} />
    };
  }

  moveNext = () => {
    const lastIndex = this.state.articles.length - 1;

    const resetIndex = this.state.currentArticleIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentArticleIndex + 1;

    this.setState({ currentArticleIndex: index });
  };

  movePrev = () => {
    const lastIndex = this.state.articles.length - 1;
    const resetIndex = this.state.currentArticleIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentArticleIndex - 1;

    this.setState({ currentArticleIndex: index });
  };

  render() {
    const {
      articles,
      currentArticleIndex,
      nextArticle,
      prevArticle
    } = this.state;

    const index = currentArticleIndex;
    let firstThreeArticles = articles.slice(index, index + 3);

    if (firstThreeArticles.length < 3) {
      firstThreeArticles = firstThreeArticles.concat(
        articles.slice(0, 3 - firstThreeArticles.length)
      );
    }

    return (
      <CarouselWrapper>
        <CarouselArrow onClick={this.movePrev} alt="">
          {prevArticle}
        </CarouselArrow>

        {firstThreeArticles.map((article, index) => (
          <>
            <a href="" key={index}>
              <Img src={article} alt="" />
              <CarouselHeadlineDiv>
                <p>Title</p>
              </CarouselHeadlineDiv>
            </a>
          </>
        ))}

        <CarouselArrow onClick={this.moveNext} alt="">
          {nextArticle}
        </CarouselArrow>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
