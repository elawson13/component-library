import { withDesign } from 'storybook-addon-designs'
import { Divider } from '../src/components'
import Avatar, { avatarColors } from '../src/components/Avatar/Avatar'
import { ButtonComponent } from './Button.stories'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    firstName: '',
    lastName: '',
    color: {
      options: [avatarColors.primary, avatarColors.secondary, avatarColors.default],
    },
    className: '',
  },
  decorators: [withDesign],
}

// eslint-disable-next-line react/prop-types
export const AvatarComponent = (args) => {
  return (
    <>
      <p>Avatar with firstName and lastName props:</p>
      <Avatar {...args} firstName="Jane" lastName="Doe" />
      <br />
      <Divider />
      <br />
      <p>Avatar without firstName and lastName props</p>
      <Avatar {...args} />
    </>
  )
}

AvatarComponent.args = {
  firstName: '',
  lastName: '',
  color: avatarColors.primary,
  className: '',
}

AvatarComponent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/abUScvLLDOkkSx7JqAcYwv/Test-file-for-CL-082022?node-id=5%3A10',
  },
}
