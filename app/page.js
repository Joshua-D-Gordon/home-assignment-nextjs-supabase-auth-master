import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faPaintBrush, faMagic, faGraduationCap, faUsers, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import herobannerImage from '../public/herobannerImage.png'
import personalized from '../public/personalziedStory.png'
import familyTime from '../public/familyTime.png'
import interActive from '../public/interactiveElements.png'
import ilustrations from '../public/ilustrations.png'
import litracy from '../public/litracy.png'
import adFree from '../public/noAds.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-violet-400 text-white py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Welcome to SmartStorytime
              </h1>
              <p className="text-lg mb-8">
                The ultimate platform to engage, educate, and entertain your child with personalized stories that grow with them.
              </p>
              <Link href={'/login'}>
                <button className="btn primary">
                  Get Started for Free
                </button>
              </Link>
              <p className="mt-4 text-sm">* No credit card required</p>
              <div className="flex items-center mt-6 space-x-3">
                {/* User Icons */}
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold border border-white">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold border border-white">
                    B
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold border border-white">
                    C
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold border border-white">
                    D
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold border border-white">
                    +99
                  </div>
                </div>
                
                <div className='flex flex-col items-start justify-center'>
                  {/* 5-Star Reviews */}
                  <div className="flex items-center ml-4">
                    <span className="text-yellow-300 text-2xl">★</span>
                    <span className="text-yellow-300 text-2xl">★</span>
                    <span className="text-yellow-300 text-2xl">★</span>
                    <span className="text-yellow-300 text-2xl">★</span>
                    <span className="text-yellow-300 text-2xl">★</span>
                  </div>
                  <p className='ml-4 text-sm'>from 2,431+ happy story tellers</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 ml-6 lg:mt-0">
              <Image src={herobannerImage}
               alt='herobannerimage' 
               className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Features & Benefits</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center">
              <div className="mb-4 text-orange-500">
                <Image src={personalized}
                alt='herobannerimage' 
                className="rounded-lg"
                height={150}
                /> 
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Stories</h3>
              <p>
                Tailored content that grows with your child, ensuring each story is both fun and educational.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center">
              <div className="mb-4 text-purple-500">
                <Image src={ilustrations}
                  alt='herobannerimage' 
                  className="rounded-lg"
                  height={150}
                  /> 
              </div>
              <h3 className="text-xl font-semibold mb-4">Engaging Illustrations</h3>
              <p>
                Beautifully crafted illustrations that bring each story to life, making reading time magical.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center">
              <div className="mb-4 text-orange-500">
                <Image src={interActive}
                  alt='herobannerimage' 
                  className="rounded-lg"
                  height={150}
                  />
              </div>
              <h3 className="text-xl font-semibold mb-4">Interactive Elements</h3>
              <p>
                Enhance the storytelling experience with interactive features that keep your child engaged.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center">
              <div className="mb-4 text-purple-500">
                <Image src={litracy}
                    alt='herobannerimage' 
                    className="rounded-lg"
                    height={150}
                    /> 
              </div>
              <h3 className="text-xl font-semibold mb-4">Improves Literacy</h3>
              <p>
                Our platform is designed to boost reading skills through fun and engaging stories, making learning enjoyable.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center">
              <div className="mb-4 text-orange-500">
                <Image src={familyTime}
                  alt='herobannerimage' 
                  className="rounded-lg"
                  height={150}
                  /> 
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Family Time</h3>
              <p>
                Spend meaningful time with your child by sharing stories that you both will love.
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center">
              <div className="mb-4 text-purple-500">
              <Image src={adFree}
                  alt='herobannerimage' 
                  className="rounded-lg"
                  height={150}
                  /> 
              </div>
              <h3 className="text-xl font-semibold mb-4">Ad-Free Experience</h3>
              <p>
                Enjoy a completely ad-free environment, ensuring your child’s experience is safe and uninterrupted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">What is SmartStorytime?</h3>
              <p>
                SmartStorytime is a personalized storytelling platform that grows with your child, offering engaging and educational content tailored to their age and interests.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">How does the personalization work?</h3>
              <p>
                Our platform uses advanced algorithms to adapt stories based on your child’s preferences, reading level, and learning progress, ensuring each story is perfect for them.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Is SmartStorytime safe for my child?</h3>
              <p>
                Absolutely! We prioritize your child's safety with secure content and a completely ad-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-12">What Parents Are Saying</h2>
          <div className="flex flex-col lg:flex-row lg:justify-around space-y-12 lg:space-y-0 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="mb-4">
                “SmartStorytime has made bedtime so much more fun! My kids love the stories, and I love how it’s personalized for them.”
              </p>
              <span className="block text-sm text-gray-500">- Emma R.</span>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="mb-4">
                “The best educational tool we’ve found. My son’s reading skills have improved dramatically since we started using SmartStorytime.”
              </p>
              <span className="block text-sm text-gray-500">- John D.</span>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="mb-4">
                “A lifesaver! The stories are engaging, and I love that there’s something new every day.”
              </p>
              <span className="block text-sm text-gray-500">- Sarah L.</span>
            </div>
          </div>
        </div>
      </section>

      {/* No Credit Card Required Section */}
      <section className="bg-orange-400 text-white py-12">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started for Free</h2>
          <p className="text-lg mb-6">
            Sign up today and start exploring without any commitments. No credit card required.
          </p>
          <Link href={'/login'}>
            <button className="btn primary">
              Sign Up Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
