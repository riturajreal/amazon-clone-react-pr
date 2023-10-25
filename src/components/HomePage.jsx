import { Carousel, HomePageCard, CarouselCategory, CarouselProduct} from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto gap-2">
        {/* carousel */}
        <Carousel />


        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <HomePageCard
            title="Branded Shoes 50% off"
            img={"../images/f2.png"}
            link={"2 Days left"}
          />

          <HomePageCard
            title="Laptop Deals"
            img={"../images/f1.png"}
            link={"Grab the deal"}
          />

          <HomePageCard
            title="Premium Watches"
            img={"../images/f3.png"}
            link={"Find out more"}
          />

          <HomePageCard
            title="Explore Men's Clothing"
            img={"../images/f4.png"}
            link={"View Offers"}
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


      </div>
    </div>
  );
};

export default HomePage;
