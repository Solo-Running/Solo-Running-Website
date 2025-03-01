

export default function AboutPage() {
    return (
        <div className="flex flex-col justify-center">
            <section className="mx-[24px] lg:mx-auto py-24">
                <h1 className="text-white text-5xl text-center font-black">About</h1>

                <p className="text-light-grey max-w-lg mt-8 mx-auto">
                    As a casual runner myself, it was always frustrating not having a simple tool that could track and record my runs. 
                    A lot of apps in the marketplace felt bloated in terms of features, outdated in UI, and often came at a  steep price tag. 
                    How could I appeal to the average user who wanted just the essentials? 
                    <br/>
                    <br/>
                    Thus the idea for Solo Running was born. 
                    I chose the name because of the individualistic nature of the app and also my work process - just a single developer.   
                    <br/>
                    <br/>
                    While progress moved at a snail’s pace initially, I quickly learned how to get around many of the technical problems I faced, 
                    such as generating route snapshots, saving custom pins, and displaying weekly run statistics. 
                    The biggest challenge, though, was making sure that the user experience was mostly smooth and predictable. 
                    I probably went through dozens of iterations and manual testing before I settled on my final designs. 
                    <br/>
                    <br/>
                    The end result is a product that while an MVP, has the core functionalities that I was always looking for in a personal running app. 
                    More stuff will be coming in the near future and will be announced here on the site as I develop.
                </p>
            </section>
        </div>
    )
}