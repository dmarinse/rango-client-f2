import { Divider } from '@rango-dev/ui';
import React from 'react';

import { DefaultChainAndToken } from '../DefaultChainAndToken/DefaultChainAndToken';
import { SupportedBlockchains } from '../SupportedBlockchains';

import { FromToContainer } from './FunctionalLayout.styles';

export function ToSection() {
  return (
    <>
      <SupportedBlockchains type="Destination" />
      <Divider size={12} />

      <FromToContainer>
        <DefaultChainAndToken type="Destination" />
      </FromToContainer>
    </>
  );
}