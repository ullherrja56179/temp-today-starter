import { makeAutoObservable, runInAction } from "mobx";
import { fetchWeatherData } from "../utils/fetchWeatherData";
import { CityName } from "../data/cities";

class WeatherStore {
    location : CityName = "Berlin"
    humidity: number | null = null
    windSpeed: number | null = null
    // 🌟 Observable for the current `location` (default: "Berlin")
    // 🌟 Observable for `humidity` (default: null)
    // 🌟 Observable for `windSpeed` (default: null)

    constructor() {
        makeAutoObservable(this); // 🌟 Enable MobX reactivity
        this.fetchWeather(); // 🌟 Fetch weather data on store creation
    }

    setLocation = (newLocation: CityName) => {
        this.location = newLocation
        this.fetchWeather();
    };

    fetchWeather = async () => {
        // 🌟 Fetch weather data and use runInAction to update observables
        const data = await fetchWeatherData(this.location)
        runInAction(() => {
            if (data) {
                this.humidity = data.current.relative_humidity_2m;
                this.windSpeed = data.current.wind_speed_10m;
            }
        })
    };
}

const weatherStore = new WeatherStore();
export default weatherStore;
