import AreaHeaderV1 from '@/components/area-header-v1'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import { useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'
import { shallowEqual } from 'react-redux'

export interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rakings = [] } = useAppSelector(
    (state) => ({
      rakings: state.recommend.rankings
    }),
    shallowEqual
  )
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rakings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
