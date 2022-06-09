const letterFirstUpperCase = (str3) => {
    if (str3 !== "") {
        const str = str3;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2;
    }
    return "-/--/---";
};

const SentenceLetterUpperCase = (str3) => {
    if (str3 !== "") {
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        const caps = str3?.split(' ').map(capitalize).join(' ');
        return caps; // 'Captain Picard'
    } else {
        return "--------"
    }

}
const round = (num, digits = 2, format) => {
    if (format === "decimal") {
        if (num % 1 !== 0) {
            return Number(num).toFixed(digits);

        } else {
            return Number(num).toFixed(digits);
        }
    } else {
        return Number(num).toFixed(digits);
    }
};

export { letterFirstUpperCase, SentenceLetterUpperCase, round };