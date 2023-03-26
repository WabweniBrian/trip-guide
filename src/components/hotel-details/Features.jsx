import { BiCircle } from "react-icons/bi";

const Features = () => {
  return (
    <div>
      <div className="flex-align-center gap-x-2 mt-3">
        <BiCircle className="text-xs text-primary flex-shrink-0" />
        <p className="text-sm">Tight 24/7 Security around the perimeter</p>
      </div>
      <div className="flex-align-center gap-x-2 mt-3">
        <BiCircle className="text-xs text-primary flex-shrink-0" />
        <p className="text-sm">
          All kinds of exclusive meals prepared from the best recipes
        </p>
      </div>
      <div className="flex-align-center gap-x-2 mt-3">
        <BiCircle className="text-xs text-primary flex-shrink-0" />
        <p className="text-sm">Incredible room service</p>
      </div>
      <div className="flex-align-center gap-x-2 mt-3">
        <BiCircle className="text-xs text-primary flex-shrink-0" />
        <p className="text-sm">Air conditioning and proper lighting</p>
      </div>
    </div>
  );
};

export default Features;
