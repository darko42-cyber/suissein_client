import "./button.css"

const Button = ({ color, bgColor, text }) => {
  return (
    <button className="login-btn" style={{ color: color, background: bgColor }}>
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
