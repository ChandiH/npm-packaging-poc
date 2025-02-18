import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { firstFrontendPlugin, FirstFrontendPage } from '../src/plugin';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import { CounterComponent } from '../src/components/counter';

createDevApp()
  .registerPlugin(firstFrontendPlugin)
  .addPage({
    element: <FirstFrontendPage />,
    title: 'Root Page',
    path: '/first-frontend',
  })
  .addPage({
    element: (
      <div style={{ padding: 24 }}>
        <CounterComponent />
      </div>
    ),
    title: 'Counter',
})
  .render();
