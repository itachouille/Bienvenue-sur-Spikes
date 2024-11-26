import Image from "next/image";

interface CardProps {
  profilePic: string;
  name: string;
  username: string;
  text: string;
}

const Card = ({ profilePic, name, username, text }: CardProps) => {
  return (
    <div className="relative w-72 h-40 rounded-xl p-px bg-gradient-to-b from-[#4C3182] to-[#11032C] shadow-inner">
      <div className="rounded-xl py-4 px-6 bg-[#0C0024] h-full">
        <div className="flex items-center gap-2">
          <Image
            src={profilePic}
            width={32}
            height={32}
            alt="profile Picture"
          />
          <div className="flex flex-col">
            <span className="text-white font-medium text-sm">{name}</span>
            <span className="text-[#807FBC] text-[10px] font-normal leading-4">
              {username}
            </span>
          </div>
        </div>
        <div className="pt-[10px]">
          <p className="text-[#F7F6F9] text-sm font-normal">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
