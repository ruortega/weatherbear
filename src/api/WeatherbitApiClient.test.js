import nock from 'nock';

import { Configurations, } from '../Configurations';
import { WeatherbitApiClient, } from './WeatherbitApiClient';

const latitude = 22.3080;
const longitude = 113.9185;
const locale = 'en';

const currentWeatherResponse = {
    'data'  : [
        {
            'rh'             : 82,
            'pod'            : 'd',
            'lon'            : 113.92,
            'pres'           : 822.8,
            'timezone'       : 'Asia/Hong_Kong',
            'ob_time'        : '2020-04-14 07:02',
            'country_code'   : 'HK',
            'clouds'         : 100,
            'ts'             : 1586847720,
            'solar_rad'      : 143.8,
            'state_code'     : 'NIS',
            'city_name'      : 'Tung Chung',
            'wind_spd'       : 1.34,
            'last_ob_time'   : '2020-04-14T07:02:00',
            'wind_cdir_full' : 'east',
            'wind_cdir'      : 'E',
            'slp'            : 915,
            'vis'            : 5,
            'h_angle'        : 45,
            'sunset'         : '10:43',
            'dni'            : 893.39,
            'dewpt'          : 13,
            'snow'           : 0,
            'uv'             : 7.07564,
            'precip'         : 0,
            'wind_dir'       : 96,
            'sunrise'        : '22:03',
            'ghi'            : 798.88,
            'dhi'            : 115.17,
            'aqi'            : 94,
            'lat'            : 22.31,
            'weather'        : {
                'icon'        : 'c04d',
                'code'        : '804',
                'description' : 'Overcast clouds',
            },
            'datetime'       : '2020-04-14:07',
            'temp'           : 16.1,
            'station'        : 'AU846',
            'elev_angle'     : 50.68,
            'app_temp'       : 16.2,
        },
    ],
    'count' : 1,
};

