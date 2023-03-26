/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { setIsLoading } from "../features/dataSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [car, setCar] = useState({});

  const fetchCar = async () => {
    dispatch(setIsLoading(true));
    try {
      const res = await fetch("/data/cars.json");
      const cars = await res.json();
      const car = cars?.find((car) => car.id === parseInt(id));
      setCar(car);
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log("Cannot fetch car: " + error.message);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  const carWrapper = useRef(null);
  const carImage = useRef();

  const { name, model, features, image, mileage, specs } = car;

  const handleZoom = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    carImage.current.style.transformOrigin = `${x}px ${y}px`;
    carImage.current.style.transform = "scale(2.5)";
    carWrapper.current.style.cursor = "zoom-in";
  };

  const handleUnZoom = () => {
    carImage.current.style.transformOrigin = "center center";
    carImage.current.style.transform = "scale(1)";
  };

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="pb-3 border-b dark:border-b-dark">
            <h1 className="font-bold !text-3xl md:!text-4xl ">{name}</h1>
            <p className="text-xl capitalize">{model}</p>
          </div>
          <div className="bg-white mt-4 p-4 rounded-lg border dark:bg-card-dark dark:border-dark">
            <h1 className="heading">car details</h1>
            <div className="flex-center-between">
              <p>Capacity:</p>
              <h1>{features && features[0]}-Seater</h1>
            </div>
            <div className="flex-center-between mt-2">
              <p>Mileage:</p>
              <h1>{mileage}</h1>
            </div>
            <div className="flex-center-between mt-2">
              <p>Type:</p>
              <h1 className="capitalize">{specs && specs[specs.length - 1]}</h1>
            </div>
            <div className="flex-center-between mt-2">
              <p>Air Conditioning:</p>
              <h1 className="capitalize">{specs && specs[0]}</h1>
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden"
          ref={carWrapper}
          onMouseMove={handleZoom}
          onMouseLeave={handleUnZoom}
        >
          <img
            src={image}
            alt={name}
            ref={carImage}
            className="origin-center"
          />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="heading">description</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum amet
          eum ducimus laboriosam maiores veniam accusantium ratione officia
          recusandae atque consequuntur aliquam nemo adipisci praesentium
          accusamus quibusdam veritatis earum mollitia ipsum reiciendis
          perferendis commodi. Vero alias illo odio laborum! Laborum tempore
          facere quisquam non culpa eum, ut illum error!
        </p>
      </div>
    </div>
  );
};

export default CarDetails;
