import React from "react";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="black"
              d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0m14.28 2.53l-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06L4.28 9.78a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
            />
          </svg>
        </div>
        <div className="question">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M12.596 8.105A2.5 2.5 0 0 0 9.55 9.897a.5.5 0 1 0 .969.25a1.5 1.5 0 1 1 1.926 1.796a1.51 1.51 0 0 0-.981 1.452v.628a.5.5 0 1 0 1 0v-.628a.52.52 0 0 1 .304-.504a2.498 2.498 0 0 0-.173-4.786m-.631 7.292a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
