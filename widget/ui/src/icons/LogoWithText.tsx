import type { SvgIconPropsWithChildren } from '../components/SvgIcon';

import React, { createElement } from 'react';

import { SvgIcon } from '../components/SvgIcon';

function SvgLogoWithText(props: SvgIconPropsWithChildren) {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 124 45" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4784_46479)">
        <path
          d="M61.5225 16.129H59.7776V21.4426H56.1006V5.27441H62.5335C65.5899 5.27441 68.0452 7.74673 68.0452 10.8155C68.0452 12.8012 66.8507 14.6025 65.0824 15.5051L68.5058 21.4426H64.5555L61.5225 16.129ZM59.7776 12.8954H62.5335C63.5445 12.8954 64.372 11.9967 64.372 10.8155C64.372 9.63432 63.5445 8.73565 62.5335 8.73565H59.7776V12.8915V12.8954Z"
          fill="#010101"
        />
        <path
          d="M81.3251 9.8931V21.4423H77.8784V20.3553C77.1211 21.2343 75.993 21.7641 74.4551 21.7641C71.4455 21.7641 68.9629 19.1074 68.9629 15.6658C68.9629 12.2241 71.4455 9.56738 74.4551 9.56738C75.993 9.56738 77.1211 10.0972 77.8784 10.9762V9.88918H81.3251V9.8931ZM77.8784 15.6658C77.8784 13.9351 76.7308 12.8481 75.146 12.8481C73.5612 12.8481 72.4135 13.9351 72.4135 15.6658C72.4135 17.3964 73.5612 18.4834 75.146 18.4834C76.7308 18.4834 77.8784 17.3964 77.8784 15.6658Z"
          fill="#010101"
        />
        <path
          d="M94.8778 14.3472V21.4384H91.4311V14.8573C91.4311 13.425 90.5372 12.7539 89.4325 12.7539C88.1678 12.7539 87.2973 13.4917 87.2973 15.132V21.4384H83.8506V9.89308H87.2973V10.9801C87.918 10.1246 89.0656 9.57129 90.584 9.57129C92.9027 9.57129 94.8818 11.2352 94.8818 14.3511L94.8778 14.3472Z"
          fill="#010101"
        />
        <path
          d="M109.027 9.89355V20.8659C109.027 24.747 106.018 26.3874 102.961 26.3874C100.572 26.3874 98.5738 25.4848 97.516 23.5933L100.455 21.8862C100.892 22.6946 101.56 23.3421 103.075 23.3421C104.683 23.3421 105.67 22.5102 105.67 20.8698V19.8063C104.913 20.7521 103.808 21.3094 102.317 21.3094C99.054 21.3094 96.665 18.6291 96.665 15.4425C96.665 12.256 99.054 9.57568 102.317 9.57568C103.812 9.57568 104.913 10.129 105.67 11.0787V9.9014H109.023L109.027 9.89355ZM105.674 15.4347C105.674 13.8414 104.527 12.7544 102.895 12.7544C101.263 12.7544 100.116 13.8414 100.116 15.4347C100.116 17.0279 101.263 18.115 102.895 18.115C104.527 18.115 105.674 17.0279 105.674 15.4347Z"
          fill="#010101"
        />
        <path
          d="M110.979 15.6658C110.979 12.2241 113.688 9.56738 117.069 9.56738C120.449 9.56738 123.158 12.2241 123.158 15.6658C123.158 19.1074 120.445 21.7641 117.069 21.7641C113.692 21.7641 110.979 19.1074 110.979 15.6658ZM119.708 15.6658C119.708 14.0254 118.56 12.9423 117.065 12.9423C115.57 12.9423 114.422 14.0293 114.422 15.6658C114.422 17.3022 115.57 18.3892 117.065 18.3892C118.56 18.3892 119.708 17.3022 119.708 15.6658Z"
          fill="#010101"
        />
        <path
          d="M56.7563 36.4374H61.7527V37.1556H56.0029V27.1133H61.6825V27.8314H56.7602V31.7322H61.3272V32.4503H56.7602V36.4374H56.7563Z"
          fill="#010101"
        />
        <path
          d="M69.6027 37.1556H68.7322L66.3199 34.0279L63.9076 37.1556H63.0371L65.8905 33.4667L63.2089 29.9819H64.0793L66.3199 32.8938L68.5761 29.9819H69.431L66.761 33.4549L69.6027 37.1556Z"
          fill="#010101"
        />
        <path
          d="M74.2122 37.3128C73.1387 37.3128 72.2448 36.9557 71.5305 36.2375C70.8162 35.5194 70.4609 34.6325 70.4609 33.569C70.4609 32.5055 70.8162 31.6186 71.5305 30.9005C72.2448 30.1823 73.1387 29.8252 74.2122 29.8252C74.907 29.8252 75.5354 29.99 76.0975 30.3197C76.6596 30.6493 77.0695 31.0967 77.3232 31.6618L76.7377 32.0071C76.5269 31.548 76.199 31.183 75.7462 30.9162C75.2934 30.6493 74.7821 30.5159 74.2122 30.5159C73.3573 30.5159 72.6391 30.8102 72.0575 31.3988C71.4758 31.9875 71.187 32.7135 71.187 33.5729C71.187 34.4323 71.4758 35.1583 72.0575 35.747C72.6391 36.3356 73.3573 36.6299 74.2122 36.6299C74.7821 36.6299 75.2934 36.4965 75.7462 36.2297C76.199 35.9628 76.5425 35.5978 76.7806 35.1387L77.3818 35.4958C77.0968 36.0491 76.6713 36.4926 76.1053 36.8222C75.5393 37.1519 74.907 37.3167 74.2161 37.3167L74.2122 37.3128Z"
          fill="#010101"
        />
        <path
          d="M82.5582 29.825C83.4053 29.825 84.0766 30.084 84.5763 30.6059C85.0759 31.1279 85.3258 31.8225 85.3258 32.6937V37.1556H84.5997V32.6937C84.5997 32.0226 84.4163 31.4928 84.0493 31.1004C83.6824 30.708 83.1671 30.5117 82.4997 30.5117C81.7658 30.5117 81.1686 30.7551 80.7002 31.2417C80.2357 31.7283 80.0014 32.4386 80.0014 33.3647V37.1517H79.2871V27.1094H80.0014V31.3398C80.5167 30.3273 81.3677 29.8171 82.5543 29.8171L82.5582 29.825Z"
          fill="#010101"
        />
        <path
          d="M93.96 29.9821H94.6899V37.1558H93.96V35.535C93.6555 36.0884 93.2379 36.524 92.7031 36.8418C92.1683 37.1558 91.5672 37.3167 90.8919 37.3167C89.8731 37.3167 89.0026 36.9556 88.2805 36.2336C87.5583 35.5115 87.1953 34.6246 87.1953 33.5729C87.1953 32.5212 87.5583 31.6343 88.2805 30.9122C89.0026 30.1901 89.8731 29.8291 90.8919 29.8291C91.5672 29.8291 92.1722 29.9861 92.7031 30.3039C93.234 30.6179 93.6555 31.0535 93.96 31.6107V29.99V29.9821ZM88.7996 35.7352C89.3852 36.3277 90.0995 36.626 90.9465 36.626C91.7936 36.626 92.5079 36.3277 93.0856 35.7352C93.6672 35.1426 93.9561 34.4205 93.9561 33.569C93.9561 32.7174 93.6672 31.9953 93.0856 31.4027C92.504 30.8102 91.7897 30.5119 90.9465 30.5119C90.1034 30.5119 89.3852 30.8102 88.7996 31.4027C88.2141 31.9953 87.9214 32.7174 87.9214 33.569C87.9214 34.4205 88.2141 35.1426 88.7996 35.7352Z"
          fill="#010101"
        />
        <path
          d="M100.499 29.8252C101.346 29.8252 102.017 30.0842 102.517 30.6062C103.016 31.1281 103.266 31.8227 103.266 32.6939V37.1558H102.54V32.6939C102.54 32.0228 102.357 31.4931 101.99 31.1006C101.623 30.7082 101.108 30.512 100.44 30.512C99.7062 30.512 99.109 30.7553 98.6406 31.2419C98.1761 31.7285 97.9419 32.4388 97.9419 33.365V37.1519H97.2275V29.9783H97.9419V31.34C98.4571 30.3275 99.3081 29.8174 100.495 29.8174L100.499 29.8252Z"
          fill="#010101"
        />
        <path
          d="M111.955 29.9822H112.669V36.8105C112.669 37.8543 112.33 38.6745 111.655 39.2788C110.979 39.8832 110.132 40.1814 109.113 40.1814C108.294 40.1814 107.595 40.0284 107.017 39.7223C106.436 39.4162 106.014 38.9963 105.749 38.4587L106.377 38.1016C106.834 39.0277 107.747 39.4947 109.117 39.4947C110.003 39.4947 110.698 39.2514 111.202 38.7687C111.705 38.286 111.959 37.6346 111.959 36.8105V35.4919C111.662 36.057 111.249 36.5004 110.71 36.8262C110.171 37.1519 109.566 37.3128 108.891 37.3128C107.864 37.3128 106.99 36.9517 106.272 36.2297C105.553 35.5076 105.194 34.6207 105.194 33.569C105.194 32.5173 105.553 31.6304 106.272 30.9083C106.99 30.1862 107.864 29.8252 108.891 29.8252C109.566 29.8252 110.171 29.9861 110.71 30.3118C111.249 30.6375 111.662 31.081 111.959 31.6461V29.9822H111.955ZM106.783 35.7352C107.369 36.3278 108.083 36.626 108.93 36.626C109.777 36.626 110.491 36.3278 111.077 35.7352C111.662 35.1426 111.955 34.4206 111.955 33.569C111.955 32.7174 111.662 31.9953 111.077 31.4028C110.491 30.8102 109.777 30.5119 108.93 30.5119C108.083 30.5119 107.369 30.8102 106.783 31.4028C106.198 31.9953 105.905 32.7174 105.905 33.569C105.905 34.4206 106.198 35.1426 106.783 35.7352Z"
          fill="#010101"
        />
        <path
          d="M118.419 29.8252C119.465 29.8252 120.316 30.198 120.968 30.9436C121.62 31.6892 121.944 32.5761 121.944 33.5965C121.944 33.6357 121.944 33.6906 121.936 33.7691C121.932 33.8476 121.928 33.9025 121.928 33.9418H115.464C115.55 34.7463 115.87 35.3938 116.428 35.8843C116.987 36.3788 117.674 36.6221 118.489 36.6221C119.059 36.6221 119.559 36.5044 119.988 36.265C120.418 36.0256 120.738 35.7117 120.96 35.3192L121.589 35.692C121.296 36.1904 120.874 36.5828 120.332 36.8772C119.789 37.1715 119.173 37.3167 118.478 37.3167C117.385 37.3167 116.483 36.9635 115.78 36.2611C115.078 35.5586 114.723 34.6599 114.723 33.5729C114.723 32.4859 115.066 31.6108 115.757 30.8965C116.448 30.1862 117.334 29.8291 118.419 29.8291V29.8252ZM118.419 30.5119C117.611 30.5119 116.936 30.767 116.393 31.2733C115.851 31.7795 115.542 32.4349 115.464 33.2393H121.202C121.124 32.3878 120.824 31.7206 120.297 31.2379C119.77 30.7553 119.141 30.5119 118.419 30.5119Z"
          fill="#010101"
        />
        <path
          d="M22.3785 44.9961C34.7378 44.9961 44.757 34.9234 44.757 22.498C44.757 10.0727 34.7378 0 22.3785 0C10.0192 0 0 10.0727 0 22.498C0 34.9234 10.0192 44.9961 22.3785 44.9961Z"
          fill="white"
        />
        <path
          d="M19.3255 15.3717C19.3255 15.3717 20.2663 15.8936 21.6871 16.6863L40.2442 8.94759C39.5728 8.05677 38.8389 7.21697 38.0465 6.43604C37.9177 6.5106 37.8084 6.55376 37.8084 6.55376L18.4512 14.7359C18.6698 14.9596 18.9547 15.1755 19.3255 15.3678V15.3717Z"
          fill="url(#paint0_linear_4784_46479)"
        />
        <path
          d="M42.2159 12.0829L38.7964 13.4133C36.0601 14.4218 25.2905 18.6875 25.2905 18.6875C27.0509 19.6647 28.9519 20.7164 30.6265 21.6347C34.9086 23.9853 32.1996 29.1458 31.6336 30.1269C31.6258 30.1387 31.618 30.1544 31.6102 30.1661C31.5633 30.2446 31.536 30.2917 31.536 30.2917C31.536 30.2917 31.9381 26.4341 29.233 25.0096C26.5084 23.5851 20.2589 20.2416 17.6319 18.8327C16.3945 18.1695 15.4967 16.9648 15.3289 15.5677C15.204 14.5199 15.4655 13.3152 16.7146 12.2635C17.4445 11.5845 18.2252 11.2196 18.2252 11.2196L32.1879 5.45871C32.1879 5.45871 32.2777 5.42339 32.4065 5.35668L35.3106 4.14407C31.657 1.5344 27.1993 0 22.3785 0C10.0202 0 0 10.0737 0 22.498C0 26.4969 1.04222 30.2525 2.86514 33.5057L8.26752 31.1394L19.0215 26.6029C17.1674 25.5825 15.4538 24.6289 14.6419 24.1933C14.2359 23.9736 13.7284 23.6322 13.3225 23.4163C11.1444 22.2587 9.7157 18.9897 13.0219 15.1125C13.0219 15.1125 12.6784 18.7935 14.7238 20.0414C16.6756 21.2344 24.2444 25.1312 26.4888 26.3399C27.0666 26.65 27.5974 27.0463 28.019 27.5486C28.8934 28.5886 29.2252 29.8757 28.8582 31.2335C28.8426 31.3003 28.8192 31.367 28.7997 31.4298C28.788 31.4729 28.7724 31.5161 28.7567 31.5553C28.7333 31.622 28.7099 31.6848 28.6865 31.7476C28.6787 31.7672 28.6709 31.7869 28.6631 31.8065C27.8941 33.6784 25.8409 34.2396 25.8409 34.2396L25.591 34.322L12.5223 39.714L9.64153 40.9854C13.2561 43.5048 17.6436 44.9882 22.3785 44.9882C34.7368 44.9882 44.757 34.9145 44.757 22.4902C44.757 18.7307 43.8358 15.1871 42.212 12.0712L42.2159 12.0829Z"
          fill="url(#paint1_linear_4784_46479)"
        />
        <path
          d="M22.6365 28.5845L8.29916 34.7064L4.66895 36.2487C5.33644 37.1159 6.06248 37.9322 6.84707 38.6896L7.34671 38.4384L26.1262 30.5663L22.6326 28.5806L22.6365 28.5845Z"
          fill="url(#paint2_linear_4784_46479)"
        />
        <path
          opacity={0.1}
          d="M19.0181 26.603L22.6366 28.5848L20.8254 29.3579L17.0391 27.4389L19.0181 26.603Z"
          fill="#4D4D4D"
        />
        <path
          opacity={0.1}
          d="M25.8408 34.2513C25.8408 34.2513 28.8464 32.1126 26.1257 30.5703L24.4199 31.2845C24.4199 31.2845 27.2694 32.0537 25.8408 34.2513Z"
          fill="#4D4D4D"
        />
        <path
          opacity={0.1}
          d="M19.0181 26.603L22.6366 28.5848L20.8254 29.3579L17.0391 27.4389L19.0181 26.603Z"
          fill="#4D4D4D"
        />
        <path
          opacity={0.1}
          d="M25.8408 34.2513C25.8408 34.2513 28.8464 32.1126 26.1257 30.5703L24.4199 31.2845C24.4199 31.2845 27.2694 32.0537 25.8408 34.2513Z"
          fill="#4D4D4D"
        />
        <path
          opacity={0.3}
          d="M20.3095 13.9196L18.3968 14.7281C18.3968 14.7281 15.6293 12.295 19.0097 10.9019C19.0097 10.9019 17.9128 12.7737 20.3056 13.9196H20.3095Z"
          fill="#4D4D4D"
        />
        <path
          opacity={0.3}
          d="M25.2904 18.7109L21.6602 16.6938L23.405 15.9639L26.9728 18.0281L25.2904 18.7109Z"
          fill="#4D4D4D"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4784_46479"
          x1={18.4512}
          y1={11.5651}
          x2={40.2442}
          y2={11.5651}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" />
          <stop offset={0.09} stopColor="#3A81F3" />
          <stop offset={0.21} stopColor="#2F68F2" />
          <stop offset={0.34} stopColor="#2654F2" />
          <stop offset={0.49} stopColor="#2046F1" />
          <stop offset={0.67} stopColor="#1D3EF1" />
          <stop offset={1} stopColor="#1C3CF1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4784_46479"
          x1={0}
          y1={22.498}
          x2={44.7609}
          y2={22.498}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.08} stopColor="currentColor" />
          <stop offset={0.7} stopColor="#2756F2" />
          <stop offset={1} stopColor="#1C3CF1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4784_46479"
          x1={4.67285}
          y1={33.639}
          x2={26.1301}
          y2={33.639}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.08} stopColor="currentColor" />
          <stop offset={0.24} stopColor="#4191F4" />
          <stop offset={0.51} stopColor="#3678F3" />
          <stop offset={0.85} stopColor="#2550F1" />
          <stop offset={1} stopColor="#1C3CF1" />
        </linearGradient>
        <clipPath id="clip0_4784_46479">
          <rect width={123.158} height={45} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgLogoWithText;