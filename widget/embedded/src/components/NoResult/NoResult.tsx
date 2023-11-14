import type { PropTypes } from './NoResult.types';

import {
  Alert,
  Button,
  Divider,
  NoRouteIcon,
  RefreshIcon,
  Typography,
} from '@rango-dev/ui';
import React from 'react';

import { errorMessages } from '../../constants/errors';
import { useSettingsStore } from '../../store/settings';

import { makeInfo } from './NoResult.helpers';
import { Container, Footer, PrefixIcon } from './NoResult.styles';

export function NoResult(props: PropTypes) {
  const { fetch, error } = props;
  const disabledLiquiditySources =
    useSettingsStore.use.disabledLiquiditySources();
  const toggleAllLiquiditySources =
    useSettingsStore.use.toggleAllLiquiditySources();

  const info = makeInfo(
    error,
    disabledLiquiditySources,
    toggleAllLiquiditySources,
    fetch
  );

  return (
    <Container>
      <NoRouteIcon size={24} color="gray" />
      <Divider size={4} />
      <Typography variant="title" size="small">
        {errorMessages().noResultError.title}
      </Typography>
      {!!info.description && (
        <Typography
          variant="body"
          size="small"
          align="center"
          color="neutral700">
          {info.description}
        </Typography>
      )}
      <Divider size={4} />
      {!!info.alert && (
        <Footer>
          <Alert
            type={info.alert.type}
            title={info.alert.text}
            action={
              info.alert.action && (
                <Button
                  size="xsmall"
                  type={info.alert.type}
                  prefix={
                    <PrefixIcon>
                      <RefreshIcon size={8} />
                    </PrefixIcon>
                  }
                  onClick={info.alert.action.onClick}>
                  {info.alert.action.title}
                </Button>
              )
            }
            variant="alarm"
          />
        </Footer>
      )}
    </Container>
  );
}