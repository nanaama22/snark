import React from "react";

const ChatIcon = ({ selected }) => {
     return (
          <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <g clip-path="url(#clip0_197_10291)">
                    <path
                         d="M19.2 3H4.8C3.81 3 3.009 3.81 3.009 4.8L3 21L6.6 17.4H19.2C20.19 17.4 21 16.59 21 15.6V4.8C21 3.81 20.19 3 19.2 3ZM6.6 9.3H17.4V11.1H6.6V9.3ZM13.8 13.8H6.6V12H13.8V13.8ZM17.4 8.4H6.6V6.6H17.4V8.4Z"
                         fill={selected ? "#1F419D" : "#AFAFAF"}
                    />
               </g>
               <defs>
                    <clipPath id="clip0_197_10291">
                         <rect width="24" height="24" fill="white" />
                    </clipPath>
               </defs>
          </svg>
     );
};

export default ChatIcon;
