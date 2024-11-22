export interface WeatherApiResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    elevation: number;
    current: CurrentWeather;
    hourly_units: HourlyUnits;
    hourly: HourlyData;
}


export interface CurrentWeather {
    time: string;
    interval: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
}

export interface HourlyUnits {
    time: string;
    temperature_2m: number;
}

export interface HourlyData {
    time: readonly string[];
    temperature_2m: readonly number[];
}
