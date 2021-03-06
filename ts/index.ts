export class Primrose<Resolution> {

  private promise: Promise<Resolution>
  private _resolve
  private _reject

  constructor() {
    this.promise = new Promise((_resolve, _reject) => {
      this._resolve = _resolve
      this._reject = _reject
    })
  }

  resolve(resolution: Resolution) {
    this._resolve(resolution)
  }

  reject(rejection) {
    this._reject(rejection)
  }

}
