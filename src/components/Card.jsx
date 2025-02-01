import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints = {reference} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-800/90 text-white px-8 py-10 overflow-hidden">
      <FaFileLines />
      <p className="mt-5 leading-tight text-sm font-semibold">{data.title}</p>
      <div className="absolute footer bottom-0 w-full  left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.isClose ? (
              <IoMdClose />
            ) : (
              <MdOutlineFileDownload size="1em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isTag && <div className={`tag w-full py-4 ${data.tag.color} flex items-center justify-center `}>
            <h3 className="font-semibold text-sm">{data.tag.title}</h3>
          
        </div>}

      </div>
    </motion.div>
  );
}

export default Card;
