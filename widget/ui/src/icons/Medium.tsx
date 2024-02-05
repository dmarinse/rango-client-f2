import type { SvgIconPropsWithChildren } from '../components/SvgIcon';

import React, { createElement } from 'react';

import { SvgIcon } from '../components/SvgIcon';

function SvgMedium(props: SvgIconPropsWithChildren) {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M10.7826 9.2168C8.98375 9.2168 7.25857 9.93139 5.98658 11.2034C4.71459 12.4754 4 14.2005 4 15.9994C4 17.7983 4.71459 19.5234 5.98658 20.7954C7.25857 22.0674 8.98375 22.782 10.7826 22.782C12.5815 22.782 14.3067 22.0674 15.5786 20.7954C16.8506 19.5234 17.5652 17.7983 17.5652 15.9994C17.5652 14.2005 16.8506 12.4754 15.5786 11.2034C14.3067 9.93139 12.5815 9.2168 10.7826 9.2168ZM21.4783 9.73854C19.6052 9.73854 18.087 12.5418 18.087 15.9994C18.087 16.6479 18.1402 17.273 18.2393 17.861C18.3713 18.6451 18.5847 19.3631 18.8612 19.9818C18.9995 20.2912 19.1534 20.5756 19.3209 20.8307C19.6558 21.341 20.045 21.7349 20.4697 21.9791C20.7885 22.1617 21.1271 22.2603 21.4783 22.2603C21.8294 22.2603 22.168 22.1617 22.4868 21.9791C22.9115 21.7349 23.3007 21.341 23.6357 20.8307C23.8031 20.5756 23.957 20.2912 24.0953 19.9818C24.3718 19.3636 24.5852 18.6451 24.7172 17.861C24.8163 17.273 24.8696 16.6479 24.8696 15.9994C24.8696 12.5418 23.3513 9.73854 21.4783 9.73854ZM26.6957 10.2603C26.5605 10.2603 26.4301 10.3505 26.308 10.5185C26.2261 10.6302 26.1478 10.7763 26.0743 10.9531C26.0372 11.0413 26.0012 11.1373 25.9668 11.2406C25.8974 11.4467 25.8327 11.682 25.7737 11.9413C25.6558 12.4604 25.5603 13.0792 25.4941 13.7658C25.4612 14.1091 25.4357 14.4697 25.4179 14.8432C25.4002 15.2163 25.3913 15.6034 25.3913 15.9994C25.3913 16.3954 25.4002 16.7825 25.4179 17.1561C25.4351 17.5297 25.4607 17.8902 25.4941 18.2335C25.5603 18.9201 25.6558 19.5384 25.7737 20.058C25.8327 20.3178 25.8974 20.5526 25.9668 20.7587C26.0012 20.862 26.0372 20.958 26.0743 21.0462C26.1483 21.2231 26.2266 21.3691 26.308 21.4808C26.4301 21.6483 26.5605 21.7385 26.6957 21.7385C27.4162 21.7385 28 19.169 28 15.9994C28 12.8298 27.4162 10.2603 26.6957 10.2603Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgMedium;