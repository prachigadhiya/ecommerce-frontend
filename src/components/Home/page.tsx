'use client';

import Image from 'next/image';
import HomeProduct from './HomeProduct';
import Test from './Test';

function HomePage() {
  return (
    <div>
      <div className="HomeImg">
        <Image
          src="/image/HomeImages/Think.jpg"
          alt="Everthing that you think IMAGE"
          height={400}
          width={5000}
        />
      </div>

      <div className="m-6">
        <div className="">
          <Image
            
          />
          
        </div>
      </div>
      {/* <div className="HomeImg1">
        
      </div> */}
    </div>
  );
}
export default HomePage;
