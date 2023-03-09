import React from "react";

const DashboardIcon = ({selected}) => {
     return (
          <svg
               width="24"
               height="25"
               viewBox="0 0 24 25"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <g clip-path="url(#clip0_197_10280)">
                    <path
                         d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
                         fill={selected ? "#1F419D" :"#AFAFAF"}
                    />
               </g>
               <defs>
                    <clipPath id="clip0_197_10280">
                         <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 0.5)"
                         />
                    </clipPath>
               </defs>
          </svg>
     );
};

export default DashboardIcon;
