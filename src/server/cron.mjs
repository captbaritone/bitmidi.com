import schedule from 'node-schedule'

import shareTwitter from '../lib/share-twitter'
import { isProd } from '../config'

export default function init () {
  if (isProd) {
    schedule.scheduleJob('35 1 * * *', shareTwitter)
  }
}
