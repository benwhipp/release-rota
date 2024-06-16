import { Member, type MemberProps } from "components/Members/Member";

interface MembersProps {
  members: MemberProps[];
}

export const Members = ({ members }: MembersProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <Member key={member.name} index={index} {...member} />
      ))}
    </div>
  );
};
