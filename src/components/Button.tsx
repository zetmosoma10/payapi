import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to?: string;
  type?: "button" | "link";
  classNames?: string;
}

const Button = ({ children, classNames, to, type = "button" }: Props) => {
  if (type === "link") {
    return (
      <Link className={`btn ${classNames}`} to={to ? to : "/"}>
        {children}
      </Link>
    );
  } else {
    return <button className={`btn ${classNames}`}>{children}</button>;
  }
};

export default Button;
