import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-evenly p-4'>
      <div className='w-full max-w-5xl items-center justify-center font-mono lg:text-3xl lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Página en proceso de construcción
        </p>
      </div>

      <div className="mt-8 lg:mt-1 relative flex justify-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full'
          src='/img/avatar/avatar.jpeg'
          alt='Avatar de Samuel'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='text-[16px] flex flex-col p-2 gap-y-2 w-full max-w-4xl items-start font-mono border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
        <p>
          Actualmente estoy trabajando en la construcción de esta página, para
          poder poner la información más actual sobre mi persona, proyectos y
          colaboraciones.
        </p>

        <p>
          Si deseas contactarme, puedes hacerlo a través de mis redes sociales.
        </p>
        <div className='grid grid-cols-3 w-full justify-items-center'>
          <a
            href='https://www.linkedin.com/in/samuel-romero-arbelo/'
            className='group rounded-lg border border-transparent py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className=' dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full'
              src='/img/social/linkedin_logo.png'
              alt='Link a mi perfil de LinkedIn'
              width={48}
              height={48}
              priority
            />
          </a>
          <a
            href='https://x.com/Oiranca'
            className='group rounded-lg border border-transparent py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className=' dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full'
              src='/img/social/X_logo.png'
              alt='Link a mi perfil de X anterior twitter'
              width={48}
              height={48}
              priority
            />
          </a>
          <a
            href='https://github.com/Oiranca'
            className='group rounded-lg border border-transparent py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className=' dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full'
              src='/img/social/github_logo.png'
              alt='Link a mi perfil de GitHub'
              width={48}
              height={48}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
