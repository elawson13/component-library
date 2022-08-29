import { withDesign } from 'storybook-addon-designs'
import PaginationBar from '../src/components/PaginationBar/PaginationBar'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/PaginationBar',
  component: PaginationBar,
  argTypes: {
    currentPage: '',
    numPages: '',
    onChange: () => {},
    shouldHideIfOnePage: [true, false],
  },
  decorators: [withDesign],
}

export const PaginationBarComponent = (args) => <PaginationBar {...args} />

PaginationBarComponent.args = {
  currentPage: 1,
  numPages: 3,
  onChange: () => {},
  shouldHideIfOnePage: true,
}
