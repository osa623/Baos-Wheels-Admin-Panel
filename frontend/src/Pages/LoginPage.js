import React from 'react';

//platform logo
import bwlogo from '../assests/baoswheelslogo.png'

const LoginPage = () => {
  return (
    <div className='relative h-screen w-full bg-baseextra4'>
      <div className='flex flex-col h-[20vh] w-full bg-baseextra4 items-center justify-center '>
        <div className='flex h-[10vh] w-[20vw] bg-baseextra3 rounded-xl items-center justify-center cursor-default'>
          <h2 className='text-4xl font-russoone text-baseextra4 text-center'>Admin Login</h2>
        </div>
      </div>

      <div className='flex flex-col h-auto w-full bg-baseextra4 items-center justify-center'>
       <div class="w-full bg-white rounded-lg shadow dark:border md:mt-2 sm:max-w-md xl:p-0 m-4">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-baseextra4 font-kanit">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">

                  <div>
                      <label for="Role" class="block mb-2 text-sm font-medium text-baseextra4">Role</label>
                      <input type="Role" name="role" id="role" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="example:admin" required=""/>
                  </div>
                
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-baseextra4">Email Address</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <div class="flex items-center justify-between">

                  </div>
                  <button type="submit" class="w-full text-white bg-baseextra4 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign In</button>
                  
              </form>
          </div>
       </div>
      </div>
      <div className='flex flex-col h-auto w-full bg-baseextra4 items-center justify-center rounded-b-lg mb-4'>
        <h2 className='text-sm font-kanit text-primary text-center'>Powered By Baos Wheels</h2>
          <img src = {bwlogo} alt = 'baoslogo' style={{
            objectFit:'contain',
            width:'25%'
          }}/>
      </div>
    </div>
  );
};

export default LoginPage;
