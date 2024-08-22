import fulfillAPIRequest from '../props/fulfillAPIRequest'
import createAppData from './utils/createAppData'
import { site } from './config';

export default async function home(req, res) {
  return await fulfillAPIRequest(req, {
    appData: createAppData,
    pageData: () =>
      Promise.resolve({
        title: site.HOME_TITLE,
        slots: {
          heading: site.HOME_HEADING,
          description: site.HOME_DESCRIPTION,
        },
      }),
  })
}
