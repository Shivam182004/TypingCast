import { Carousel } from "flowbite-react"

const Hero = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:pt-4">
    <Carousel slideInterval={5000}>
      <img src="src\assets\img2.svg" alt="..." />
      <img src="src\assets\img1.jpg" alt="..." />
      {/* <img src="src\assets\img3.jpeg" alt="..." /> */}
      <img src="src\assets\img5.webp" alt="..." />
      <img src="src\assets\img6.webp" alt="..." />
    </Carousel>
  </div>

  )
}

export default Hero