import { useState, useRef } from "react";
import "./thumbImg.scss";

const ThumbImg = ({
  actualSrc,
  thumbnailSrc, className
}: {
  actualSrc: string | undefined;
  thumbnailSrc: string | undefined;
  className: string
}) => {
  const [isLoaded, setLoaded] = useState(false);

  const actualImg = useRef(null);

  const onLoad = () => {
    setLoaded(true);
  };
  return (
    <div>
      {
        <img
          className="thumb-img"
          style={{ display: !isLoaded ? "visible" : "none" }}
          src={thumbnailSrc}
          alt={""}
        />
      }
      {
        <img
          className={className}
          style={{ opacity: isLoaded ? "visible" : "none" }}
          ref={actualImg}
          onLoad={onLoad}
          src={actualSrc}
          alt={""}
        />
      }
    </div>
  );
};

export default ThumbImg;
