/**
 * Return product of all the numbers in the original array except the one at same index
 * @param {number[]} array
 * @return {number[]}
 */
const returnSolutionUsingDivision = (array) => {
	const product = array.reduce((prev, curr) => prev * curr, 1);
	return array.map((curr) => product / curr);
};

export default returnSolutionUsingDivision;
