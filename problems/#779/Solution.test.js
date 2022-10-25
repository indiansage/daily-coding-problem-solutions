import findMinimumTrialDrops from "./Solution";

describe("Test Solution #779", () => {
	test("should return correct solution", () => {
		// expect(findMinimumTrialDrops(eggs, floors)).toBe(result);
		expect(findMinimumTrialDrops(1, 5)).toBe(5);
		expect(findMinimumTrialDrops(2, 10)).toBe(4);
		expect(findMinimumTrialDrops(5, 36)).toBe(8);
	});
});
