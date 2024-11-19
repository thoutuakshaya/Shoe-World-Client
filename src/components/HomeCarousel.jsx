import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
    
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="m-5">
        <div>


          <img className="h-[90vh] object-cover rounded-md" src="https://ik.imagekit.io/aksh/src/assets/HOME%20PAGE/img1.jpg?updatedAt=1732029242493" />
          {/* <p className="legend">Mobiles</p> */}

          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-0 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Fashioned shoe
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-black">
                      40%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[90vh] object-cover rounded-md" src="https://ik.imagekit.io/aksh/src/assets/HOME%20PAGE/pic2.gif?updatedAt=1732029315436" />
          {/* <p className="legend">Laptops</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Trendz
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-black">
                      30%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[90vh] object-cover  rounded-md" src="https://ik.imagekit.io/aksh/src/assets/HOME%20PAGE/pic1.gif?updatedAt=1731998898813" />
          {/* <p className="legend">TV</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Sneakers
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-black">
                      50%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="https://ik.imagekit.io/aksh/src/assets/HOME%20PAGE/pic4.gif?updatedAt=1732029404558" />
          {/* <p className="legend">Laptops</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  Stylish-shoe
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-black">
                      60%
                    </span>
                    <span className="text-base font-medium text-gray-500">offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Carousel>
     
    </>
  )
}

export default HomeCarousel

