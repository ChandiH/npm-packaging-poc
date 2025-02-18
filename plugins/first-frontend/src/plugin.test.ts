import { firstFrontendPlugin } from './plugin';

describe('first-frontend', () => {
    it('should export plugin', () => {
        expect(firstFrontendPlugin).toBeDefined();
    });
});
