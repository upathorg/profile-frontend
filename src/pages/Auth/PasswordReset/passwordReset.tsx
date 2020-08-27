import * as React from 'react';
import img from '../.././../assets/loginImg.png'

interface IResetPasswordProps {
}

const ResetPassword: React.FunctionComponent<IResetPasswordProps> = (props) => {
  return(
    <div className="w-full flex flex-wrap">
      <div className="container bg-left h-screen w-1/2 shadow-2xl">
        <img
          className="object-cover hidden md:block scale-1000 flex-shrink py-32"
          src={img}
          alt="path"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-12 md:pt-0 px-8 md:px-24 lg:px-32">
          <div className="text-right pt-0 pb-12">
            <p>
                Already a member?{" "}
              <a href="/register" className="underline">
                Sign in.
              </a>
            </p>
          </div>
          <h1 className=" text-3xl">Reset your password</h1>
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
            <div className="flex items-center justify-between">
              <button className="bg-blue mt-8 hover:bg-teal text-white font-bold uppercase py-2 px-12">
                  Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) ;
};

export default ResetPassword;