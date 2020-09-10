import isSolutionPossible from './Solution';

describe('Test Solution #001', () => {
	test('should return true', () => {
		expect(isSolutionPossible([4, 8, -2, 0, 6], 2)).toBe(true);
	});
	test('should return false', () => {
		expect(isSolutionPossible([4, 8, -1, 0, 6], 2)).toBe(false);
	});
});
