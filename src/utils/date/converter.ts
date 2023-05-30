// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// A module to convert Bikram Samwat [B.S.] to A.D. and vice versa.
// Usage:
// print nepdate.ad2bs[[1995,9,12]]
// print nepdate.bs2ad[[2052,05,27]]
// Range:
// 1944 A.D. to 2033 A.D.
// 2000 B.S. to 2089 B.S.
// bs : a dictionary that contains the number of days in each month of the B.S. year
// bs_equiv, ad_equiv  : The B.S. and A.D. equivalent dates for counting and calculation
import bs from '@/utils/date/constant'

const BS_EQIV = '2000-9-17'
const AD_EQIV = '1944-1-1'


var _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const Converter = {
    countBsDays: function (begin_bs_date, end_bs_date) {

        // Returns the number of days between the two given B.S. dates.
        // begin_ad_date : A tuple in the format (year,month,day) that specify the date to start counting from.
        // end_ad_date : A tuple in the format (year,month,day) that specify the date to end counting.
        // NOTE:
        // Tuple in the dictionary starts from 0
        // The range(a,b) function starts from a and ends at b-1

        let [begin_year, begin_month, begin_day] = begin_bs_date.split('-').map(data => parseInt(data))
        let [end_year, end_month, end_day] = end_bs_date.split('-').map(data => parseInt(data))

        let days = 0

        // 1) First add total days in all the years
        for (let year = begin_year; year < end_year + 1; year++) {
            for (let days_in_month of bs[year]) {
                days = days + days_in_month
            }
        }
        // 2) Subtract the days from first (n-1) months of the beginning year
        for (let month = 0; month < begin_month; month++) {
            days = days - bs[begin_year][month]
        }
        // 3) Add the number of days from the last month of the beginning year
        days = days + bs[begin_year][12 - 1]

        // 4) Subtract the days from the last months from the end year
        for (let month = end_month - 1; month < 12; month++) {
            days = days - bs[end_year][month]
        }

        // 5) Add the beginning days excluding the day itself
        days = days - begin_day - 1

        // 5) Add the last remaining days excluding the day itself
        days = days + end_day - 1
        return days

    },

    countAdDays: function (begin_ad_date, end_ad_date) {
        // Returns the number of days between the two given A.D. dates.
        // begin_ad_date : A tuple in the format (year,month,day) that specify the date to start counting from.
        // end_ad_date : A tuple in the format (year,month,day) that specify the date to end counting.
        let date_begin = new Date(begin_ad_date)
        let date_end = new Date(end_ad_date)

        return dateDiffInDays(date_begin, date_end)
    },

    addAdDays: function (ad_date, num_days) {
        // Adds the given number of days to the given A.D. date and returns it as a tuple in the format (year,month,day)
        // ad_date : A tuple in the format (year,month,day)
        // num_days : Number of days to add to the given date
        let date = new Date(ad_date)
        date.setDate(date.getDate() + num_days)
        let monthPadding = date.getMonth() + 1 < 10 ? '0' : ''
        let datePadding = date.getDate() < 10 ? '0' : ''
        return `${date.getFullYear()}-${monthPadding}${date.getMonth() + 1}-${datePadding}${date.getDate()}`
    },

    addBsDays: function (bs_date, num_days) {
        // Adds the given number of days to the given B.S. date and returns it as a tuple in the format (year,month,day)
        // bs_date : a tuple in the format (year,month,day)
        // num_days : Number of days to add to the given date
        // Note:
        // Tuple in the dictionary starts from 0
        // console.log(bs_date)
        let [year, month, day] = bs_date.split('-').map(data => parseInt(data))


        // 1) Add the total number of days to the original days
        day = day + num_days

        // 2) Until the number of days becomes applicable to the current month,
        // subtract the days by the number of days in the current month and increase the month

        // try {
        // debugger;
        // console.log(year, month, day)
        // console.log(bs[year][month - 1])
        while (day > bs[year][month - 1]) {

            // console.log(year, month)
            // console.log(bs[year])
            // if (bs[year] < 2091) {
            day = day - bs[year][month - 1]
            // console.log(day)
            month = month + 1
            // console.log(month)
            if (month > 12) {
                month = 1
                year = year + 1
                if (year === 2090) {
                    // because year is limited to 2090
                    break;
                }
            }
            // }


            // console.log(year, month)
        }
        // } catch (e) {
        //     console.log(e)
        // }
        let monthPadding = month < 10 ? '0' : ''
        let datePadding = day < 10 ? '0' : ''
        // console.log("addBsDays")
        return `${year}-${monthPadding}${month}-${datePadding}${day}`

    },

    bs2ad: function (bs_date) {
        // input and output in string
        // console.log(bs_date)
        if (this.is_valid(bs_date)) {
            let date_delta = this.countBsDays(BS_EQIV, bs_date)
            return this.addAdDays(AD_EQIV, date_delta)
        } else {
            throw 'Invalid BS Date'
        }
    },

    ad2bs: function (ad_date) {
        // Returns the B.S. equivalent date as a tuple in the format (year,month,day) if the date is within range, else returns None
        // bs_date : A tuple in the format (year,month,day)
        // try {
        if (!ad_date) {
            return null
        }
        let dt = new Date(ad_date)

        if (dt != 'Invalid Date') {
            let date_delta = this.countAdDays(AD_EQIV, ad_date)
            // console.log("ad2bs")
            return this.addBsDays(BS_EQIV, date_delta)
        }
        // } catch (e) {
        //     throw 'invalid date'
        // }
        throw 'invalid date'


    },

    getADYear: function (bs_date) {
        let ad_date = this.bs2ad(bs_date)
        return parseInt(ad_date.split('-')[0])
    },

    getADMonth: function (bs_date) {
        let ad_date = this.bs2ad(bs_date)
        return parseInt(ad_date.split('-')[1])
    },

    getBSYear: function (ad_date) {
        let bs_date = this.ad2bs(ad_date)
        return parseInt(bs_date.split('-')[0])
    },

    getBSMonth: function (ad_date) {
        let bs_date = this.ad2bs(ad_date)
        return parseInt(bs_date.split('-')[1])
    },

    getBSDay: function (ad_date) {
        let bs_date = this.ad2bs(ad_date)
        let dateArray = bs_date.split('-')
        return parseInt(dateArray[dateArray.length - 1])
    },

    is_valid: function (date_as_str) {
        // """
        // Checks if the fed date string is a valid B.S. date
        // date_as_str: String in the format 'YYYY-MM-DD'
        // Returns True for valid date, False for invalid.
        // """
        let [year, month, day] = [null, null, null]
        try {
            [year, month, day] = date_as_str.split('-').map(data => parseInt(data))
        } catch (e) {
            return false
        }
        if (!(0 < month && month < 13)) {
            return false
        }
        try {
            if (!(0 < day && day <= bs[year][month - 1])) {
                return false
            }
        } catch (e) {
            throw `The year ${year} is not supported`
        }
        return true
    },

    getMonthDays(year, month) {
        try {
            return bs[year][month - 1]
        } catch (e) {
            throw `BS ${year} not supported.`
        }
    },

    getYears() {
        return Object.keys(bs)
    },

    getMonths() {
        return [
            'Baishakh',
            'Jestha',
            'Aashadha',
            'Shrawan',
            'Bhadra',
            'Ashwin',
            'Kartik',
            'Mangsir',
            'Paush',
            'Magh',
            'Falgun',
            'Chaitra',
        ]
    },

    getDays() {
        return [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]
    }
}


export default Converter;
