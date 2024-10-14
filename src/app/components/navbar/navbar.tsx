import { SocialNetworks } from './components/Social-Networks/SocialNetworks';

export const Navbar = () => {
  return (
    <nav className='flex flex-col items-center'>
      <ul className='w-full font-mono text-stone-200 grid grid-cols-2 grid-rows-2 justify-items-center gap-x-4 gap-y-2 p-3  sm:text-xl md:text-2xl sm:grid-cols-4 sm:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 lg:text-3xl lg:w-fit'>
        <li className='order-1 w-fit transition-shadow ease-in-out duration-0 rounded-3xl sm:px-2 sm:py-1 hover:duration-500 hover:shadow-navShadow sm:order-1'>
          <a href='#about'>Sobre mí</a>
        </li>
        <li className='order-2 w-fit transition-shadow ease-in-out duration-0 rounded-3xl sm:px-2 sm:py-1 hover:duration-500 hover:shadow-navShadow sm:order-2'>
          <a href='#experience'>Experiencia</a>
        </li>
        <li className='order-4 w-fit transition-shadow ease-in-out duration-0 rounded-3xl sm:px-2 sm:py-1 hover:duration-500 hover:shadow-navShadow sm:order-3'>
          <a href='#projects'>Proyectos</a>
        </li>
        <li className='order-3 w-fit transition-shadow ease-in-out duration-0 rounded-3xl sm:px-2 sm:py-1 hover:duration-500 hover:shadow-navShadow sm:order-4'>
          <a href='#contact'>Contacto</a>
        </li>
      </ul>
      <SocialNetworks />
    </nav>
  );
};
