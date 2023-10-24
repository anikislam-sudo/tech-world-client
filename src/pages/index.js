"use client";

import FeatureCategory from "@/Components/ui/FeatureCategory";
import SliderItem from "@/Components/ui/SliderItem";


export default function Home() {
  return (
    <div max-w-7xl mx-auto pb-10 min-h-screen>
      <SliderItem></SliderItem>
      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold mb-1 mt-5">
          Fresh Choice,Fresh Deal <br></br> Don’t Delay.
        </h2>
        <p className="text-center mb-3">Best Choice Of Yours</p>
        <FeatureCategory />
      </div>
    </div>
  );
}
