const { webkit, chromium, firefox } = require('playwright')

const url = 'https://playwright.dev/'
const getPathScreenshot = (fileName) =>
  `src/js/playwright/screenshot/${fileName}`

const func = async () => {
  const browserTypes = [webkit, chromium, firefox]

  for (const browserType of browserTypes) {
    const browser = await browserType.launch() // запуск браузера
    const page = await browser.newPage() // открываем страницу

    await page.goto(url) // переходим на сайт
    await page.screenshot({
      path: getPathScreenshot(
        `screenshot-${browserType.name()}-${new Date().toString()}.png`
      ), // сохраняем скриншот
    })
    await browser.close() // закрываем браузер

    console.log(`success: ${browserType.name()}`) // чтобы отследить прогресс
  }
}

func()
