// import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'




const Home = () => {
  return (
    <div>
       <h1>Home</h1>
       <Canvas className='w-full h-screen bg-transparent'
        camera={{
          near:0.1,
          far:1000,
        }}
       >
        <Suspense fallback={<Loader/>}>
          <directionalLight/>
          <pointLight/>
          <spotLight/>
          <hemisphereLight/>
        </Suspense>

       </Canvas>
    </div>
  )
}

export default Home