const hourlyWeatherResponse = {
    'data'         : [
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 70,
            'pod'             : 'd',
            'timestamp_utc'   : '2020-04-14T08:00:00',
            'pres'            : 1013.73,
            'solar_rad'       : 148.165,
            'ozone'           : 292.382,
            'weather'         : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_gust_spd'   : 5.11357,
            'timestamp_local' : '2020-04-14T16:00:00',
            'snow_depth'      : 0,
            'clouds'          : 100,
            'ts'              : 1586851200,
            'wind_spd'        : 4.80252,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1015.15,
            'dni'             : 826.52,
            'dewpt'           : 15.4,
            'snow'            : 0,
            'uv'              : 1.38885,
            'wind_dir'        : 107,
            'clouds_hi'       : 100,
            'precip'          : 0,
            'vis'             : 24.1349,
            'dhi'             : 102.26,
            'app_temp'        : 21,
            'datetime'        : '2020-04-14:08',
            'temp'            : 21.1,
            'ghi'             : 592.66,
            'clouds_mid'      : 30,
            'clouds_low'      : 0,
        },
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 72,
            'pod'             : 'd',
            'timestamp_utc'   : '2020-04-14T09:00:00',
            'pres'            : 1013.89,
            'solar_rad'       : 88.345,
            'ozone'           : 293.461,
            'weather'         : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_gust_spd'   : 5.10676,
            'timestamp_local' : '2020-04-14T17:00:00',
            'snow_depth'      : 0,
            'clouds'          : 100,
            'ts'              : 1586854800,
            'wind_spd'        : 4.90251,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1015.23,
            'dni'             : 707.05,
            'dewpt'           : 15.8,
            'snow'            : 0,
            'uv'              : 0.885565,
            'wind_dir'        : 108,
            'clouds_hi'       : 100,
            'precip'          : 0,
            'vis'             : 24.1351,
            'dhi'             : 82.6,
            'app_temp'        : 21,
            'datetime'        : '2020-04-14:09',
            'temp'            : 21,
            'ghi'             : 353.38,
            'clouds_mid'      : 21,
            'clouds_low'      : 6,
        },
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 74,
            'pod'             : 'd',
            'timestamp_utc'   : '2020-04-14T10:00:00',
            'pres'            : 1013.97,
            'solar_rad'       : 34.2387,
            'ozone'           : 293.82,
            'weather'         : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_gust_spd'   : 5.90516,
            'timestamp_local' : '2020-04-14T18:00:00',
            'snow_depth'      : 0,
            'clouds'          : 98,
            'ts'              : 1586858400,
            'wind_spd'        : 5.87753,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1015.62,
            'dni'             : 450.44,
            'dewpt'           : 16.2,
            'snow'            : 0,
            'uv'              : 0.718319,
            'wind_dir'        : 113,
            'clouds_hi'       : 97,
            'precip'          : 0,
            'vis'             : 24.1349,
            'dhi'             : 50.27,
            'app_temp'        : 21,
            'datetime'        : '2020-04-14:10',
            'temp'            : 20.9,
            'ghi'             : 114.21,
            'clouds_mid'      : 16,
            'clouds_low'      : 7,
        },
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 76,
            'pod'             : 'n',
            'timestamp_utc'   : '2020-04-14T11:00:00',
            'pres'            : 1014.23,
            'solar_rad'       : 0,
            'ozone'           : 293.193,
            'weather'         : {
                'icon'        : 'c04n',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_gust_spd'   : 6.13371,
            'timestamp_local' : '2020-04-14T19:00:00',
            'snow_depth'      : 0,
            'clouds'          : 83,
            'ts'              : 1586862000,
            'wind_spd'        : 5.91285,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1016.01,
            'dni'             : 0,
            'dewpt'           : 16.5,
            'snow'            : 0,
            'uv'              : 0,
            'wind_dir'        : 113,
            'clouds_hi'       : 83,
            'precip'          : 0,
            'vis'             : 24.1351,
            'dhi'             : 0,
            'app_temp'        : 20.9,
            'datetime'        : '2020-04-14:11',
            'temp'            : 20.8,
            'ghi'             : 0,
            'clouds_mid'      : 12,
            'clouds_low'      : 6,
        },
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 77,
            'pod'             : 'n',
            'timestamp_utc'   : '2020-04-14T12:00:00',
            'pres'            : 1014.68,
            'solar_rad'       : 0,
            'ozone'           : 293.113,
            'weather'         : {
                'icon'        : 'c04n',
                'code'        : 804,
                'description' : 'Overcast clouds'
            },
            'wind_gust_spd'   : 5.7,
            'timestamp_local' : '2020-04-14T20:00:00',
            'snow_depth'      : 0,
            'clouds'          : 76,
            'ts'              : 1586865600,
            'wind_spd'        : 5.29586,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1016.4,
            'dni'             : 0,
            'dewpt'           : 16.5,
            'snow'            : 0,
            'uv'              : 0,
            'wind_dir'        : 105,
            'clouds_hi'       : 76,
            'precip'          : 0,
            'vis'             : 24.1348,
            'dhi'             : 0,
            'app_temp'        : 20.8,
            'datetime'        : '2020-04-14:12',
            'temp'            : 20.7,
            'ghi'             : 0,
            'clouds_mid'      : 10,
            'clouds_low'      : 5,
        },
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 78,
            'pod'             : 'n',
            'timestamp_utc'   : '2020-04-14T13:00:00',
            'pres'            : 1015.15,
            'solar_rad'       : 0,
            'ozone'           : 293.8,
            'weather'         : {
                'icon'        : 'c04n',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_gust_spd'   : 5.75101,
            'timestamp_local' : '2020-04-14T21:00:00',
            'snow_depth'      : 0,
            'clouds'          : 100,
            'ts'              : 1586869200,
            'wind_spd'        : 5.23802,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1016.84,
            'dni'             : 0,
            'dewpt'           : 16.6,
            'snow'            : 0,
            'uv'              : 0,
            'wind_dir'        : 105,
            'clouds_hi'       : 100,
            'precip'          : 0,
            'vis'             : 24.1348,
            'dhi'             : 0,
            'app_temp'        : 20.9,
            'datetime'        : '2020-04-14:13',
            'temp'            : 20.8,
            'ghi'             : 0,
            'clouds_mid'      : 0,
            'clouds_low'      : 0,
        },
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 79,
            'pod'             : 'n',
            'timestamp_utc'   : '2020-04-14T14:00:00',
            'pres'            : 1015.67,
            'solar_rad'       : 0,
            'ozone'           : 293.547,
            'weather'         : {
                'icon'        : 'c04n',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_gust_spd'   : 5.43866,
            'timestamp_local' : '2020-04-14T22:00:00',
            'snow_depth'      : 0,
            'clouds'          : 90,
            'ts'              : 1586872800,
            'wind_spd'        : 4.91288,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1017.28,
            'dni'             : 0,
            'dewpt'           : 16.8,
            'snow'            : 0,
            'uv'              : 0,
            'wind_dir'        : 106,
            'clouds_hi'       : 90,
            'precip'          : 0,
            'vis'             : 24.1348,
            'dhi'             : 0,
            'app_temp'        : 20.9,
            'datetime'        : '2020-04-14:14',
            'temp'            : 20.7,
            'ghi'             : 0,
            'clouds_mid'      : 0,
            'clouds_low'      : 0,
        },
        {
            'wind_cdir'       : 'ESE',
            'rh'              : 80,
            'pod'             : 'n',
            'timestamp_utc'   : '2020-04-14T15:00:00',
            'pres'            : 1015.4,
            'solar_rad'       : 0,
            'ozone'           : 293.976,
            'weather'         : {
                'icon'        : 'c04n',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_gust_spd'   : 6.01693,
            'timestamp_local' : '2020-04-14T23:00:00',
            'snow_depth'      : 0,
            'clouds'          : 90,
            'ts'              : 1586876400,
            'wind_spd'        : 5.40568,
            'pop'             : 0,
            'wind_cdir_full'  : 'east-southeast',
            'slp'             : 1017.15,
            'dni'             : 0,
            'dewpt'           : 17,
            'snow'            : 0,
            'uv'              : 0,
            'wind_dir'        : 112,
            'clouds_hi'       : 90,
            'precip'          : 0,
            'vis'             : 24.1348,
            'dhi'             : 0,
            'app_temp'        : 20.8,
            'datetime'        : '2020-04-14:15',
            'temp'            : 20.6,
            'ghi'             : 0,
            'clouds_mid'      : 0,
            'clouds_low'      : 0,
        },
    ],
    'city_name'    : 'Tung Chung',
    'lon'          : 113.92,
    'timezone'     : 'Asia/Hong_Kong',
    'lat'          : 22.31,
    'country_code' : 'HK',
    'state_code'   : 'NIS',
};

