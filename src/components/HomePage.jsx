import { Carousel, HomePageCard, CarouselCategory, CarouselProduct} from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        HomePage

        {/* carousel */}
        <Carousel />


        {/* cards */}
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title="We have a Surprise for you"
            img={"../images/home_grid_1.jpg"}
            link={"See the terms & Conditions"}
          />

          <HomePageCard
            title="Watch Rings of Power"
            img={"../images/home_grid_2.jpg"}
            link={"Start Streaming Now"}
          />

          <HomePageCard
            title="Unlimited Streaming"
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />

          <HomePageCard
            title="More Titles to explore"
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />

          <HomePageCard
            title="Shop Pet Supplies"
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />

          <HomePageCard
            title="Spring Sale"
            img={"../images/home_grid_6.jpg"}
            link={"See the Deals"}
          />

          <HomePageCard
            title="Echo Buds"
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />

          <HomePageCard
            title="Family Plan: 3 months free"
            img={"../images/home_grid_8.jpg"}
            link={"Learn More"}
          />

          <div className="xl:hidden">
          <HomePageCard 
            title="Explore Deals"
            img={"../images/banner_Image_2.jpg"}
            link={"Learn More"}
          />

          </div>

        </div>

        {/* card end */}

        <CarouselProduct />
        <CarouselCategory />

        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src={"../images/banner_image.jpg"} alt="" />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
