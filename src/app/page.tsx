import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-40 justify-center items-center mx-[24px] lg:mx-auto">

        {/* Hero section */}
        <section className="flex flex-col py-12 lg:py-24  mx-auto justify-center">
          <div className="w-[200px] lg:w-fit mx-auto">
            <Image
              src="/SOLO.svg"
              width={345}
              height={71}
              alt="Solo logo"
            />
          </div>

          <p className="text-light-grey text-base md:text-lg max-w-[300px] lg:text-xl lg:max-w-[480px] mx-auto text-center py-4">
            The minimalist running app for anyone. Start today with a basic free plan. Upgrade and cancel anytime.
          </p>

          <span className="flex gap-4 w-fit mx-auto">
              <a href="#pricing" className="rounded-xl py-3 px-4 my-4 mb-8 w-fit justify-center bg-moss-green mx-auto text-lime-green">See pricing</a>
              <a href="#privacyPolicy"className="rounded-xl py-3 px-4 my-4 mb-8 w-fit justify-center bg-dark-grey mx-auto text-white">Privacy Policy</a>
          </span>
       


          <div className="w-[300px] h-[591px] lg:w-[383px] lg:h-[671px] mx-auto py-8">
            <Image
              className="dark:invert"
              src="/Dashboard_Mockup.png"
              alt="dashboard mockup"
              width={585}
              height={1077}
              priority
            />
          </div>
        </section>

        {/* Responsive preview to show app screen mockups */}
        <CarouselView />

        <StaggeredView />

        {/* Pricing section*/}
        <section id="pricing" className="bg-dark-grey w-full max-w-[800px] p-8 lg:my-12 rounded-2xl">
          <h2 className="text-white text-2xl font-semibold">Pricing</h2>
          <p className="text-light-grey mt-2">
            Solo Running is a free app but comes with in-app purchases for unlimited access. Users without a Pro Plan receive 
            up to 16 runs per month and 8 total custom pins. When you want to upgrade, you can choose from two subscriptions - yearly or monthly. 
            Purchases are automatically tracked by your App Store account.  If you have any issues, you can always send a refund request to Apple or
            change your plan directly within the app. 
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8 max-w-[400px]">
            <p className="text-white font-semibold">Yearly Subscription</p>
            <p className="text-light-grey font-semibold">$6.99/year</p>

            <p className="text-white font-semibold">Monthly Subscription</p>
            <p className="text-light-grey font-semibold">$0.99/month</p>
          </div>

        </section>


        {/*Privacy Policy */}
        <section id="privacyPolicy" className="flex flex-col justify-center lg:my-12 w-full max-w-[800px] mx-auto">
          <h2 className="text-white text-2xl font-semibold">Privacy Policy</h2>
          <p className="text-light-grey max-w-lg mt-2">This privacy policy explains how we collect, use, and share information about you when you download our IOS app. By using this service, you consent to this policy.</p>
          

          <div className="flex flex-col gap-8 mt-8">
            <div>
              <h3 className="text-white text-xl font-semibold" >1. What information do we collect?</h3>
              <p className="text-light-grey max-w-3xl">
                We do not collect or store information that can be use to publicly trace your identity. This app does integrate Apple&apos;s built-in software to track your location while running and device sensors to record physical activity. These require
                user permissions prior to using the app. All data is securely synced to your iCloud storage by default.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-xl font-semibold" >2. Third Party Services</h3>
              <p className="text-light-grey max-w-xl">Solo Running does not rely on third party services or platforms that may collect your personal information.</p>
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold" >3. Sharing of information</h3>
              <p className="text-light-grey max-w-xl">We do not share nor sell your data with third parties.</p>
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold" >4. Contact Us</h3>
              <p className="text-light-grey max-w-xl">For any questions or feedback, please contact wakimdeveloper@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-24">

      </footer>
    </div>
  );
}


