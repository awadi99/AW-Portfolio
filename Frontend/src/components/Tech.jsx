import { BallCanvas } from "./canvas/index.js";
import SectionWapper from "../hoc/SectionWapper.jsx";
import { technologies } from "../constants/index.js";

function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 !mt-20" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
}

export default SectionWapper(Tech, "");
