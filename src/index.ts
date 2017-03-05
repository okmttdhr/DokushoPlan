import * as moment from 'moment';

export const daysToBeRead = (endDate: moment.Moment = moment('2017-03-30')) => {
    const today = moment().startOf('day');
    const diff = endDate.diff(today, 'days');
    return diff;
}

export const pagesForOneDay = (totalPages: number, currentPages: number, endDate: moment.Moment) => {
    return (totalPages - currentPages) / daysToBeRead(endDate);
}
