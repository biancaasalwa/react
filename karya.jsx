import React from 'react'
import Navbar from './Navbar';

class Karya extends React.Component {
    render() {
        return(
          <div>
            <Navbar />
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Menu Cupcake</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Cupcake.id</p>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/564x/42/3f/d0/423fd0292bf0140871a0b7086abc753b.jpg"/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Blueberry Cupcakes</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">with Cream Cheese Frosting</h1>
                      <p class="leading-relaxed">Are you, like me, obsessed with blueberry muffins? Then you have to try these Blueberry Cupcakes!</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/564x/3d/b2/7c/3db27cadb6dc3de68b3ff4fcdf7c6c6b.jpg"/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Matcha Cupcakes</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3"> with White Chocolate Frosting</h1>
                      <p class="leading-relaxed">These matcha cupcakes are tender and fluffy! With a silky white chocolate frosting!</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/564x/7c/a7/c2/7ca7c21dc68f5146dc3263ec99c626b3.jpg"/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"> Irish Cream Cheesecake</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">creamcheese dessert</h1>
                      <p class="leading-relaxed">Bake Irish Cream Cheesecake is the perfect dessert to celebrate St. This boozy dessert is no bake & gelatin-free!.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/564x/c3/82/ab/c382ab62d29953267c13108f63202e32.jpg"/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/564x/a3/2a/ea/a32aea73cc033b76173288edb6425f48.jpg"/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/564x/2c/8b/9b/2c8b9bda16e2c19253ba14f78e76c4e8.jpg"/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-purple-500">cupcakebybianca@gmail.com</a>
          <p class="leading-normal my-5">cupcake by bianca
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
          </section>
          </div>

        )
    }
}

export default Karya;