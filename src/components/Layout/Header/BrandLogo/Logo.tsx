import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <>
      {/* Logo untuk background terang */}
      <Image
        src={'/images/header/dark-logo.png'}
        alt='logo'
        width={50}  
        height={30} 
        unoptimized={true}
        className='dark:hidden'
      />
      {/* Logo untuk background gelap */}
      <Image
        src={'/images/header/logo.png'}
        alt='logo'
        width={50}
        height={30}
        unoptimized={true}
        className='dark:block hidden'
      />
    </>
  )
}

export default Logo