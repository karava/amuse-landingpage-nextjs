"use client";

import { AppPlatforms } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const getApp = () => {
  event({
    action: "Download_app",
    category: "app",
    label: "Download App Button Clicked",
  });
};

function MobileApps() {
  return (
    <div className="flex items-center justify-center gap-6">
      {AppPlatforms.map((platform, index) => (
        <Link key={index} href={platform.href} onClick={() => getApp()}>
          <Image
            src={platform.image}
            alt={`Image of ${platform.title}`}
            width={160}
            height={160}
            className="max-w-[152px] object-cover object-center"
          />
        </Link>
      ))}
    </div>
  );
}

export default MobileApps;
