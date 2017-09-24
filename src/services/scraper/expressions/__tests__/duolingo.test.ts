import * as scraper from '../../../../lib/scraper'
import { profileExpression, profileAddr } from '../../pages/duolingo'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

test('Scrape duolingo', async () => {
  const url = profileAddr('siarheimel')
  const data = await scraper.scrape({ url, expression: profileExpression })
  const value = data.result.value
  expect(JSON.parse(value)).toHaveLength(1)
})