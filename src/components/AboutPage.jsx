import React from "react";
import MaintCo from "../assets/maint.jpg";
import GSec from "../assets/gsec.jpg";
import SportsCo from "../assets/sports.jpg";
import TechCo from "../assets/tech.jpg";
import CultCo from "../assets/cult.jpg";
import MessCo from "../assets/mess.jpg";

// Reusable component for council members
const CouncilCard = ({ image, name, role, contact, email }) => (
  <div className="rounded-2xl bg-black/25 backdrop-blur-3xl rounded-3xl shadow-xl shadow-slate-900/10 border border-white/10 w-64 m-6 shadow-slate-900/10 p-4 text-center hover:shadow-xl hover:scale-110 transition-all duration-300">
    <img
      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border border-white/10"
      src={image}
      alt={name}
    />
    <h3 className="mt-2 text-xl leading-6 font-bold text-slate-100">{name}</h3>
    <p className="mt-2 text-lg font-lexend text-gray-400">{role}</p>
    <p className="mt-2 text-lg font-lexend text-gray-400">{contact}</p>
    <p className="mt-2 text-lg font-lexend text-gray-400">{email}</p>
  </div>
);

// Reusable component for sections
const CouncilSection = ({ title, members }) => (
  <div className="  m-6 p-4 pb-8 text-center transition-all duration-300">
    <h2 className="m-3 text-3xl leading-8 font-extrabold tracking-tight text-slate-100 sm:text-4xl">
      {title}
    </h2>
    <div className="flex justify-center">
      {members.map((member, index) => (
        <CouncilCard key={index} {...member} />
      ))}
    </div>
  </div>
);

const AboutPage = () => {
  const councilData = [
    {
      title: "Hostel",
      members: [
        {
          image: GSec,
          name: "Harshvardhan Chouhan",
          role: "General Secretary",
          contact: "9589166124",
          email: "210040062@iitb.ac.in",
        },
      ],
    },
    {
      title: "Sports",
      members: [
        {
          image: SportsCo,
          name: "Himanshu Choudhary",
          role: "Sports Councillor",
          contact: "7355572388",
          email: "22b0430@iitb.ac.in",
        },
      ],
    },
    {
      title: "Cultural",
      members: [
        {
          image: CultCo,
          name: "Subhash Chandra Killo",
          role: "Cultural Councillor",
          contact: "9493203341",
          email: "22b2735@iitb.ac.in",
        },
      ],
    },
    {
      title: "Technical",
      members: [
        {
          image: TechCo,
          name: "Sarvesh Patil",
          role: "Technical Councillor",
          contact: "9423034000",
          email: "22b2276@iitb.ac.in",
        },
      ],
    },
    {
      title: "Mess",
      members: [
        {
          image: MessCo,
          name: "Shubham Meena",
          role: "Mess Councillor",
          contact: "9302020069",
          email: "22b4526@iitb.ac.in",
        },
      ],
    },
    {
      title: "Maintenance",
      members: [
        {
          image: MaintCo,
          name: "Rohan Dubey",
          role: "Maintenance Councillor",
          contact: "9302020069",
          email: "22b4526@iitb.ac.in",
        },
      ],
    },
  ];

  return (
    <div className="py-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            Hostel 3 Council
          </h2>
        </div>
        {councilData.map((section, index) => (
          <CouncilSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
