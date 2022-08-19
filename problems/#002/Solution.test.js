import returnSolutionUsingDivision from "./Solution";

describe("Test Solution #002", () => {
	test("should return correct solution", () => {
		expect(returnSolutionUsingDivision([1, 2, 3, 4, 5])).toEqual([
			120, 60, 40, 30, 24,
		]);
		expect(returnSolutionUsingDivision([3, 2, 1])).toEqual([2, 3, 6]);
	});
});
