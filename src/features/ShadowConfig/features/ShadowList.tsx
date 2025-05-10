import React from 'react'
import Shadow from '../components/Shadow'
import type { ShadowPropsType } from '../../../core/types/ensembleTypes';

type ShadowListProps = ShadowPropsType;

export default function ShadowList({configShadow, setConfigShadow}: ShadowListProps) {

  return (
    <div>
      <Shadow 
      configShadow={configShadow}
      setConfigShadow={setConfigShadow}
      />
    </div>
  )
}
