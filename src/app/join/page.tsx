"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

export default function Join() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [packagesPerMonth, setPackagesPerMonth] = useState("");

  let interval = 500;

  useEffect(() => {
    const form = document.getElementById("form-container");

    setInterval(() => {
      if (window.scrollY + window.innerHeight > form.offsetTop) {
        form?.classList.remove("bg-gray-100");
        form?.classList.add("bg-blue-100");
      }
    }, interval);
  }, []);

  useEffect(() => {
    const packages = document.querySelector("[name=packages]");

    packages?.addEventListener("change", () => {
      if (packages.value > 50) {
        alert("Sorry but we can not track more than 50 packages a month.");
      }
    });
  }, []);

  function validate(phone) {
    const phonePattern =
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (phonePattern.test(phone)) {
      return true;
    } else {
      return false;
    }
  }

  function submit() {
    // API call goes here
  }

  return (
    <div>
      <div className="mb-12" style={{ height: 500 }}>
        <img src="/banner.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto">
        <div className="text-6xl font-bold text-gray-700 mb-12">
          Track with Confidence: Sign Up Today!
        </div>
        <p className="max-w-2xl mb-12 text-gray-800">
          In today&apos;s fast-paced world, tracking the hundreds of packages
          per month that come in and out of our lives can seem daunting. But
          with our state-of-the-art tracking system, you&apos;re always in the
          know. We provide real-time updates, accurate ETAs, and unparalleled
          peace of mind, no matter the volume of your shipments.
        </p>
        <p className="max-w-2xl mb-12 text-gray-800">
          Whether you&apos;re managing a handful or hundreds of personal parcels
          or coordinating business shipments, never get caught off guard again.
          Join the thousands who&apos;ve elevated their tracking experience and
          take control of your deliveries like never before.
        </p>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container flex mx-auto gap-6">
          <div className="flex-1">
            <div className="text-4xl text-gray-700 mb-8">
              Real-time Location Updates
            </div>
            <div className="mb-12 text-gray-800 max-w-2xl">
              Never be left wondering where your package is again. Our app
              provides instant location tracking, updating you at every phase,
              from dispatch to doorstep. Experience real-time clarity and ditch
              the guesswork.
            </div>
          </div>
          <div className="flex-1">
            <img src="/feature-1.jpg" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container flex mx-auto gap-6">
          <div className="flex-1">
            <img src="/feature-2.jpg" className="w-full rounded-lg" />
          </div>
          <div className="flex-1">
            <div className="text-4xl text-gray-700 mb-8">
              Predictive Delivery Alerts
            </div>
            <div className="mb-12 text-gray-800 max-w-2xl">
              Plan your day with precision. Our advanced algorithms predict the
              exact delivery window, sending you timely alerts, ensuring
              you&apos;re always prepared for your package&apos;s arrival. Say
              goodbye to endless waiting.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container flex mx-auto gap-6">
          <div className="flex-1">
            <div className="text-4xl text-gray-700 mb-8">
              Comprehensive History & Analytics
            </div>
            <div className="mb-12 text-gray-800 max-w-2xl">
              Stay informed and organized. Access a detailed history of all your
              past shipments, and gain insights into your monthly package
              trends. Whether for personal analysis or business logistics,
              knowledge is power.
            </div>
          </div>
          <div className="flex-1">
            <img src="/feature-3.jpg" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container flex mx-auto gap-6">
          <div className="flex-1">
            <img src="/feature-4.jpg" className="w-full rounded-lg" />
          </div>
          <div className="flex-1">
            <div className="text-4xl text-gray-700 mb-8">
              Multi-Carrier Integration
            </div>
            <div className="mb-12 text-gray-800 max-w-2xl">
              One app, all your packages. Seamlessly track shipments from
              various carriers worldwide in one unified dashboard. Whether
              it&apos;s local delivery or international shipping, we&apos;ve got
              you covered, making your tracking experience smooth and
              hassle-free.
            </div>
          </div>
        </div>
      </div>
      <div
        id="form-container"
        className="py-12 bg-gray-100 relative"
        style={{ transition: "all 1s ease" }}
      >
        <div className="container mx-auto flex justify-center">
          <div className="max-w-4xl">
            <h3 className="text-5xl text-gray-700 mb-8 text-center">
              Get Started with Superior Tracking
            </h3>
            <p className="mb-12 text-gray-800">
              To enhance your tracking experience, we need a few details about
              you. Your information is held with utmost privacy. Fill out the
              form below and let&apos;s streamline your package management.
            </p>
            <div className="max-w-2xl mx-auto">
              <div>
                <span>First name:</span>
                <br />
                <input
                  name="firstName"
                  className="w-full mb-4 p-2 rounded-lg text-md"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div>
                <span>Last name:</span>
                <br />
                <input
                  name="lastName"
                  className="w-full mb-4 p-2 rounded-lg text-md"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <div>
                <span>Phone number:</span>
                <br />
                <input
                  name="phonenumber"
                  className="w-full mb-4 p-2 rounded-lg text-md"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </div>
              <div>
                <span>Date of birth:</span>
                <br />
                <input
                  name="dob"
                  className="w-full mb-4 p-2 rounded-lg text-md"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={dateOfBirth}
                />
              </div>
              <div>
                <span>Packages per month:</span>
                <br />
                <input
                  name="packages"
                  className="w-full mb-4 p-2 rounded-lg text-md"
                  onChange={(e) => setPackagesPerMonth(e.target.value)}
                  value={packagesPerMonth}
                />
              </div>
              <button
                className="p-2 bg-blue-500 text-white text-lg rounded-lg w-full"
                onClick={() => {
                  submit();
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
