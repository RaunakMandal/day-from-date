exports.solution = function (D) {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const result = {
        'Mon': undefined,
        'Tue': undefined,
        'Wed': undefined,
        'Thu': undefined,
        'Fri': undefined,
        'Sat': undefined,
        'Sun': undefined
    };

    for (const key in D) {
        const date = new Date(key);
        const day = weekDays[date.getDay()];
        if (result[day] === undefined) {
            result[day] = D[key];
        } else {
            result[day] += D[key];
        }
    }

    for (let i = 0; i < weekDays.length; i++) {
        const currentDay = weekDays[i];
        const prevDay = weekDays[(i + 6) % 7];
        const nextDay = weekDays[(i + 1) % 7];

        if (result[currentDay] === undefined) {
            if (result[prevDay] !== undefined && result[nextDay] !== undefined) {
                result[currentDay] = (result[prevDay] + result[nextDay]) / 2;
            }
        }
    }

    return result;
}