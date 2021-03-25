import fulfillAPIRequest from '../props/fulfillAPIRequest'
import createAppData from './utils/createAppData'
import siteConfig from './config/siteConfig.json'

export default async function home(req, res) {
  return await fulfillAPIRequest(req, {
    appData: createAppData,
    pageData: () =>
      Promise.resolve({
        title: siteConfig.HOME_TITLE,
        slots: {
          heading: siteConfig.HOME_HEADING,
          description: siteConfig.HOME_DESCRIPTION,
        },
      }),
  })
}
