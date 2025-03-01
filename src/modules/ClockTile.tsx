import React from "react";
import { Clock } from "lucide-react";

export function ClockTile() {
  return (
    <div className="flex justify-center">
      <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
        <div className="absolute w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <div className="text-md font-medium">9:56 PM</div>
        </div>
        {/* <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-white"></div> */}
      </div>
    </div>
  );
}
