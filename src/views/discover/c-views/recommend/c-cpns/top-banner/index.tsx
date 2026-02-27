import { memo, useRef, useState } from "react";
import type { ReactNode, FC } from "react";
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'
import classNames from 'classnames'

import { useAppSelector, shallowEqualApp } from "@/store";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(state => state.recommend, shallowEqualApp)

  const bannerRef = useRef<CarouselRef>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  let bgImgUrl = banners[currentIndex]?.imageUrl
  if (bgImgUrl) {
    bgImgUrl = `${bgImgUrl}?imageView&blur=40x20`
  }

  return (
    <div className="top-banner">
      <BannerWrapper style={{ background: `url(${bgImgUrl}) center center / 6000px` }}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel autoplay effect="fade" dots={false} afterChange={handleAfterChange} ref={bannerRef}>
              {banners.map(item => {
                return <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              })}
            </Carousel>
            <ul className="dots">
              {banners.map((item, index) => {
                return <li key={item.imageUrl}>
                  <span className={classNames('item', {active: index === currentIndex})}></span>
                </li>
              })}
            </ul>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={handlePrevClick}></button>
            <button className="btn right" onClick={handleNextClick}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
}

export default memo(TopBanner)