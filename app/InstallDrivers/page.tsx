"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  MessageCircleQuestion,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface TroubleshootingStep {
  title: string;
  description: string;
}

const InstallHPSmart = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const router = useRouter();

  const handleInstallClick = (): void => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      router.push("/Error");
    }, 15000);
  };

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  const troubleshootingSteps: TroubleshootingStep[] = [
    {
      title: "Check and update your Windows version",
      description:
        "Ensure your PC is running the latest version of Windows 10 or 11. Go to Settings > Windows Update and click 'Check for updates'. HP Smart requires a modern OS to function correctly.",
    },
    {
      title: "Disconnect from a VPN",
      description:
        "Active VPN connections can interfere with the Microsoft Store's ability to verify your location or printer network. Disconnect your VPN temporarily and try the installation again.",
    },
    {
      title: "Skip Microsoft account creation",
      description:
        "If you are stuck on a sign-in loop, you can often skip the account sign-in during the initial Store prompt. Look for 'No thanks' or 'Install only' options to proceed without an active account.",
    },
    {
      title: "Check computer time and location settings",
      description:
        "If your system clock or region is incorrect, the Microsoft Store may block downloads. Go to Settings > Time & Language to ensure 'Set time automatically' is toggled ON and your region matches your physical location.",
    },
    {
      title: "Reset the Microsoft Store cache",
      description:
        "Press the Windows Key + R, type 'wsreset.exe', and press Enter. A blank command prompt will open for about 10 seconds before the Store opens automatically. This clears corrupted temporary files.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      {/* Popup Loader */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col items-center">
            <Image
              src="/loading.gif"
              alt="loading"
              width={80}
              height={80}
              className="mb-4"
            />

            <p className="text-lg font-light text-gray-700">
              Installing Drivers... Please wait
            </p>

            <div className="w-64 mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 15, ease: "linear" }}
                className="h-2 bg-[#080880]"
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-white shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="h-127.75 relative p-8 md:p-12 text-white overflow-hidden">
          {/* Desktop Background */}
          <div
            className="absolute inset-0 hidden md:block bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/bg-img.png')",
            }}
          />

          {/* Mobile Background */}
          <div
            className="absolute inset-0 block md:hidden bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/bg-mb.png')",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-xl md:text-5xl font-light mb-4 md:mb-8">
              Complete setup for your Printer
            </h1>

            <div className="space-y-4 md:space-y-8">
              <div className="flex gap-4 md:gap-6">
                <span className="text-lg md:text-4xl font-light opacity-80">
                  1
                </span>

                <p className="text-base md:text-2xl pt-1">
                  Make sure that your printer is powered on
                </p>
              </div>

              <div className="flex gap-4 md:gap-6">
                <span className="text-lg md:text-4xl font-light opacity-80">
                  2
                </span>

                <div>
                  <p className="text-base md:text-2xl pt-1 mb-4">
                    Install the Driver to complete setup
                  </p>

                  <button
                    onClick={handleInstallClick}
                    className="bg-black text-white md:bg-white md:text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors mt-1 lg:mt-6"
                  >
                    Install Printer Driver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12 bg-white">
          {/* App Store Section */}
          <div className="mb-10">
            <p className="text-gray-600 text-sm font-semibold mb-4">
              Also available on:
            </p>

            <div className="flex gap-4 flex-wrap">
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="App Store"
                className="h-10 cursor-pointer"
              />

              <img
                src="/googleplay.svg"
                alt="Google Play"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>

          {/* Troubleshooting Accordion */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 text-[#004b71] mb-6">
              <MessageCircleQuestion className="w-8 h-8 shrink-0" />

              <h2 className="text-2xl font-normal">
                Troubleshooting tips for launching the Microsoft Store
              </h2>
            </div>

            <div className="border-t border-gray-200">
              {troubleshootingSteps.map(
                (step: TroubleshootingStep, index: number) => (
                  <div
                    key={index}
                    className="border-b border-gray-200"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(
                          openIndex === index ? null : index
                        )
                      }
                      className="w-full py-5 flex justify-between items-center text-left text-gray-700 hover:text-[#007DBA] transition-colors"
                    >
                      <span className="text-lg font-medium">
                        {step.title}
                      </span>

                      <ChevronDown
                        className={`transform transition-transform duration-300 ${
                          openIndex === index
                            ? "rotate-180 text-[#007DBA]"
                            : "text-gray-400"
                        }`}
                      />
                    </button>

                    {openIndex === index && (
                      <div className="pb-6 pr-12 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                        {step.description}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Footer Chat */}
          <div className="mt-12 flex items-center gap-3 text-[#007DBA] font-medium cursor-pointer hover:underline">
            <div className="p-2 border-2 border-[#007DBA] rounded-full">
              <MessageCircleQuestion className="w-5 h-5" />
            </div>

            <p>
              Need additional help with set-up?{" "}
              <button onClick={openChat} className="underline">Chat with us</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallHPSmart;