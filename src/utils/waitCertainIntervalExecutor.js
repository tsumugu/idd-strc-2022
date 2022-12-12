// 前回の実行から一定時間経過するまでは再度実行しない
export class WaitCertainIntervalExecutor {
  constructor() {
    this.beforeCalledDatetime = new Date("1970-01-01T00:00:00");
  }
  exec(intervalMs, callback) {
    const diffTime = new Date().getTime() - this.beforeCalledDatetime.getTime();
    if (diffTime > intervalMs) {
      this.beforeCalledDatetime = new Date();
      callback();
      return;
    }
  }
}