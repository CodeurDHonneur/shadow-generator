import React from "react";

export type ShadowPropsType = {
  configShadow: {
    horizontalOffset: number;
    verticalOffset: number;
    blurRadius: number;
    spreadOffset: number;
    color: string;
};
  setConfigShadow: React.Dispatch<React.SetStateAction<{
    horizontalOffset: number;
    verticalOffset: number;
    blurRadius: number;
    spreadOffset: number;
    color: string;
}>>
}