const dailyWeatherResponse = {
    'data'         : [
        {
            'moonrise_ts'         : 1586794337,
            'wind_cdir'           : 'ESE',
            'rh'                  : 72,
            'pres'                : 1015.31,
            'high_temp'           : 21.1,
            'sunset_ts'           : 1586860837,
            'ozone'               : 293.584,
            'moon_phase'          : 0.4789,
            'wind_gust_spd'       : 6.13371,
            'snow_depth'          : 0,
            'clouds'              : 96,
            'ts'                  : 1586793660,
            'sunrise_ts'          : 1586815235,
            'app_min_temp'        : 20.6,
            'wind_spd'            : 5.14111,
            'pop'                 : 0,
            'wind_cdir_full'      : 'east-southeast',
            'slp'                 : 1016.9,
            'moon_phase_lunation' : 0.72,
            'valid_date'          : '2020-04-14',
            'app_max_temp'        : 21,
            'vis'                 : 24.1349,
            'dewpt'               : 15.6,
            'snow'                : 0,
            'uv'                  : 2.12533,
            'weather'             : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_dir'            : 104,
            'max_dhi'             : null,
            'clouds_hi'           : 96,
            'precip'              : 0,
            'low_temp'            : 20.2,
            'max_temp'            : 21.2,
            'moonset_ts'          : 1586837259,
            'datetime'            : '2020-04-14',
            'temp'                : 20.9,
            'min_temp'            : 20.5,
            'clouds_mid'          : 11,
            'clouds_low'          : 33,
        },
        {
            'moonrise_ts'         : 1586883965,
            'wind_cdir'           : 'ESE',
            'rh'                  : 80,
            'pres'                : 1013.41,
            'high_temp'           : 21.9,
            'sunset_ts'           : 1586947260,
            'ozone'               : 294.785,
            'moon_phase'          : 0.377072,
            'wind_gust_spd'       : 6.33751,
            'snow_depth'          : 0,
            'clouds'              : 83,
            'ts'                  : 1586880060,
            'sunrise_ts'          : 1586901583,
            'app_min_temp'        : 20.4,
            'wind_spd'            : 2.95365,
            'pop'                 : 20,
            'wind_cdir_full'      : 'east-southeast',
            'slp'                 : 1015.06,
            'moon_phase_lunation' : 0.75,
            'valid_date'          : '2020-04-15',
            'app_max_temp'        : 22.1,
            'vis'                 : 24.135,
            'dewpt'               : 17.3,
            'snow'                : 0,
            'uv'                  : 4.62512,
            'weather'             : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_dir'            : 115,
            'max_dhi'             : null,
            'clouds_hi'           : 83,
            'precip'              : 0.0625,
            'low_temp'            : 20.2,
            'max_temp'            : 22,
            'moonset_ts'          : 1586926963,
            'datetime'            : '2020-04-15',
            'temp'                : 21,
            'min_temp'            : 20.1,
            'clouds_mid'          : 0,
            'clouds_low'          : 1,
        },
        {
            'moonrise_ts'         : 1586973272,
            'wind_cdir'           : 'SSE',
            'rh'                  : 84,
            'pres'                : 1012.56,
            'high_temp'           : 22.8,
            'sunset_ts'           : 1587033683,
            'ozone'               : 294.601,
            'moon_phase'          : 0.282751,
            'wind_gust_spd'       : 6.3363,
            'snow_depth'          : 0,
            'clouds'              : 98,
            'ts'                  : 1586966460,
            'sunrise_ts'          : 1586987932,
            'app_min_temp'        : 21.8,
            'wind_spd'            : 3.44299,
            'pop'                 : 20,
            'wind_cdir_full'      : 'south-southeast',
            'slp'                 : 1014.28,
            'moon_phase_lunation' : 0.78,
            'valid_date'          : '2020-04-16',
            'app_max_temp'        : 23.2,
            'vis'                 : 24.135,
            'dewpt'               : 19,
            'snow'                : 0,
            'uv'                  : 3.41941,
            'weather'             : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_dir'            : 149,
            'max_dhi'             : null,
            'clouds_hi'           : 98,
            'precip'              : 0.0625,
            'low_temp'            : 21.4,
            'max_temp'            : 22.9,
            'moonset_ts'          : 1587016578,
            'datetime'            : '2020-04-16',
            'temp'                : 22,
            'min_temp'            : 21.3,
            'clouds_mid'          : 0,
            'clouds_low'          : 4,
        },
        {
            'moonrise_ts'         : 1587062277,
            'wind_cdir'           : 'SE',
            'rh'                  : 84,
            'pres'                : 1012.98,
            'high_temp'           : 22.4,
            'sunset_ts'           : 1587120106,
            'ozone'               : 293.602,
            'moon_phase'          : 0.198539,
            'wind_gust_spd'       : 6.01565,
            'snow_depth'          : 0,
            'clouds'              : 82,
            'ts'                  : 1587052860,
            'sunrise_ts'          : 1587074282,
            'app_min_temp'        : 22.3,
            'wind_spd'            : 3.86315,
            'pop'                 : 20,
            'wind_cdir_full'      : 'southeast',
            'slp'                 : 1014.67,
            'moon_phase_lunation' : 0.82,
            'valid_date'          : '2020-04-17',
            'app_max_temp'        : 22.9,
            'vis'                 : 24.135,
            'dewpt'               : 19.3,
            'snow'                : 0,
            'uv'                  : 5.33837,
            'weather'             : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_dir'            : 126,
            'max_dhi'             : null,
            'clouds_hi'           : 76,
            'precip'              : 0.125,
            'low_temp'            : 21.9,
            'max_temp'            : 22.4,
            'moonset_ts'          : 1587106090,
            'datetime'            : '2020-04-17',
            'temp'                : 22.1,
            'min_temp'            : 21.9,
            'clouds_mid'          : 0,
            'clouds_low'          : 25,
        },
        {
            'moonrise_ts'         : 1587151026,
            'wind_cdir'           : 'SSE',
            'rh'                  : 86,
            'pres'                : 1012.05,
            'high_temp'           : 23.1,
            'sunset_ts'           : 1587206529,
            'ozone'               : 293.065,
            'moon_phase'          : 0.126704,
            'wind_gust_spd'       : 5.11142,
            'snow_depth'          : 0,
            'clouds'              : 82,
            'ts'                  : 1587139260,
            'sunrise_ts'          : 1587160632,
            'app_min_temp'        : 22.5,
            'wind_spd'            : 3.00677,
            'pop'                 : 0,
            'wind_cdir_full'      : 'south-southeast',
            'slp'                 : 1013.69,
            'moon_phase_lunation' : 0.85,
            'valid_date'          : '2020-04-18',
            'app_max_temp'        : 23.7,
            'vis'                 : 24.135,
            'dewpt'               : 19.9,
            'snow'                : 0,
            'uv'                  : 5.27641,
            'weather'             : {
                'icon'        : 'c04d',
                'code'        : 804,
                'description' : 'Overcast clouds',
            },
            'wind_dir'            : 152,
            'max_dhi'             : null,
            'clouds_hi'           : 82,
            'precip'              : 0,
            'low_temp'            : 22,
            'max_temp'            : 23.2,
            'moonset_ts'          : 1587195510,
            'datetime'            : '2020-04-18',
            'temp'                : 22.5,
            'min_temp'            : 21.9,
            'clouds_mid'          : 0,
            'clouds_low'          : 0,
        },
    ],
    'city_name'    : 'Tung Chung',
    'lon'          : 113.92,
    'timezone'     : 'Asia/Hong_Kong',
    'lat'          : 22.31,
    'country_code' : 'HK',
    'state_code'   : 'NIS',
};

