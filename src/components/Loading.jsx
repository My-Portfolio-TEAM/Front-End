import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

export default function Loading() {
  return (
    //<div className="absolute z-50 flex items-center justify-center w-screen h-screen">
    //  <div className="absolute w-12 h-12 border-4 border-t-4 rounded-md border-text-textPrimary animate-spin" />
    //</div>
    <div data-testid="loading-bar" className="sticky top-0 z-50 ">
      <LoadingBar className="h-[3px] bg-gradient-to-r from-emerald-500 to-sky-900" />
    </div>
  );
}
