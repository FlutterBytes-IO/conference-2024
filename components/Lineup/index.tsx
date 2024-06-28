import Image from "next/image";
import StyledImageContainer from "../StyledImageContainer";
interface details {
  image: string;
  name: string;
  role: string;
}

export default function Lineup({ image, name, role }: details) {
  return (
    <div>
      <div className="outer-border h-[300px] w-[200px] mx-auto">
        <StyledImageContainer src={image} />
      </div>
      <div className="person-details w-[200px] text-center mt-2 mb-6 mx-auto">
        <p className="name text-[#424E57] font-bold my-1">{name}</p>
        <p className="role text-[14px] text-[#424E57]">{role}</p>
      </div>
      {/* </div> */}
    </div>
  );
}
