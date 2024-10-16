export const SocialNetworks = () => {
  const linkedin = './img/social/linkedin_logo.png';
  const x = '/img/social/X_logo.png';
  const github = '/img/social/github_logo.png';

  return (
    <section className='grid grid-cols-3 justify-items-center content-around gap-x-6 gap-y-2 p-2 w-fit h-fit '>
      <a
        href='https://www.linkedin.com/in/samuel-romero-arbelo/'
        className='group rounded-lg border border-transparent sm:py-4 transition-colors'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='rounded-full w-8 h-8 md:w-12 md:h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'
          src={linkedin}
          alt='Link a mi perfil de LinkedIn'
        />
      </a>
      <a
        href='https://x.com/Oiranca'
        className='group rounded-lg border border-transparent sm:py-4 transition-colors'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='border border-amber-50 rounded-full w-8 h-8 md:w-12 md:h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'
          src={x}
          alt='Link a mi perfil de X anterior twitter'
        />
      </a>
      <a
        href='https://github.com/Oiranca'
        className='group rounded-lg border border-transparent sm:py-4 transition-colors'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className=' rounded-full w-8 h-8 md:w-12 md:h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'
          src={github}
          alt='Link a mi perfil de GitHub'
        />
      </a>
    </section>
  );
};
