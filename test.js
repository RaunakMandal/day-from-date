const { solution } = require('./index.js');

input1 = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2
}

input2 = {
    '2020-01-01': 6,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4
}

describe('result for input 1', () => {
    it('should return the correct result', () => {
        expect(solution(input1)).toEqual({
            'Mon': -6,
            'Tue': 2,
            'Wed': 2,
            'Thu': 4,
            'Fri': 6,
            'Sat': 8,
            'Sun': 2
        });
    });
});

describe('result for input 2', () => {
    it('should return the correct result', () => {
        expect(solution(input2)).toEqual({
            'Mon': 2,
            'Tue': 4,
            'Wed': 6,
            'Thu': undefined,
            'Fri': undefined,
            'Sat': 12,
            'Sun': 14
        });
    });
});