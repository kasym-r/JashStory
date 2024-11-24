import React from 'react'
import logowhite from '../../assets/logowhite.svg'

const Login = () => {
  return (
    <div className='bg-login-bg bg-cover h-[96vh] rounded-[40px] m-5 p-5 grid grid-cols-2'>
      <div className='flex flex-col items-center text-white gap-6 px-40 pt-5'>
        <img className='w-10 h-10' src={logowhite} alt="logowhite" />
        <span className='font-helvetica text-6xl font-extrabold'>Jash Story</span>
        <span className='font-sf text-xl font-light'>После регистрации мы создадим ваш единный аккаунт ММСО-ID для участия в будущих мероприятиях ММСО</span>
      </div>
      <div className='bg-white rounded-[40px]'>

      </div>
    </div>
  )
}

export default Login
