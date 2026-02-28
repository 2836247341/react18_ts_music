import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { HeaderV1Wrapper } from './style'

export interface IProps {
  children?: ReactNode
  title?: string
  keyword?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    title = '热门推荐',
    keyword = [],
    moreText = '更多',
    moreLink = '/'
  } = props

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h1 className="title">{title}</h1>
        <div className="keyword">
          {keyword.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="more">
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
