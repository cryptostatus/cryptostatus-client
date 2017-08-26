import * as path from './path'
import * as Text from 'constants/Text'

const prefix = (name) => `${Text.LOGO} | ${name}`

const metaInfo = (title, template = prefix, link, meta) => ({ title: template(title), link, meta })

export default {
  [path.ROOT]: metaInfo(Text.DESCRIPTION),
  [path.SIGN_IN]: metaInfo('Sign in'),
  [path.BALANCES]: metaInfo('Balances'),
  [path.BALANCES_CREATE]: metaInfo('Create balance'),
  [path.NOT_FOUND_404]: metaInfo('Not Found'),
  [path.ERROR_500]: metaInfo('Error'),
}
