;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) : global.kendidate = factory()
}(this, (function () { 'use strict';

    var hooks = {};
    hooks.parse = function (value, locale) {
        window.moment.locale(locale);
        let dm = (locale === "en-US") ? 'M/D' : 'D/M';
        let thisMoment;
        if(value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d (AM|PM)$/)){
          // DateTime.strptime timestamp, "%d/%m/%Y %I:%M %P"
          thisMoment =  window.moment(value, `${dm}/YYYY hh:mm A`);
        } else if(value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d?:\d\d?/)) {
          // DateTime.strptime timestamp, "%d/%m/%Y %H:%M:%S"
          thisMoment =  window.moment(value, `${dm}/YYYY HH:mm:ss`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{4} \d\d?:\d\d?/)){
          // DateTime.strptime timestamp, "%d/%m/%Y %H:%M"
          thisMoment =  window.moment(value, `${dm}/YYYY HH:mm`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)){
          // DateTime.strptime timestamp, "%d/%m/%Y"
          thisMoment =  window.moment(value, `${dm}/YYYY`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{2}$/)){
          // DateTime.strptime timestamp, "%d/%m/%y"
          thisMoment =  window.moment(value, `${dm}/YY`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{6}:\d{2}$/)){
          // DateTime.strptime timestamp, "%d/%m/%Y%H:%M"
          thisMoment =  window.moment(value, `${dm}/YYYYHH:mm`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{5}:\d{2}$/)){
          // DateTime.strptime timestamp, "%d/%m/%Y%k:%M"
          thisMoment =  window.moment(value, `${dm}/YYYYh:mm`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{6}:\d{2}:\d{2}\s*(AM|PM)$/)){
          // DateTime.strptime timestamp, "%d/%m/%Y%l:%M:%S%p"
          thisMoment =  window.moment(value, `${dm}/YYYYhh:mm:ssA`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{5}:\d{2}:\d{2}\s*(AM|PM)$/)){
          // DateTime.strptime timestamp, "%d/%m/%Y%l:%M:%S%p"
          thisMoment =  window.moment(value, `${dm}/YYYYh:mm:ssA`);
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{5}:\d{2}:\d{2}\*(AM|PM)$/)){
          // DateTime.strptime timestamp, "%d/%m/%Y%l:%M:%S%p"
          thisMoment =  window.moment(value, `${dm}/YYYYh:mm:ssA`);
        } else if (value.match(/\d{4}([-\/.])(?:0[1-9]|1[0-2])\1(?:0[1-9]|[12][0-9]|3[0-1])/)){
          // Time.parse timestamp
          thisMoment =  window.moment(value);
        } else if (value.match(/^\d{1,2}\/\d{2}\/\d{4} \d{1,2}:\d\d$/)){
          // Time.parse timestamp
          thisMoment =  window.moment(value, `${dm}/YYYY H:mm`);
        } else if (value.match(/^\d{1,2}\/\d{2}\/\d{4}$/)){
          // Time.parse timestamp
          thisMoment =  window.moment(value, `${dm}/YYYY`);
        } else {
          thisMoment =  window.moment(value);
        }

        if (thisMoment.isValid()){
          return thisMoment.toDate();
        } else{
          return '';
        }
    };
    return hooks;
})));
