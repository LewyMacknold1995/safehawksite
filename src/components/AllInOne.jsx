import React from 'react';
import { CheckIcon, FolderIcon, CloudIcon, DeviceMobileIcon, UserAddIcon, CreditCardIcon, IdentificationIcon, CogIcon } from '@heroicons/react/outline';


const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One AI Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4  text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <CreditCardIcon className='w-7 mr-4 text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>File Managment</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <CogIcon className='w-7 mr-4 text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Software</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <FolderIcon className='w-7 mr-4 text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Data</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <CloudIcon className='w-7 mr-4 text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Cloud</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <DeviceMobileIcon className='w-7 mr-4 text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Mobile</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <IdentificationIcon className='w-7 mr-4 text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Management</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <UserAddIcon className='w-7 mr-4  text-indigo-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Leadership</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;