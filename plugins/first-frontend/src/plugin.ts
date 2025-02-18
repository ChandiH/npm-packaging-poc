import {
    createPlugin,
    createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const firstFrontendPlugin = createPlugin({
    id: 'first-frontend',
    routes: {
        root: rootRouteRef,
    },
});

export const FirstFrontendPage = firstFrontendPlugin.provide(
    createRoutableExtension({
        name: 'FirstFrontendPage',
        component: () =>
            import('./components/ExampleComponent').then(
                (m) => m.ExampleComponent
            ),
        mountPoint: rootRouteRef,
    })
);
