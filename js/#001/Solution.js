/**
 * Return true if two numbers add up to target
 * @param {number[]} numbers
 * @param {number} target
 * @return {boolean}
 */
const isSolutionPossible = (numbers, target) => {
    let set = new Set();
    return numbers.some((number) => {
        let neededNumber = target - number;
        if(set.has(neededNumber)){
            return true;
        }
        set.add(number);
        return false;
    })
}

export default isSolutionPossible;