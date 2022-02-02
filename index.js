;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) : global.kenektDateParser = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    var hooks = {};
    hooks.kenektDateParser = function (value, locale) {
        window.moment.locale(locale);
        let dm = (locale === "en-US") ? 'M/D' : 'D/M'

        if(value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d (AM|PM)$/)){
            // DateTime.strptime timestamp, "%d/%m/%Y %I:%M %P"
            return window.moment(value, `${dm}/YYYY hh:mm A`).toDate();
        } else if(value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d?:\d\d?/)) {
            // DateTime.strptime timestamp, "%d/%m/%Y %H:%M:%S"
            return window.moment(value, `${dm}/YYYY HH:mm:ss`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d?/)){
            // DateTime.strptime timestamp, "%d/%m/%Y %H:%M"
            return window.moment(value, `${dm}/YYYY HH:mm`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)){
            // DateTime.strptime timestamp, "%d/%m/%Y"
            return window.moment(value, `${dm}/YYYY`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{2}$/)){
            // DateTime.strptime timestamp, "%d/%m/%y"
            return window.moment(value, `${dm}/YY`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{6}:\d{2}$/)){
            // DateTime.strptime timestamp, "%d/%m/%Y%H:%M"
            return window.moment(value, `${dm}/YYYYHH:mm`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{5}:\d{2}$/)){
            // DateTime.strptime timestamp, "%d/%m/%Y%k:%M"
            return window.moment(value, `${dm}/YYYYh:mm`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{6}:\d{2}:\d{2}(AM|PM)$/)){
            // DateTime.strptime timestamp, "%d/%m/%Y%l:%M:%S%p"
            return window.moment(value, `${dm}/YYYYhh:mm:ssA`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{5}:\d{2}:\d{2}(AM|PM)$/)){
            // DateTime.strptime timestamp, "%d/%m/%Y%l:%M:%S%p"
            return window.moment(value, `${dm}/YYYYh:mm:ssA`).toDate();
        } else if (value.match(/\d{4}([-\/.])(?:0[1-9]|1[0-2])\1(?:0[1-9]|[12][0-9]|3[0-1])/)){
            // Time.parse timestamp
            return window.moment(value).toDate();
        } else if (value.match(/^\d{1,2}\/\d{2}\/\d{4} \d{1,2}:\d\d$/)){
            // Time.parse timestamp
            return window.moment(value, `${dm}/YYYY H:mm`).toDate();
        } else if (value.match(/^\d{1,2}\/\d{2}\/\d{4}$/)){
            // Time.parse timestamp
            return window.moment(value, `${dm}/YYYY`).toDate();
        } else {
            return null;
        }
    };
    console.log("I AM HERE");
    return hooks;

})));
