
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (totalPeople, trust) {
    let size = trust.length;
    const degreeTrust = new Array(totalPeople + 1).fill(0);
    for (let i = 0; i < size; i++) {
        degreeTrust[trust[i][0]]--;
        degreeTrust[trust[i][1]]++;
    }

    for (let person = 1; person <= totalPeople; person++) {
        if (degreeTrust[person] === totalPeople - 1) {
            return person;
        }
    }
    return -1;
};
