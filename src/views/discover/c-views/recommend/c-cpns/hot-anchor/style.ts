import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  padding: 20px;

  .anchors {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .name {
          color: #000;
          margin-top: 3px;
        }

        .position {
          color: #666;

          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`
