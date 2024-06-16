import Image from "next/image";

export interface MemberProps {
  name: string;
  image?: string;
}

interface Props extends MemberProps {
  index: number;
}

export const Member = ({ name, image }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {image ? (
        <Image src={image} alt={name} className="size-32 rounded-full" />
      ) : (
        <div className="size-32 rounded-full bg-gray-300" />
      )}
      <h1>Member</h1>
    </div>
  );
};
