/* eslint-disable max-len */
import React from 'react';
import './PreLoader.css';

const PreLoader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 2270 917"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Loader</title>
          <defs>
            <linearGradient id="animated-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0">
                <animate
                  attributeName="offset"
                  values="-2;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="white" stopOpacity="1">
                <animate
                  attributeName="offset"
                  values="0;2"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="white" stopOpacity="0">
                <animate
                  attributeName="offset"
                  values="1;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <path
            d="M420.583 601C399.249 601 379.383 597.534 360.983 590.6C342.849 583.4 326.983 573.4 313.383 560.6C300.049 547.534 289.649 532.2 282.183 514.6C274.716 497 270.983 477.8 270.983 457C270.983 436.2 274.716 417 282.183 399.4C289.649 381.8 300.183 366.6 313.783 353.8C327.383 340.734 343.249 330.734 361.383 323.8C379.516 316.6 399.383 313 420.983 313C443.916 313 464.849 317 483.783 325C502.716 332.734 518.716 344.334 531.783 359.8L498.183 391.4C488.049 380.467 476.716 372.334 464.183 367C451.649 361.4 438.049 358.6 423.383 358.6C408.716 358.6 395.249 361 382.983 365.8C370.983 370.6 360.449 377.4 351.383 386.2C342.583 395 335.649 405.4 330.583 417.4C325.783 429.4 323.383 442.6 323.383 457C323.383 471.4 325.783 484.6 330.583 496.6C335.649 508.6 342.583 519 351.383 527.8C360.449 536.6 370.983 543.4 382.983 548.2C395.249 553 408.716 555.4 423.383 555.4C438.049 555.4 451.649 552.734 464.183 547.4C476.716 541.8 488.049 533.4 498.183 522.2L531.783 554.2C518.716 569.4 502.716 581 483.783 589C464.849 597 443.783 601 420.583 601ZM581.608 597V317H633.608V553H780.008V597H581.608ZM821.061 597V317H873.061V597H821.061ZM996.795 433.4H1136V476.2H996.795V433.4ZM1000.8 553.4H1158.8V597H948.795V317H1153.2V360.6H1000.8V553.4ZM1216.76 597V317H1259.56L1435.16 532.6H1413.96V317H1465.56V597H1422.76L1247.16 381.4H1268.36V597H1216.76ZM1597.39 597V361H1504.59V317H1742.19V361H1649.39V597H1597.39ZM1727.55 597L1853.55 317H1904.75L2031.15 597H1976.75L1868.35 344.6H1889.15L1781.15 597H1727.55ZM1785.55 532.2L1799.55 491.4H1950.75L1964.75 532.2H1785.55ZM2066.76 597V317H2118.76V553H2265.16V597H2066.76Z"
            fill="url(#animated-gradient)"
          >
            <animate
              attributeName="opacity"
              values="0;0.25;0.5;0.75;1;0.75;0.5;0.25;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M435.237 908.185C371.237 908.185 311.637 897.785 256.437 876.985C202.037 855.385 154.437 825.385 113.637 786.985C73.6373 747.785 42.4373 701.785 20.0373 648.985C13.8321 634.359 8.48628 619.363 4 604H169.207C183.989 636.219 203.466 664.414 227.637 688.585C254.837 714.985 286.437 735.385 322.437 749.785C359.237 764.185 399.637 771.385 443.637 771.385C487.637 771.385 528.437 763.385 566.037 747.385C603.637 730.585 637.637 705.385 668.037 671.785L768.837 767.785C729.637 813.385 681.637 848.185 624.837 872.185C568.037 896.185 504.837 908.185 435.237 908.185Z"
            fill="#316B9D"
          >
            <animate
              attributeName="fill"
              values="#316B9D;#FFFFFF;#316B9D"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M435.237 6.10352e-05C371.237 6.10352e-05 311.637 10.4001 256.437 31.2001C202.037 52.8 154.437 82.8001 113.637 121.2C73.6373 160.4 42.4373 206.4 20.0373 259.2C13.8321 273.827 8.48628 288.822 4 304.185H169.207C183.989 271.966 203.466 243.771 227.637 219.6C254.837 193.2 286.437 172.8 322.437 158.4C359.237 144 399.637 136.8 443.637 136.8C487.637 136.8 528.437 144.8 566.037 160.8C603.637 177.6 637.637 202.8 668.037 236.4L768.837 140.4C729.637 94.8001 681.637 60.0001 624.837 36.0001C568.037 12.0001 504.837 6.10352e-05 435.237 6.10352e-05Z"
            fill="#316B9D"
          ><animate
              attributeName="fill"
              values="#316B9D;#FFFFFF;#316B9D"
              dur="2s"
              repeatCount="indefinite"
            /></path>
        </svg>
      </div>
    </div>
  );
};

export default PreLoader;
