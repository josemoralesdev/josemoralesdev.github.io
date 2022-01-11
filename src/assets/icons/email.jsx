import React from "react"

const Email = ({ className }) => {
  return (
    <>
      <svg
        className={className}
        id="email-icon"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_401_239)">
          <path
            d="M27.1667 5.33331H5.83341C4.36675 5.33331 3.18008 6.53331 3.18008 7.99998L3.16675 24C3.16675 25.4666 4.36675 26.6666 5.83341 26.6666H27.1667C28.6334 26.6666 29.8334 25.4666 29.8334 24V7.99998C29.8334 6.53331 28.6334 5.33331 27.1667 5.33331ZM27.1667 10.6666L16.5001 17.3333L5.83341 10.6666V7.99998L16.5001 14.6666L27.1667 7.99998V10.6666Z"
            fill="#3f3f3f"
          />
        </g>
        <defs>
          <clipPath id="clip0_401_239">
            <rect x="0.5" width="32" height="32" rx="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}
export default Email
