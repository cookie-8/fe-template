export const throttle = (fn: Function, time: number) => {
  let start: number = null

  return function (...args) {
    const now = Date.now()
    if (!start || now - start >= time) {
      start = now
      fn.call(this, ...args)
    }
  }
}

export const debounce = function (func: Function, wait: number) {
  let timer: number
  return function (...args) {
    !!timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(this, ...args)
    }, wait)
  }
}
