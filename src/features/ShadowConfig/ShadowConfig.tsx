import React from 'react'
import ConfigNavButton from './pages/ConfigNavButton'
import ShadowSettingsPanel from './pages/ShadowSettingsPanel'
import type { ShadowPropsType } from '../../core/types/ensembleTypes';

type ShadowConfigProps = ShadowPropsType;

export default function ShadowConfig({configShadow, setConfigShadow}: ShadowConfigProps) {
 

  return (
    <div>
      <ConfigNavButton />
      <ShadowSettingsPanel 
      configShadow={configShadow}
      setConfigShadow={setConfigShadow}
      />

    </div>
  )
}
