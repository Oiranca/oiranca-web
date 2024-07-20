export const Navbar = () => {
  return (
    <ul className='w-full font-mono text-amber-50 grid grid-cols-2 grid-rows-2 justify-items-center content-around gap-x-4 gap-y-2 p-2 border border-gray-300 rounded-xl sm:text-xl md:text-2xl md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 lg:text-3xl lg:w-fit'>
      <li className='w-fit ease-in-out duration-300 rounded-3xl px-2 py-1 hover:text-black hover:bg-amber-50'>
        <a href='#about'>Sobre mí</a>
      </li>
      <li className='w-fit ease-in-out duration-300 rounded-3xl px-2 py-1 hover:text-black hover:bg-amber-50'>
        <a href='#experience'>Experiencia</a>
      </li>
      <li className='w-fit ease-in-out duration-300 rounded-3xl px-2 py-1 hover:text-black hover:bg-amber-50'>
        <a href='#projects'>Proyectos</a>
      </li>
      <li className='w-fit ease-in-out duration-300 rounded-3xl px-2 py-1 hover:text-black hover:bg-amber-50'>
        <a href='#contact'>Contacto</a>
      </li>
    </ul>
  );
};
