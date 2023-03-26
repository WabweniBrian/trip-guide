import { brands } from "../../data/dummyData";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center max-w-[400px] mx-auto">
        <h1 className="heading">our brands</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quia eius quaerat, quas deleniti sed. Sapiente illo architecto!
        </p>
      </div>
      <div className="mt-8 flex-center-center gap-x-16 gap-y-5 flex-wrap p-4 bg-main-dark/40 dark:bg-transparent">
        {brands.map(({ id, image }) => (
          <div className="group" key={id}>
            <img
              src={image}
              alt=""
              className="w-10 group-hover:scale-125 transition-a"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
