import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const View = () => {
  const { id } = useParams();
  const allMemos = useSelector((state) => state.memo.memos);
  const memo = allMemos.find((memo) => memo._id === id);

  return (
    <div>
      <div className="flex justify-center mt-5 gap-1 sm:gap-5">
        <div>
          <input
            type="text"
            disabled
            placeholder="Enter Snippet Name"
            value={memo?.title}
            className="border outline-none border-gray-400 py-3 pl-4 w-[300px] sm:w-[850px] mt-2 rounded-2xl bg-gray-800 text-white focus:outline-none "
          />
        </div>
      </div>

      <div className=" flex justify-center mt-5">
        <div className="relative">
          <button
            onClick={() => {
              navigator.clipboard.writeText(memo?.content);
              toast.success("Copied to Clipboard");
              1;
            }}
            className="  absolute z-10 cursor-pointer mt-5 right-4"
          >
            <Copy strokeWidth={1} className="text-gray-300 hover:text-white" />
          </button>
          <textarea
            value={memo?.content}
            disabled
            placeholder="Enter your code here"
            rows={22}
            className="  border outline-none border-gray-400 py-3 pl-4 w-[300px] sm:w-[860px] mt-2 rounded-l bg-gray-800 text-white focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
};

export default View;
