'use strict'

{
    const leapYearRange = (n, m) => {
        const yearRange = [];
        let startYear;
        let endYear;
        if(n < m) {
            startYear = n;
            endYear = m;
        } else {
            startYear = m;
            endYear = n;
        }
        
        for (let i = startYear; i <= endYear; i++) {
            yearRange.push(i);
        }
        const newArray = [];
        yearRange.forEach(
        year => { 
            if (leapYear(year)) {
                newArray.push(year);
            }
        });
        return newArray;
    }
    const leapYear = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
        } else {
            return false;
        }
    }
    console.log(leapYearRange(2000,2022));
}