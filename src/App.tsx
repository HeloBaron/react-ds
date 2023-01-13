import { Heading } from './components/Heading';
import { Logo } from './logo';
import { Text } from './components/Text';

import './styles/global.css'; 
import { TextInput } from './components/TextInput';
import { Envelope } from 'phosphor-react';
import { Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
   <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo/>

        <Heading size="lg" className="mt-4">
          Name
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Login to start using
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">E-mail Address</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="E-mail Address"/>            
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>

            <TextInput.Input type="password" id="empassword" placeholder="******"/>            
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-200">Remember me for 30 days</Text>
        </label>

        <Button type="submit" className="mt-4">Login</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Forgot your password?</a>
        </Text>

        <Text size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Not Registered? Create account now!</a>
        </Text>
      </footer>
   </div>
  )
}
