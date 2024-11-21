import Image from "next/image";

interface CardProps {
  profilePic: string;
  name: string;
  username: string;
  text: string;
}

const Card = ({ profilePic, name, username, text }: CardProps) => {
  return (
    <div className="relative w-72 h-40 rounded-xl p-px bg-gradient-to-b from-[#4C3182] to-[#11032C]">
      <div className="rounded-xl py-4 px-6 bg-[#0C0024] h-full">
        <div className="flex items-center gap-2">
          <Image
            src={profilePic}
            width={32}
            height={32}
            alt="profile Picture"
          />
          <div className="flex flex-col">
            <span className="text-white font-medium">{name}</span>
            <span className="text-[#807FBC] text-xs">{username}</span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[#F7F6F9] leading-5 ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
