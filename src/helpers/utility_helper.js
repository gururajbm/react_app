import _ from 'lodash';
import moment from 'moment';

const dbDateFormat = (params) => {
    const dateExcludeTime = _.split(params, 'T');
    const dateArray = _.split(dateExcludeTime[0], '-');
    return dateArray[1] + '-' + dateArray[2] + '-' + dateArray[0];
};

const dateFormatMmddyy = (parmas) => {
    return moment(parmas).format('MM-DD-YY');
};
const dbDateFormatMmddyy = (params) => {
    if (params !== undefined && params !== null && params !== '') {
        const dateExcludeTime = _.split(params, 'T');
        const dateArray = _.split(dateExcludeTime[0], '-');
        const year = dateArray[0].substring(2, 4);
        return dateArray[1] + '-' + dateArray[2] + '-' + year;
    }
    return '';
};

const dbDateFormatDdmmyyyy = (params) => {
    const dateExcludeTime = _.split(params, 'T');
    const dateArray = _.split(dateExcludeTime[0], '-');
    return dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
};

const dbDateFormatMmddyyHHmm = (params) => {
    const dateTime = moment(params).format('ddd, MMM DD, hh:mm A');
    return dateTime;
};

const dateDifferenceInWeeks = (startDate, endDate) => {
    return endDate.diff(startDate, 'weeks');
};

const dateDifferenceInDays = (startDate, endDate) => {
    return endDate.diff(startDate, 'days');
};

const getDdDateIntoArray = (params) => {
    const dateExcludeTime = _.split(params, 'T');
    return _.split(dateExcludeTime[0], '-');
};

const dbDateFormatMmddyyHHmmaa = (params) => {
    return moment(params).format('MM-DD-YY, h:mm A');
};

const formatddmmyyyyTommddyyyy = (param) => {
    const dateArray = _.split(param, '-');
    return dateArray[1] + '-' + dateArray[0] + '-' + dateArray[2];
};

const formatddmmyyyyTommddyy = (param) => {
    const dateArray = _.split(param, '-');
    const year = dateArray[2].substring(2, 4);
    return dateArray[1] + '-' + dateArray[0] + '-' + year;
};

const formatddmmyyyyToyyyymmdd = (param) => {
    const dateArray = _.split(param, '-');
    return dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
};

const addOneDayToDate = (param) => {
    const date = moment(param);
    return date.add(1, 'd').format('DD-MM-YYYY');
};
const getTwoWeekBeforeDate = (param) => {
    const date = moment(param);
    return date.subtract(14, 'days');
};
const getTwoWeekBeforeDateFormat = (param) => {
    const date = moment(param);
    return date.subtract(14, 'days').format('DD-MM-YYYY');
};
const getTwoWeekAfterDate = (param) => {
    const date = moment(param);
    return date.add(14, 'days').format('DD-MM-YYYY');
};

const getStartDateOfWeek = (param) => {
    const date = moment(param);
    const begin = moment(date).startOf('week').isoWeekday(7);
    return begin.format('DD-MM-YYYY');
};

const getSixWeekDateFormDate = (param) => {
    const date = moment(param);
    let begin = moment(date).startOf('week').isoWeekday(7);
    begin = begin.add(41, 'd');
    return begin.format('DD-MM-YYYY');
};

const getOneMonthDateFormDate = (param) => {
    const date = moment(param);
    let begin = moment(date).startOf('week').isoWeekday(7);
    begin = begin.add(27, 'd');
    return begin.format('DD-MM-YYYY');
};

const getArraySliceByStartEndKey = (param, startKey, endKey) => {
    const startIndex = _.findIndex(param, startKey);
    const endIndex = _.findIndex(param, endKey);
    return _.slice(param, startIndex, endIndex);
};

const sortObjectByKey = (param) => {
    const sortedObject = _(param)
        .map((v, k) => {
            return _.merge({}, v, { key: k });
        })
        .value();
    return sortedObject.sort((a, b) => {
        const date1 = _.split(a.key, '-');
        const date2 = _.split(b.key, '-');
        const c = new Date(new Date(date1[2] + '-' + date1[1] + '-' + date1[0]));
        const d = new Date(new Date(date2[2] + '-' + date2[1] + '-' + date2[0]));
        return c - d;
    });
};

