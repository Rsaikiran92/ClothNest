import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Error_404 from "../assets/Error_404.lottie"

function Errorpage() {
  return (
    <>
      <DotLottieReact src={Error_404} loop autoplay />
    </>
  );
}

export default Errorpage;
