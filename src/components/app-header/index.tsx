import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function titleItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {titleItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="input">
            <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          </span>
          <span className='center'>创作者中心</span>
          <span className='login'>登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
