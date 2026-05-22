"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  contactNo: string;
  modelNo: string;
  os: "Windows" | "Mac";
}

export default function DriverInstallation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNo: "",
    modelNo: "",
    os: "Windows",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/DriverForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: { success: boolean } = await response.json();

      if (data.success) {
        setMessage("Driver request submitted successfully!");

        setFormData({
          name: "",
          email: "",
          contactNo: "",
          modelNo: "",
          os: "Windows",
        });
      } else {
        setMessage("Submission failed.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#e6e7e8] flex flex-col relative overflow-hidden font-sans">
      {/* Header */}
      <div className="w-full p-6 flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">
            Installing
          </h1>

          <p className="text-gray-600 text-sm">
            Fatal error occurred during installation..
          </p>
        </div>

        {/* <div className="w-16 h-16 bg-[#007DBA] rounded-full flex items-center justify-center text-white font-bold text-3xl italic">
          <img src="/hp-icon.png" alt="hp-icon" />
        </div> */}
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-start px-4 py-10">
        <div className="max-w-2xl w-full text-center">
          <div className="relative inline-block mb-6">
            <div className="w-40 h-24 border-2 border-gray-400 rounded-md bg-white relative mx-auto">
              <div className="absolute bottom-0 left-4 right-4 h-1 bg-gray-300" />
              <div className="absolute -bottom-4 left-6 right-6 h-6 border border-gray-400 bg-white shadow-sm" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 border-[6px] border-red-600 rounded-full flex items-center justify-center relative">
                <div className="w-14 h-[6px] bg-red-600 rotate-45" />

                <span className="absolute text-[10px] font-bold text-red-600 top-4">
                  ERROR
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            2 Issues Found
          </h2>

          <hr className="border-gray-400 w-64 mx-auto mb-8" />

          <div className="space-y-4 text-gray-800 text-base">
            <p className="flex items-center justify-center">
              1. Network Error{" "}
              <span className="font-semibold ml-1">
                0x00000709
              </span>{" "}
              : Download Could Not be Completed !
            </p>

            <p className="max-w-xl mx-auto">
              2. Printer driver installation has been failed due
              to error
              <span className="font-semibold px-1">
                "C0000022"
              </span>
              preventing product driver installation !
            </p>
          </div>

          <button onClick={openChat} className="mt-8 bg-[#007DBA] hover:bg-[#006699] text-white text-lg py-2 px-10 rounded-lg transition-colors shadow-md">
            Live Chat Support
          </button>
        </div>
      </div>

     {/* Troubleshooting Guide */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-15 mx-10">
        <div className="bg-[#007DBA] p-6 text-white text-center">
          <h3 className="text-xl font-bold">
            How to Fix Printer Installation Errors
          </h3>
          <p className="text-blue-100 text-sm mt-1">
            Follow these steps carefully to resolve permission and connectivity
            issues.
          </p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          {/* Step 1 & 2 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  1
                </span>
                Restart Devices
              </h4>
              <p className="text-gray-600 text-sm">
                Start by restarting both your computer and your printer. This
                clears temporary system glitches that may be interfering with
                the installation process. After restarting, try installing the
                printer again.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  2
                </span>
                Check Network Connection
              </h4>
              <p className="text-gray-600 text-sm">
                Ensure that your printer and computer are connected to the same
                network (Wi-Fi or LAN). A weak or unstable connection can
                interrupt the installation process and trigger error 0x00000709.
              </p>
              <ul className="text-gray-600 text-sm list-disc ml-10 space-y-1 pt-3">
                <li>Turn your router off and on again</li>
                <li>Reconnect your printer to Wi-Fi</li>
                <li>Confirm your PC has a stable internet connection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  3
                </span>
                Run Installation as Administrator
              </h4>
              <p className="text-gray-600 text-sm">
                Permission issues often cause error C0000022.
              </p>
              <ul className="text-gray-600 text-sm list-disc ml-10 space-y-1 pt-3">
                <li>Right-click on the printer driver setup file</li>
                <li>Select “Run as Administrator”</li>
                <li>Follow the installation steps again</li>
              </ul>
              <p className="text-gray-600 text-sm pt-3">
                This allows your system to install required files without
                restrictions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  4
                </span>
                Remove Old or Corrupted Drivers
              </h4>
              <p className="text-gray-600 text-sm">
                Existing or corrupted drivers can block new installation.
              </p>
              <ul className="text-gray-600 text-sm list-disc ml-10 space-y-1 pt-3">
                <li>Go to Control Panel &gt; Devices and Printers</li>
                <li>Remove any existing printer related to your device</li>
                <li>Open Device Manager and uninstall printer drivers</li>
                <li>Restart your system</li>
              </ul>
            </div>
          </div>

          {/* Step 5-8 */}
          <div className="space-y-6">
            {/* Step 5 */}
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  5
                </span>
                Download Latest Drivers
              </h4>
              <p className="text-gray-600 text-sm">
                Always install the latest and correct driver version.
              </p>
              <ul className="text-gray-600 text-sm list-disc ml-10 space-y-1 pt-3">
                <li>Visit the official website of your printer</li>
                <li>Search your printer model</li>
                <li>Download the recommended driver for your system</li>
              </ul>
              <p className="text-gray-600 text-sm pt-3">
                Avoid using outdated or incompatible driver files.
              </p>
            </div>

            {/* Step 6 */}
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  6
                </span>
                Disable Antivirus Temporarily
              </h4>
              <p className="text-gray-600 text-sm">
                In some cases, antivirus or firewall settings may block
                installation.
              </p>
              <ul className="text-gray-600 text-sm list-disc ml-10 space-y-1 pt-3">
                <li>Temporarily disable antivirus software</li>
                <li>Install the printer driver</li>
                <li>Re-enable security software after installation</li>
              </ul>
            </div>

            {/* Step 7 */}
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  7
                </span>
                Check Windows Services
              </h4>
              <p className="text-gray-600 text-sm">
                If the issue still continues:
              </p>
              <ul className="text-gray-600 text-sm list-disc ml-10 space-y-1 pt-3">
                <li>Press Win + R, type services.msc</li>
                <li>Locate Print Spooler</li>
                <li>Restart the service</li>
              </ul>
              <p className="text-gray-600 text-sm pt-3">
                You can also ensure your user account has full administrative
                rights.
              </p>
            </div>

            {/* Step 8 */}
            <div>
              <h4 className="font-bold text-[#007DBA] flex items-center mb-2">
                <span className="w-6 h-6 bg-[#007DBA] text-white rounded-full flex items-center justify-center text-xs mr-2">
                  8
                </span>
                Try Manual Printer Setup
              </h4>
              <p className="text-gray-600 text-sm">If automatic setup fails:</p>
              <ul className="text-gray-600 text-sm list-disc ml-10 space-y-1 pt-3">
                <li>Go to Settings &gt; Devices &gt; Printers & Scanners</li>
                <li>Click Add a Printer</li>
                <li>Select “The printer that I want isn’t listed”</li>
                <li>Add it manually using IP address or local port</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-40 mx-4 md:mx-10 border-t-4 border-[#007DBA]">
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Get Free drivers on your mail
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Can't find the right driver? Fill out the details
              below and we'll send the direct download link to
              your inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* NAME */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#007DBA]"
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#007DBA]"
              />
            </div>

            {/* CONTACT */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Contact No.
              </label>

              <input
                type="tel"
                name="contactNo"
                placeholder="+1 (555) 000-0000"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#007DBA]"
              />
            </div>

            {/* MODEL */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Printer Model No.
              </label>

              <input
                type="text"
                name="modelNo"
                placeholder="e.g. HP OfficeJet Pro 9010"
                value={formData.modelNo}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#007DBA]"
              />
            </div>

            {/* OS */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Operating System
              </label>

              <div className="flex gap-4 mt-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="os"
                    value="Windows"
                    checked={formData.os === "Windows"}
                    onChange={handleChange}
                  />

                  <span className="text-gray-700">
                    Windows
                  </span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="os"
                    value="Mac"
                    checked={formData.os === "Mac"}
                    onChange={handleChange}
                  />

                  <span className="text-gray-700">
                    Mac OS
                  </span>
                </label>
              </div>
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#007DBA] hover:bg-[#006699] text-white font-bold py-3 rounded-lg transition-all shadow-lg transform hover:-translate-y-1 disabled:opacity-50"
              >
                {loading
                  ? "Submitting..."
                  : "Send Me My Drivers"}
              </button>
            </div>

            {/* MESSAGE */}
            {message && (
              <div className="md:col-span-2 text-center">
                <p className="text-green-600 font-medium">
                  {message}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer Overlay */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-[#007DBA]"
          style={{
            clipPath: "polygon(0 0%, 100% 100%, 0 100%)",
          }}
        >
          
        </div>
      </div>
    </div>
  );
}