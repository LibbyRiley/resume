import * as React from "react";
import { Role } from "../data";

export interface RoleItemProps {
  role: Role;
}

const RoleItem: React.FC<RoleItemProps> = ({ role }) => {
  const { title, company, start, end, responsibilities } = role;
  return (
    <div className="sm:px-1 xl:px-5 py-4">
      <div>
        <h2 className={`mb-3 text-2xl font-semibold`}>{title}</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
          {company} • {start} - {end}
        </p>
      </div>
      <div className=" py-2">
        <ul className="list-disc">
          {responsibilities.map((item, i) => (
            <li key={i} className=" mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoleItem;
