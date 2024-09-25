"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function CopyLink() {
  return (
    <div className="m-2 flex md:flex-row flex-col justify-between text-left items-start text-neutral-700 border-2 border-yellow-200 rounded-lg bg-yellow-50 px-6 py-3">
      <div className="flex flex-col pb-1">
        <h1 className="font-bold text-black">Try mulitplayer mode</h1>
        <div className="pr-2 w-full text-sm">
          Open this page in a new window and try making edits.
        </div>
      </div>
      <button
        className="text-sm flex items-center gap-1 px-4 py-2 rounded-lg bg-black hover:bg-blue-800 text-white border transition-all "
        onClick={() => window.open(window.location.href, "_blank")}
      >
        Open link in a new tab
        <ArrowUpRightIcon className="h-4 w-4 font-bold" />
      </button>
    </div>
  );
}
