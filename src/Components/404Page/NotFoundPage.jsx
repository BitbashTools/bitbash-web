import image1 from '../../images/BITBASH 1.png';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const altText = "Error Image";
  const errorTitle = "404 Error";
  const errorMessage = "Oops Something Went Wrong. Please Go Back To Home Page";
  const backHomeText = "Back Home";

  return (
<section className="block bg-gradient-to-b from-indigo-600 to-white fadeInAnimation h-screen">
      <div className="px-5 md:px-10">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="mx-auto flex-col flex w-full max-w-3xl items-center">
            <img loading="lazy" src={image1} alt={altText} className=" mb-8 mx-auto drop-shadow-2xl inline-block h-56 w-56 max-w-full flex-none object-cover rounded-full shadow-xl bounceAnimation" />
            <div className="text-center">
              <h1 className="font-bold mb-4 text-4xl md:text-6xl drop-shadow-sm">{errorTitle}</h1>
              <div className="mx-auto max-w-[528px] mb-5 md:mb-6 lg:mb-8">
                <p className="text-[#636262] max-[479px] text-lg shadow-2xl">{errorMessage}</p>
              </div>
              <Link to="/" className="pulseAnimation shadow-lg rounded-xl inline-block cursor-pointer items-center bg-black px-8 py-4 text-center font-semibold text-white hover:bg-gray-800 transition-all duration-300">{backHomeText}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
