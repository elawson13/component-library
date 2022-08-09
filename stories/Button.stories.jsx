import { withDesign } from 'storybook-addon-designs'
import Button, { buttonColors, buttonSizes, buttonTypes } from '../src/components/Button/Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: 'Button',
    color: {
      options: [buttonColors.default, buttonColors.primary, buttonColors.secondary],
    },
    buttonText: 'Button',
    onClick: () => null,
    isDisabled: [true, false],
    isLoading: [true, false],
    fullWidth: [true, false],
    eventLabel: '',
    startIcon: '',
    className: '',
    children: '',
    size: {
      options: [buttonSizes.default, buttonSizes.medium, buttonSizes.small],
    },
    buttonType: {
      options: [buttonTypes.filled, buttonTypes.outlined, buttonTypes.text, buttonTypes.link],
    },
  },
  decorators: [withDesign],
}

export const ButtonComponent = (args) => <Button {...args} />

ButtonComponent.args = {
  type: 'Button',
  color: buttonColors.primary,
  buttonText: 'Button',
  isDisabled: false,
  isLoading: false,
  fullWidth: false,
  size: buttonSizes.default,
  buttonType: buttonTypes.filled,
}

ButtonComponent.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/abUScvLLDOkkSx7JqAcYwv/Test-file-for-CL-082022?node-id=5%3A10',
    accessToken: 'figd_gQQlF33ZUQHW1Khoqp2VYPcsjFUxc4ZZxWwhhymt',
  },
}
