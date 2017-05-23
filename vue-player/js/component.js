// Vue.component('my-content',{
//     template:'#content'
// })
// var vm = new Vue({
//     el:'#app',
//     data:{
//         songsList:[],
//         isPlay:{}
//     },
//     methods:function () {
//
//     },
//     mounted:function () {
//         var _this = this;
//         axios.get('../js/songs.js').then(function (res) {
//             _this.songList = res.data.musicData;
//         });
//     }
// })