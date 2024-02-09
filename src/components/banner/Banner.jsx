import { useEffect, useState } from "react";
import { bannerData } from "../../data/bannerData";
import "./banner.css";
const Banner = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let intervalId = setInterval(function () {
      if (index !== bannerData.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 4000);
    return () => clearInterval(intervalId);
  }, [index]);
  const handleSldeLeft = () => {};
  const handleSldeRight = () => {};
  return (
    <div className='banner__box'>
      <div className='banner'>
        {bannerData.map((data, i) => {
          return (
            index === i && (
              <div
                key={data.title}
                className='banner__wrapper'
              >
                <img src={data.img} alt={data.title} />
                <div className='desc'>
                  <h3> {data.title} </h3>
                  <p> {data.desc} </p>
                </div>
              </div>
            )
          );
        })}
        <button className='slide left' onClick={handleSldeLeft}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-left'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'
            />
          </svg>
        </button>
        <button className='slide right' onClick={handleSldeRight}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-right'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
