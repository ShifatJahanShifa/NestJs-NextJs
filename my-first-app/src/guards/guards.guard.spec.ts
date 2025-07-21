import { ApiKeyGuard } from './guards.guard';

describe('ApiKeyGuard', () => {
  it('should be defined', () => {
    expect(new ApiKeyGuard()).toBeDefined();
  });
});
