export default class {
  constructor(options) {
    this.elements = options.elements
    this.classNameActive = options.classNameActive
  }
  activate() {
    for (let element of this.elements) {
      element.classList.add(this.classNameActive)
    }
  }
}
