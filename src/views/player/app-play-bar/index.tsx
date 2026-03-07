import React, { memo } from "react";
import type { ReactNode, FC } from "react";
import { PlayerBarWrapper } from "./style";

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      AppPlayerBar
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)