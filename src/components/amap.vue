<template>
  <div class="box">
      <div id="map" :style="{width: '100%', height: height +'px'}" style="margin-top: 10px;border-radius: 5px;"></div>
  </div>
</template>

<script>
import AMap from "AMap"; // 引入高德地图
export default {
  props: {
    center: {
      type: Array,
      default: function () {
        return [120.21937542, 30.25924446];
      },
    },
    height: {
      type: Number,
      default: 460,
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
     this.mMap = new AMap.Map('map', {
        center: this.center,
        resizeEnable: true,
        zoom: 14,
        attributionControl: false,
        zoomEnable:false,
        dragEnable: false,
      })
    }
  }
}
</script>

<style lang="less">
.amap-logo{
    opacity: 0;//去掉高德地图logo
}
.amap-copyright {
    opacity: 0; //去掉高德的版本号
}
</style>
