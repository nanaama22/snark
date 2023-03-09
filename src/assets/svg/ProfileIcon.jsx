import React from "react";

const ProfileIcon = ({selected}) => {
     return (
          <svg
               width="24"
               height="25"
               viewBox="0 0 24 25"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <g clip-path="url(#clip0_197_10296)">
                    <path
                         d="M12 3.5C7.032 3.5 3 7.532 3 12.5C3 17.468 7.032 21.5 12 21.5C16.968 21.5 21 17.468 21 12.5C21 7.532 16.968 3.5 12 3.5ZM12 6.2C13.494 6.2 14.7 7.406 14.7 8.9C14.7 10.394 13.494 11.6 12 11.6C10.506 11.6 9.3 10.394 9.3 8.9C9.3 7.406 10.506 6.2 12 6.2ZM12 18.98C9.75 18.98 7.761 17.828 6.6 16.082C6.627 14.291 10.2 13.31 12 13.31C13.791 13.31 17.373 14.291 17.4 16.082C16.239 17.828 14.25 18.98 12 18.98Z"
                         fill={selected ? "#1F419D" :"#AFAFAF"}
                    />
               </g>
               <defs>
                    <clipPath id="clip0_197_10296">
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

export default ProfileIcon;
