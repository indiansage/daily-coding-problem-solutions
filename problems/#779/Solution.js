/**
 * Find the minimum number of trial drops, in the worst-case, to find threshold floor where egg breaks.
 * @param {number} number number of eggs in hand
 * @param {number} number number of floors to check
 * @return {number} number
 */
const findMinimumTrialDrops = (eggs, floors) => {
	if (eggs === 1) return floors; // Base case - if only one egg in hand, we have to try at each floor.
};

export default findMinimumTrialDrops;
