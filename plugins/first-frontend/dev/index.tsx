import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { firstFrontendPlugin, FirstFrontendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(firstFrontendPlugin)
  .addPage({
    element: <FirstFrontendPage />,
    title: 'Root Page',
    path: '/first-frontend',
  })
  .render();
