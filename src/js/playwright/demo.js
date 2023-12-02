const { webkit, chromium, firefox, devices } = require('playwright')

;(async () => {
  const browser = await chromium.launch({
    headless: false,
  })
  const context = await browser.newContext()
  const page = await context.newPage()
  page.on('frameattached', (frame) =>
    console.log(`frames: ${page.frames().length}`)
  )
  page.on('framedetached', (frame) =>
    console.log(`frames: ${page.frames().length}`)
  )
  await page.goto('https://theverge.com')
})()
