import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './Singin'

export default {
    title: 'Pages/Sing in',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('E-mail Address'), 'helo.athayde@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('******'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login!')).toBeInTheDocument()
        })        
    }
}