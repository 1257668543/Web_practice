# 高德 JS API + vue 3.0 天气预报项目
 1. 首先在 根页面index.html 通过 script 标签引入高德JS API，注意这里的key值需要自己在高德API-开发者-控制台中获取（申请）
 2. 在页面上添加一个地图容器 <div class="map-container"></div>
 3. 在页面生命周期中调用自己定义的 initmap 函数 初始化高德地图实例 
