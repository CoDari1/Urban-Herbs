'use client';

export default function Navbar() {
    return (
        <div id='Heading' className='flex flex-col items-center justify-center w-full h-full z-10'>
            <div id='Navbar' className='fixed top-0 w-full flex items-center justify-between bg-secondary-900 h-20 md:h-24'>
                <div id='Logo' className='flex items-center justify-start w-fit h-full cursor-pointer' onClick={() => window.location.href = '/'}>
                    <img src='/imgs/navbar/UrbnHerb.png' className='w-32 h-32 mt-[-5px] md:w-36 md:h-36' />
                </div>
                <div id='Menu' className='flex items-center justify-end h-full'>
                    <a className='mx-6 text-2xl font-bold cursor-pointer hover:bg-primary-600 p-2 rounded transition duration-300 ease-in-out' onClick={() => window.location.href = '/About'}>
                        About
                    </a>
                    <a className='mx-6 text-2xl font-bold cursor-pointer hover:bg-primary-600 p-2 rounded transition duration-300 ease-in-out' onClick={() => window.location.href = '/Menu'}>
                        Menu
                    </a>
                    <a className='mx-6 text-2xl font-bold cursor-pointer border-2 border-accent-500 hover:bg-primary-700 p-2 rounded transition duration-300 ease-in-out' onClick={() => window.location.href = '/Contact'}>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}

