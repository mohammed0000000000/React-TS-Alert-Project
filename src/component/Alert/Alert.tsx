import "./index.scss";
import { ReactNode } from "react";
import { X } from "lucide-react";

import { TAlert } from "../../types";

interface IProps {
  type: TAlert;
  icon: ReactNode;
  title: string;
  description?: string;
  childern?: ReactNode;
}

const Alert = ({ type, icon, title, description, childern }: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert-header">
          <div className="title">
            {icon}
            <h3 className="alert-header">{title}</h3>
          </div>
          <span>
            <X size={20} />
          </span>
        </div>
        {childern ? childern : <p>{description}</p>}
      </div>
    </>
  );
};

export default Alert;
