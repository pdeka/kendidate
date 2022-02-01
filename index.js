import moment from 'moment';

module.exports = function parse(value, locale) {
    moment.locale(locale);
    let dm = (locale === "en-US") ? 'M/D' : 'D/M'

    if(value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d (AM|PM)$/)){
        // DateTime.strptime timestamp, "%d/%m/%Y %I:%M %P"
        return moment(value, `${dm}/YYYY hh:mm A`).toDate();
    } else if(value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d?:\d\d?/)) {
        // DateTime.strptime timestamp, "%d/%m/%Y %H:%M:%S"
        return moment(value, `${dm}/YYYY HH:mm:ss`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d?/)){
        // DateTime.strptime timestamp, "%d/%m/%Y %H:%M"
        return moment(value, `${dm}/YYYY HH:mm`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)){
        // DateTime.strptime timestamp, "%d/%m/%Y"
        return moment(value, `${dm}/YYYY`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{2}$/)){
        // DateTime.strptime timestamp, "%d/%m/%y"
        return moment(value, `${dm}/YY`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{6}:\d{2}$/)){
        // DateTime.strptime timestamp, "%d/%m/%Y%H:%M"
        return moment(value, `${dm}/YYYYHH:mm`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{5}:\d{2}$/)){
        // DateTime.strptime timestamp, "%d/%m/%Y%k:%M"
        return moment(value, `${dm}/YYYYh:mm`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{6}:\d{2}:\d{2}(AM|PM)$/)){
        // DateTime.strptime timestamp, "%d/%m/%Y%l:%M:%S%p"
        return moment(value, `${dm}/YYYYhh:mm:ssA`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{5}:\d{2}:\d{2}(AM|PM)$/)){
        // DateTime.strptime timestamp, "%d/%m/%Y%l:%M:%S%p"
        return moment(value, `${dm}/YYYYh:mm:ssA`).toDate();
    } else if (value.match(/\d{4}([-\/.])(?:0[1-9]|1[0-2])\1(?:0[1-9]|[12][0-9]|3[0-1])/)){
        // Time.parse timestamp
        return moment(value).toDate();
    } else if (value.match(/^\d{1,2}\/\d{2}\/\d{4} \d{1,2}:\d\d$/)){
        // Time.parse timestamp
        return moment(value, `${dm}/YYYY H:mm`).toDate();
    } else if (value.match(/^\d{1,2}\/\d{2}\/\d{4}$/)){
        // Time.parse timestamp
        return moment(value, `${dm}/YYYY`).toDate();
    } else {
        return null;
    }
}
