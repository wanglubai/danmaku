import YaBase from '../libs/YaBase.js';

class VideoEntry extends YaBase {
  constructor(roomId, divId, callFun, typeParam) {
    super();
    this.roomId = roomId;
    this.divId = divId;
    this.initComplete = callFun;
    this.typeParam = typeParam;

    this.videoUI = null;

    this.initView();
  }
  initView() {
    var container = document.createElement("div");
    container.setAttribute("class", "Ya_Video_Web_Container");
    this.divId.appendChild(container);

    console.log(this.name);
  }
  start() {

  }
  destory() {
    super.destory();
  }
}
window['VideoEntry'] = VideoEntry;
export default VideoEntry;