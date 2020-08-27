import * as React from 'react';
import LinkedinButton from '../Social/linkedin';
import GoogleButton from '../Social/google';
import FacebookButton from '../Social/facebook';
import img from '../.././../assets/registerImg.png'

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {


  return(
    <div className="w-full flex flex-wrap">
      <div className="container bg-left h-screen w-1/2 shadow-2xl">
        <img
          className="object-cover hidden mt-20 md:block scale-1000 flex-shrink py-40"
          src={img}
          alt="path"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-12 md:pt-0 px-8 md:px-24 lg:px-32">
          <div className="text-right pt-0 pb-12">
            <p>
                Dont have an account?{" "}
              <a href="/register" className="underline">
                Register.
              </a>
            </p>
          </div>
          <h1 className=" text-3xl">Sign in to SharpStudy</h1>
          <div>
            <span className="text-gray-600 text-sm">with your social network</span>
          </div>
          <div className="flex items-center justify-around mt-5">
            <LinkedinButton />
            <GoogleButton />
            <FacebookButton />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/2 lg:w-1/2"></span>
            <a href="/" className="text-m text-center text-gray-500">Or</a>
            <span className="border-b w-1/2 lg:w-1/2"></span>
          </div>
          <form className="flex flex-col pt-3 md:pt-4">
            <div className="flex flex-col pt-4">
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="text-right pt-4 pb-12">
            <p>
              <a href="/reset" className="underline form-border">
              Forgot password?{" "}
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <a href="/dashboard"  className="bg-blue mt-0 hover:bg-teal text-white font-bold rounded uppercase py-2 px-12">
              Sign in
            </a>
          </div>
        </form>
        </div>
      </div>
    </div>
  ) ;
};

export default Login;