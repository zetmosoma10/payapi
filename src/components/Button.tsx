interface Props {
  children: React.ReactNode;
  type?: "button" | "link";
  classNames?: string;
}

const Button = ({ children, classNames, type = "button" }: Props) => {
  if (type === "link") {
    return (
      <a className={`btn ${classNames}`} href="">
        {children}
      </a>
    );
  } else {
    return <button className={`btn ${classNames}`}>{children}</button>;
  }
};

export default Button;
