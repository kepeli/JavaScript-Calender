const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const monthsAndDaysCount = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
}

function printDateMonth(month) {
    const monthHeading = daysOfWeek.join('\t');
    const months = Object.keys(monthsAndDaysCount);

    //check that month is valid
    const isValidMonth = months.includes(month.toLowerCase())

    if (isValidMonth == false) {
        console.log("Please enter a correct month");
        return;
    }

    //print the calender head

    console.log(monthHeading);

    //get the number of days before this month
    const idxOfMonth = months.indexOf(month.toLowerCase())
    let totalDays = 0;
    console.log(idxOfMonth)

    for (let i = 0; i < idxOfMonth; i++) {
        totalDays += monthsAndDaysCount[months[i]];
    }
    console.log(totalDays);
    //determine when the month started
    let dayIdx = totalDays % 7;
    const daysInMonth = monthsAndDaysCount[months[idxOfMonth]]

    let entry = [];

    for (let j = 0; j < dayIdx; j++) {
        entry.push(" ");
    }
    let day = 1;
    while (entry.length < 7 && day <= daysInMonth) {
        entry.push(day);

        if (entry.length == 7 || day == daysInMonth) {
            console.log(entry.join('\t'));
            entry = [];
        }
        day += 1
    }


}

printDateMonth("december");