const sortObjectArrayValueByDate = (param, valueKey) => {
    return param.sort((a, b) => {
        const date1 = moment(a[valueKey]);
        const date2 = moment(b[valueKey]);
        return date1 - date2;
    });
};

const sortObjectArrayValueAlphabetically = (param, valueKey) => {
    if (param && param.length) {
        return param.sort((a, b) => {
            if (a[valueKey] === null || b[valueKey] === null) {
                return 0;
            }
            const firstValue = a[valueKey].toLowerCase();
            const secondValue = b[valueKey].toLowerCase();
            if (firstValue < secondValue) {
                return -1;
            }
            if (firstValue > secondValue) {
                return 1;
            }
            return 0;
        });
    }
    return param;
};
const sortArrayByKey = (param) => {
    param.sort((a, b) => {
        return false;
    });
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const formatTimeStampToDate = (param) => {
    const date = new Date(Number(param));
    return moment(date).format('MM-DD-YYYY');
};

const formatPhoneNumber = (phone) => {
    if (phone === null || phone === '' || phone === undefined) {
        return null;
    }
    const ph = phone.replace(/[^\d]/g, '');
    if (ph.length === 10) {
        return ph.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    return null;
};

const arrayReverse = (param) => {
    return _.reverse(param);
};

const inArray = (param, value) => {
    const found = _.find(param, (item) => { return item === value; });
    if (found) {
        return true;
    }
    return false;
};

const getFirstCharacterFromString = (name) => {
    if (name === null || name === '' || name === undefined) {
        return '';
    }
    return name.charAt(0);
};

const truncatedString = (str, len = 50, ending = '') => {
    if (str === null || str.trim() === '') {
        return '';
    }
    if (str.length > len) {
        return str.substring(0, len) + ending;
    }
    return str;
};

const addressFormat = (address) => {
    let partAddress = '';
    if (address === '' || address === undefined || address === null) {
        return '';
    }
    partAddress = address.split(',');
    return partAddress;
};

const toTitleCase = (str) => {
    const text = _.toLower(str);
    return text.replace(
        /\w\S*/g,
        (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};

const firstLetterCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const addBusinessDays = (date, daysToAdd) => {
    let cnt = 0;
    let tmpDate = moment(date);
    while (cnt < daysToAdd) {
        tmpDate = tmpDate.add('days', 1);
        if (tmpDate.weekday() !== moment().day('Sunday').weekday()
            && tmpDate.weekday() !== moment().day('Saturday').weekday()
        ) {
            cnt++;
        }
    }
    return tmpDate;
};

const uiDateFormat = (date) => {
    const getDate = new Date(date);
    return getDate.getDate() + '-' + getDate.getMonth() + '-' + getDate.getFullYear();
};

export const utility = {
    dbDateFormat,
    dbDateFormatMmddyy,
    dbDateFormatMmddyyHHmm,
    formatddmmyyyyTommddyyyy,
    formatddmmyyyyTommddyy,
    formatddmmyyyyToyyyymmdd,
    dbDateFormatMmddyyHHmmaa,
    addOneDayToDate,
    getStartDateOfWeek,
    getOneMonthDateFormDate,
    getArraySliceByStartEndKey,
    sortArrayByKey,
    sortObjectByKey,
    updateObject,
    guid,
    formatTimeStampToDate,
    formatPhoneNumber,
    sortObjectArrayValueByDate,
    sortObjectArrayValueAlphabetically,
    arrayReverse,
    inArray,
    getFirstCharacterFromString,
    getTwoWeekAfterDate,
    getSixWeekDateFormDate,
    getTwoWeekBeforeDate,
    truncatedString,
    toTitleCase,
    dateDifferenceInWeeks,
    getDdDateIntoArray,
    dbDateFormatDdmmyyyy,
    addBusinessDays,
    dateFormatMmddyy,
    dateDifferenceInDays,
    firstLetterCapital,
    uiDateFormat,
    addressFormat,
    getTwoWeekBeforeDateFormat
};
