"use client"; // Ensure it runs on the client side

import Spline from "@splinetool/react-spline";

function SplineViewer() {
  return (
    <div className="h-full w-full rounded-md bg-orange-100   flex items-center justify-center">
      <Spline scene="https://prod.spline.design/fAGbOUcJ6lDjUzN4/scene.splinecode" />
    </div>
  );
}

export default SplineViewer;
