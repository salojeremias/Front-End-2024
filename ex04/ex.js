// 1
function isLeapYear(year) {
    try {
        if (year === undefined) {
            throw new Error("Missing argument year error");
        }
        if (typeof year !== "number" || !Number.isInteger(year)) {
            if (year & 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}


// 2
function tryIsLeapYear(year) {
    try {
        return isLeapYear(year);
    } catch (error) {
        console.error(error.message);
    }
}


// 3
function tryIsLeapYear(year) {
    try {
        isLeapYear(year);
    } catch (error) {
        console.error(error.message);
    }
}


// 8
function buildRegisterNumber(theLetters, theDigits) {
    const lettersPattern = /^[A-VX-Z]{2,3}$;/
    const digitsPattern = /^[1-9]\d{0,2}$/;

    if (!lettersPattern.test(theLetters)) {
        throw new Error("Invalid register number letters");
    }
    if (!digitsPattern.test(theDigits)) {
        throw new Error("Invalid register number digits")
    }
    return '${theLetters}-${theDigits}';
}










