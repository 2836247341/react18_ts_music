import React, { memo } from "react";
import type { ReactNode, FC } from "react";
import AreaHeaderV1 from "@/components/area-header-v1";
import { HotRecommendWrapper } from "./style";
import SongMenuItem from "@/components/song-menu-item";
import { shallowEqualApp, useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector(state => state.recommend, shallowEqualApp)
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1 
        title="热门推荐"
        keyword={['华语', '流行', '摇滚', '民谣', '电子']} 
        moreText="更多" 
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {
          hotRecommend.map(item => {
            return <SongMenuItem key={item.id} itemData={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)