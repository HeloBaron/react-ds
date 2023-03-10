import { Checkbox } from "../components/Checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../logo";
import { FormEvent, useState } from "react";
import axios from 'axios'

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent){
        event.preventDefault()

        await axios.post('/sessions', {
            email: 'hello@gmail.com',
            password: '12345678'
        })

        setIsUserSignedIn(true)
    }
    return(
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

      <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        { isUserSignedIn && <Text>Login!</Text> }

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