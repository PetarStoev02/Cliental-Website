import { useEffect, useRef } from "react";
import "./TopographicBackground.css"; // Make sure the CSS is correctly imported

const TopographicBackground1 = () => {
  const turbulenceRef = useRef(null);

  const random = Math.PI / 180;

  useEffect(() => {
    let frames = 1;
    const freqAnimation = () => {
      let bfx = 0.05;
      let bfy = 0.05;
      frames += 0.5;
      bfx += 0.001 * Math.cos(frames * random);
      bfy += 0.001 * Math.sin(frames * random);

      const bf = bfx.toString() + " " + bfy.toString();
      turbulenceRef.current.setAttributeNS(null, "baseFrequency", bf);
      window.requestAnimationFrame(freqAnimation);
    };

    window.requestAnimationFrame(freqAnimation);

    return () => {
      // Cancel the animation frame on component unmount
      window.cancelAnimationFrame(freqAnimation);
    };
  }, [random]);

  return (
    <div className="svg-container">
      <svg className="turbulence" xmlns="http://www.w3.org/2000/svg">
        <filter id="fractal" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency="1"
            numOctaves="5"
            seed="10"
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale="2000"
          ></feDisplacementMap>
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
          </feComponentTransfer>
          <feConvolveMatrix kernelMatrix=" 1 0 1 0 -4 0 1 0 1" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 1 1
                    0 1 0 1 0
                    1 0 1 0 1
                    0 0 0 1 0"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#fractal)"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default TopographicBackground1;
//Original
{
  /* <svg xmlns="http://www.w3.org/2000/svg">
<filter id="filter" >
    <feTurbulence baseFrequency="0.01" type="fractalNoise" numOctaves="5" seed="100" />
    <feComponentTransfer>
      <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
    </feComponentTransfer>
    <feConvolveMatrix kernelMatrix=" 1 0 1 0 -4 0 1 0 1" />
    <feColorMatrix values=" 0 0 0 -1 1 0 0 0 -1 1 0 0 0 -1 1 0 0 0 0 1" />
  </filter>
  <rect width="100%" height="100%" filter="url(#filter)" />
</svg> */
}
