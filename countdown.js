;(function () {
  const target = new Date('2026-06-26T12:00:00')

  function update() {
    const diff = target - Date.now()
    const el = document.getElementById('launch-countdown')
    if (!el) return

    if (diff <= 0) {
      el.textContent = 'LAUNCHED'
      return
    }

    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)

    el.textContent =
      'T-' +
      d +
      'd ' +
      String(h).padStart(2, '0') +
      'h ' +
      String(m).padStart(2, '0') +
      'm ' +
      String(s).padStart(2, '0') +
      's'
  }

  update()
  setInterval(update, 1000)
})()
