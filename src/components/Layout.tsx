import * as React from 'react';
import astronautWhite from './../../pub/white-1.png'

function Layout ({children, className=''}:{children:any, className?:string}) {
  return (<div  className={`w-full h-full inline-block z-0 bg-light p-32 ${className} dark:bg-dark dark:text-light xl:p-16 xl:pt-0 lg:p-16 md:p-12 sm:p-8 `}>
    {children}
  </div>  );
}

export default Layout;