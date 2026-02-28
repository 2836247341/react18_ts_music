import React, { memo, useRef, useEffect } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'

import { Carousel } from 'antd'

import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

export interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  // 从 redux 获取数据
  const { newAlbum } = useAppSelector((state) => ({
    newAlbum: state.recommend.newAlbum
  }))

  // 获取 ref
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  function handlePrev() {
    bannerRef.current?.prev()
  }
  function handleNext() {
    bannerRef.current?.next()
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrev}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={2000}>
            {[0, 1].map((item) => {
              return (
                <div className="list" key={item}>
                  <div className="album-list">
                    {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNext}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
