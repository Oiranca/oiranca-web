import { SocialNetworks } from './components/Social-Networks/SocialNetworks';

export const Navbar = () => {
  return (
    <nav className='flex flex-col items-center'>
      <ul className='w-full font-mono text-amber-50 grid grid-cols-2 grid-rows-2 justify-items-center content-around gap-x-4 gap-y-2 p-3 border border-gray-300 rounded-xl sm:text-xl md:text-2xl md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 lg:text-3xl lg:w-fit'>
        <li className='w-fit transition-shadow ease-in-out duration-0 rounded-3xl px-2 py-1 hover:duration-500 hover:shadow-navShadow'>
          <a href='#about'>Sobre mí</a>
        </li>
        <li className='w-fit transition-shadow ease-in-out duration-0 rounded-3xl px-2 py-1 hover:duration-500 hover:shadow-navShadow'>
          <a href='#experience'>Experiencia</a>
        </li>
        <li className='w-fit transition-shadow ease-in-out duration-0 rounded-3xl px-2 py-1 hover:duration-500 hover:shadow-navShadow'>
          <a href='#projects'>Proyectos</a>
        </li>
        <li className='w-fit transition-shadow ease-in-out duration-0 rounded-3xl px-2 py-1 hover:duration-500 hover:shadow-navShadow'>
          <a href='#contact'>Contacto</a>
        </li>
      </ul>
      <SocialNetworks />
    </nav>
  );
};