function StaggeredView() {
  return (
    <section id="staggeredAppMockups" className="hidden lg:flex lg:flex-col w-full max-w-[800px] gap-12">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center">
        <div className="w-[243px] h-[531px] lg:w-[283px] lg:h-[571px]">
          <Image
            className="dark:invert rounded-3xl border border-2 border-dark-grey"
            src="/Add_Run.png"
            alt="add run mockup"
            width={585}
            height={1077}
          />
        </div>

        <div className="w-[400px] flex flex-col gap-2">
          <h2 className="text-white text-2xl font-semibold">Real Time Location Tracking</h2>
          <p className="text-light-grey">Use the power of Apple MapKit and Location Services to view your route and position.</p>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="w-[243px] h-[531px] lg:w-[283px] lg:h-[571px]">
          <Image
            className="dark:invert rounded-3xl border border-2 border-dark-grey"
            src="/Create_Custom_Pin.png"
            alt="create custom pin mockup"
            width={585}
            height={1077}
          />
        </div>

        <div className="w-[400px] flex flex-col gap-2">
          <h2 className="text-white text-2xl font-semibold">Create Custom Pins</h2>
          <p className="text-light-grey max-w-xs">Feeling adventurous? Use a drag and drop pin to add your own locations on the map.</p>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-[243px] h-[531px] lg:w-[283px] lg:h-[571px]">
          <Image
            className="dark:invert rounded-3xl border border-2 border-dark-grey"
            src="/Run_History.png"
            alt="run history mockup"
            width={585}
            height={1077}
          />
        </div>

        <div className="w-[400px] flex flex-col gap-2">
          <h2 className="text-white text-2xl font-semibold">Track Your Run History</h2>
          <p className="text-light-grey max-w-xs">Every run is saved automatically in an organized list and appears in your dashboard as a preview.</p>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="w-[243px] h-[531px] lg:w-[283px] lg:h-[571px]">
          <Image
            className="dark:invert rounded-3xl border border-2 border-dark-grey"
            src="/Profile.png"
            alt="profile mockup"
            width={585}
            height={1077}
          />
        </div>

        <div className="w-[400px] flex flex-col gap-2">
          <h2 className="text-white text-2xl font-semibold">Manage your profile</h2>
          <p className="text-light-grey max-w-xs">Switch things up by editing pins or updating your map themes. And don&apos;t worry, your profile data is never shared with anyone.</p>
        </div>

      </div>
    </section>
  )
}

function CarouselView() {
  return (
    <section id="carouselAppMockups" className="block lg:hidden">

      <Carousel className="w-full max-w-xs md:max-w-md mx-8">
        <CarouselContent>

          {/* Add Run Preview */}
          <CarouselItem key={1}>
            <div className="flex flex-col justify-center">
              <div className="w-[243px] h-[531px] mx-auto">
                <Image
                  className="dark:invert rounded-3xl border border-2 border-dark-grey"
                  src="/Add_Run.png"
                  alt="add run mockup"
                  width={585}
                  height={1077}
                  priority
                />
              </div>

              <div className="max-w-sm flex flex-col gap-2 text-center mx-auto">
                <h2 className="text-white text-2xl font-semibold">Real Time Location Tracking</h2>
                <p className="text-light-grey max-w-xs">Use the power of Apple MapKit and Location Services to view your route and position.</p>
              </div>
            </div>
          </CarouselItem>


          {/* Custom Pins Preview */}
          <CarouselItem key={2}>
            <div className="flex flex-col justify-center">
              <div className="w-[243px] h-[531px] mx-auto">
                <Image
                  className="dark:invert rounded-3xl border border-2 border-dark-grey"
                  src="/Create_Custom_Pin.png"
                  alt="add run mockup"
                  width={585}
                  height={1077}
                  priority
                />
              </div>

              <div className="max-w-sm flex flex-col gap-2 text-center mx-auto">
                <h2 className="text-white text-2xl font-semibold">Create Custom Pins</h2>
                <p className="text-light-grey max-w-xs">Feeling adventurous? Use a drag and drop pin to add your own locations on the map.</p>
              </div>
            </div>
          </CarouselItem>


          {/* Run History Preview */}
          <CarouselItem key={3}>
            <div className="flex flex-col justify-center">
              <div className="w-[243px] h-[531px] mx-auto">
                <Image
                  className="dark:invert rounded-3xl border border-2 border-dark-grey"
                  src="/Run_History.png"
                  alt="add run mockup"
                  width={585}
                  height={1077}
                />
              </div>
            </div>

            <div className="max-w-sm flex flex-col gap-2 text-center mx-auto">
              <h2 className="text-white text-2xl font-semibold">Track Your Run History</h2>
              <p className="text-light-grey max-w-sm">Every run is saved automatically in an organized list and appears in your dashboard as a preview.</p>
            </div>
          </CarouselItem>


          {/* Profile Preview */}
          <CarouselItem key={3}>
            <div className="flex flex-col justify-center">
              <div className="w-[243px] h-[531px] mx-auto">
                <Image
                  className="dark:invert rounded-3xl border border-2 border-dark-grey"
                  src="/Profile.png"
                  alt="profile mockup"
                  width={585}
                  height={1077}
                />
              </div>
            </div>

            <div className="max-w-sm flex flex-col gap-2 text-center mx-auto">
              <h2 className="text-white text-2xl font-semibold">Manage your profile</h2>
              <p className="text-light-grey max-w-sm">Switch things up by editing pins or updating your map themes. And don&apos;t worry, your profile data is never shared with anyone.</p>
            </div>
          </CarouselItem>
        </CarouselContent>


        <CarouselDots className="mt-6"/>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  )
}