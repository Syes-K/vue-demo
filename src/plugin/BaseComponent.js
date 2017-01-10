/**
 * Created by yongsheng.kuang on 17/1/3.
 */
export  default {
  install:function (Vue,options) {
    Vue.mixin({
      created:function () {
        console.log('component created!!!')
      }
    });
  }
}
