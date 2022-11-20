import Home from '../../pages/index'
import '../../styles/Home.module.css'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

export const HomePage = Template.bind({})
