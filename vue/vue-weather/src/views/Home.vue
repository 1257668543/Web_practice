<template>
  <div class="home">
    <div class="address">
      <div class="nav">
        <p class="time">{{localTime}}</p>
        <span class="change-city">切换城市</span>
      </div>
      <div class="city-info">
        <p class="city-name">{{mapData.city}}</p>
        <p class="city-weather">{{mapData.weather}}</p>
        <h1 class="city-temp">{{mapData.temperature}}℃</h1>
        <p class="weather-detail">
          <span>风力：{{mapData.windPower}}</span> |
          <span>风向：{{mapData.windDirection}}</span> |
          <span>空气湿度：{{mapData.humidity}}%</span>
        </p>
      </div>
    </div>
    <div class="future">
      <div class="group" v-if="mapFutureMapData.length > 0">
        明日：
        <span class="tm">白天:{{mapFutureMapData[1].dayTemp}} {{mapFutureMapData[1].dayWeather}} {{mapFutureMapData[1].dayWindDir}} {{mapFutureMapData[1].dayWindPower}}</span>
        <span class="tm">夜间:{{mapFutureMapData[1].nightTemp}} {{mapFutureMapData[1].nightWeather}} {{mapFutureMapData[1].nightWindDir}} {{mapFutureMapData[1].nightWindPower}}</span>
      </div>
      <div class="group" v-if="mapFutureMapData.length > 0">
        后天：
        <span class="tm">白天:{{mapFutureMapData[2].dayTemp}} {{mapFutureMapData[2].dayWeather}} {{mapFutureMapData[2].dayWindDir}} {{mapFutureMapData[2].dayWindPower}}</span>
        <span class="tm">夜间:{{mapFutureMapData[2].nightTemp}} {{mapFutureMapData[2].nightWeather}} {{mapFutureMapData[2].nightWindDir}} {{mapFutureMapData[2].nightWindPower}}</span>
      </div>
    </div>
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTime: "",
      mapData: {},
      mapFutureMapData: []
    };
  },
  created() {
    setInterval(() => {
      this.getLocalTime();
    }, 1000);
  },
  mounted() {
    // console.log(this.$refs.mapContainer)
    this.initMap();
  },
  methods: {
    getLocalTime() {
      this.localTime = new Date().toLocaleTimeString();
    },
    initMap() {
      let _self = this;
      let map = new AMap.Map(_self.$refs.mapContainer, {
        resizeEnable: true,
      });
      AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        // console.log(citySearch)
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // 获取位置成功
            _self.getCurrentCityData(result.city);
          }
        });
      });
    },
    getCurrentCityData(cityName) {
      let _self = this;
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          // console.log(err, data);
          _self.mapData = data;
        });
        //执行实时天气信息查询
        weather.getForecast(cityName, function (err, data) {
          // console.log(err, data);
          _self.mapFutureMapData = data.forecasts
        });
      });
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
}
.home {
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
}
.city-info {
  text-align: center;
  margin: 20px 0;
  line-height: 2;
}
.city-temp {
  font-size: 40px;
}
.future {
  width: 100%;
}
.future .group {
  height: 44px;
  line-height: 44px;
  background-color: rgba(255, 255, 255, 0.26);
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 10px;
}
.group .tm {
  margin-right: 20px;
}
</style>