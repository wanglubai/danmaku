import YaBaseSprite from '../libs/YaBase.js';
class YaBaseSprite extends YaBase {
  constructor() {
    super();
    this._display = null;
    this._init();
  }
  _init() {
    console.log('ya'+this.name);
  }
  addChild(){
    
  }
  initView() {

  }
  show() {

  }
  hide() {

  }
  getDisplay() {

  }
  addEvent() {

  }
  removeEvent() {

  }
}
export default YaBaseSprite;