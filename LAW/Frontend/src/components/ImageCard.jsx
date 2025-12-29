import FreeImg from "../assets/Free.png";

export default function ImageCard() {
  return (
    <div className="login-imageCard">
      <img className="login-image" src={FreeImg} alt="Login visual" />
    </div>
  );
}
