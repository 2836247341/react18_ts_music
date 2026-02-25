import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};

  .nav {
    display: flex;
    position: relative;
    top: -4px;

    &::before {
      content: '';
      width: 180px;
      flex-shrink: 0;
    }

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