nock.disableNetConnect();

nock('https://api.weatherbit.io')
    .get('/v2.0/current')
    .query({
        key  : process.env.REACT_APP_WEATHER_BIT_API_KEY,
        lat  : latitude,
        lon  : longitude,
        lang : locale,
    })
    .reply(200, currentWeatherResponse)
    .get('/v2.0/forecast/hourly')
    .query({
        key   : process.env.REACT_APP_WEATHER_BIT_API_KEY,
        lat   : latitude,
        lon   : longitude,
        lang  : locale,
        hours : Configurations.FORECAST_HOURS,
    })
    .reply(200, hourlyWeatherResponse)
    .get('/v2.0/forecast/daily')
    .query({
        key  : process.env.REACT_APP_WEATHER_BIT_API_KEY,
        lat  : latitude,
        lon  : longitude,
        lang : locale,
        days : Configurations.FORECAST_DAYS + 1,
    })
    .reply(200, dailyWeatherResponse);

describe('WeatherbitApiClient', () => {
    it('getWeather', async () => {
        const weather = await WeatherbitApiClient.getWeather(latitude, longitude, locale);

        expect(weather.current.temperature).toEqual(16.1);
        expect(weather.hourly[ 0 ].temperature).toEqual(21.1);
        expect(weather.daily[ 0 ].temperatureHigh).toEqual(22);
    });
});
