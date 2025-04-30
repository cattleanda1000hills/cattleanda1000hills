import {
  BriefcaseBusiness,
  CalendarDays,
  Home,
  LogIn,
  ShieldPlus,
  TrendingUp,
} from "lucide-react";

export const features = [
  { name: "Track Pregnancy", Icon: TrendingUp },
  { name: "Manage Appointments", Icon: CalendarDays },
  { name: "Get Expert Tips", Icon: ShieldPlus },
];

export const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export const profileInfos = [
  {
    name: "Mother's Info",
    url: "/profile/details?type=mother-info",
    image: "/pregnant_4.png",
  },
  {
    name: "Birth Companion",
    url: "/profile/details?type=birth-companion",
    image: "/birth_companion.png",
  },
  {
    name: "Baby's Info",
    url: "/profile/details?type=baby-info",
    image: "/baby_2.png",
  },
  {
    name: "Medical History",
    url: "/profile/details?type=medical-history",
    image: "/medical_history.png",
  },
];

export const registerFormData = [
  {
    name: "username",
    label: "Username",
    placeholder: "E.g johnDoe, johndoe@gmail.com, 061 234 5678, etc...",
    iconUrl: "/femaleUser.svg",
    bgColour: "bg-turquoise-50",
    isRequired: true,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    iconUrl: "/passwordKey.svg",
    bgColour: "bg-turquoise-50",
    isRequired: true,
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    iconUrl: "/passwordKey.svg",
    bgColour: "bg-turquoise-50",
    isRequired: true,
  },
];

export const loginFormData = [
  {
    name: "username",
    label: "Username",
    placeholder: "E.g johnDoe, johndoe@gmail.com, 061 234 5678, etc...",
    iconUrl: "/femaleUser.svg",
    bgColour: "bg-turquoise-50",
    isRequired: true,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    iconUrl: "/passwordKey.svg",
    bgColour: "bg-turquoise-50",
    isRequired: true,
  },
];

export const assetsInfos = [
  {
    name: "Cow 1",
    url: "/assets/details?type=mother-info",
    image: "/cow_logo.png",
    price: 12000,
  },
  {
    name: "Cow 2",
    url: "/assets/details?type=birth-companion",
    image: "/cow_logo.png",
    price: 15000,
  },
  {
    name: "Cow 3",
    url: "/assets/details?type=baby-info",
    image: "/cow_logo.png",
    price: 13500,
  },
  {
    name: "Cow 4",
    url: "/assets/details?type=medical-history",
    image: "/cow_logo.png",
    price: 42000,
  },
];

export const acquisitionInfos = [
  {
    name: "Cow 1",
    url: "/my-acquisitions/details?type=mother-info",
    image: "/cow_logo.png",
    price: 12000,
  },
  {
    name: "Cow 2",
    url: "/my-acquisitions/details?type=birth-companion",
    image: "/cow_logo.png",
    price: 15000,
  },
  {
    name: "Cow 3",
    url: "/my-acquisitions/details?type=baby-info",
    image: "/cow_logo.png",
    price: 13500,
  },
  {
    name: "Cow 4",
    url: "/my-acquisitions/details?type=medical-history",
    image: "/cow_logo.png",
    price: 42000,
  },
];

const animalCost = {
  Cow: [12000, 13000, 20000, 15000],
  Goat: [7000, 9000, 6000, 4000],
  Chicken: [200, 500, 300, 400],
};

export const assetVariantsInfos = (asset: keyof typeof animalCost) => [
  {
    name: `${asset} 1`,
    url: "/assets/details?type=mother-info",
    image: "/cow_logo.png",
    price: animalCost[asset][0],
  },
  {
    name: `${asset} 2`,
    url: "/assets/details?type=birth-companion",
    image: "/cow_logo.png",
    price: animalCost[asset][1],
  },
  {
    name: `${asset} 3`,
    url: "/assets/details?type=baby-info",
    image: "/cow_logo.png",
    price: animalCost[asset][2],
  },
  {
    name: `${asset} 4`,
    url: "/assets/details?type=medical-history",
    image: "/cow_logo.png",
    price: animalCost[asset][3],
  },
];

export const groupUsersInfos = [
  {
    name: "Pearl Osa",
    status: "Paid",
  },
  {
    name: "Onemhinye Bayode",
    status: "Paid",
  },
  {
    name: "Yanela Oluwaseeki",
    status: "Paid",
  },
  {
    name: "Mpumilelo Success",
    status: "Pending",
  },
  {
    name: "Nyaniso Mashabane",
    status: "Pending",
  },
  {
    name: "Mrs Kuda",
    status: "Pending",
  },
];


export const paymentHistory = [
  {
    name: "Consultation Fee",
    date: "20 Jan 2025",
    amount: "280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "7,280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "1,280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "2,280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "1,200",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "2,780",
  },
];

export const babyInputDetails = [
  { label: "Full Name", placeholder: "E.g John" },
  { label: "Surname", placeholder: "E.g Doe" },
];

export const motherInputDetails = [
  { label: "Full Name", placeholder: "E.g John" },
  { label: "Surname", placeholder: "E.g Doe" },
  { label: "Maiden Name", placeholder: "E.g Doe" },
  { label: "ID / Passport", placeholder: "E.g 93023234000 / D2341SDFASDF" },
  { label: "Date of Birth", type: "date" },
  { label: "Country of Origin", placeholder: "E.g South Africa" },
  {
    label: "Contact Number",
    placeholder: "E.g 0677123123123",
    isPhoneNumber: true,
  },
  { label: "Email Address", placeholder: "E.g john@doe.com", type: "email" },
];

export const userProfileInputDetails = [
  { label: "Full Name", placeholder: "E.g John" },
  { label: "Surname", placeholder: "E.g Doe" },
  { label: "Maiden Name", placeholder: "E.g Doe" },
  { label: "ID / Passport", placeholder: "E.g 93023234000 / D2341SDFASDF" },
  { label: "Date of Birth", type: "date" },
  { label: "Country of Origin", placeholder: "E.g South Africa" },
  {
    label: "Contact Number",
    placeholder: "E.g 0677123123123",
    isPhoneNumber: true,
  },
  { label: "Email Address", placeholder: "E.g john@doe.com", type: "email" },
];

export const medicalHistoryInputDetails = [
  { label: "Details", placeholder: "Enter details of Family history" },
  { label: "Medication", placeholder: "Enter Medications" },
  { label: "Operations", placeholder: "Enter Operations description" },
  { label: "Allergies", placeholder: "Enter Allergies" },
];

export const userNavList = [
  { name: "Dashboard", url: "/dashboard", Icon: Home, bgColor: "pinklet" },
  {
    name: "Assets Groups",
    url: "/asset-groups",
    Icon: BriefcaseBusiness,
    bgColor: "turquoise",
  },
  // {
  //   name: "Profile",
  //   url: "/profile",
  //   Icon: SquareArrowUp,
  //   bgColor: "pinklet",
  // },
  { name: "Sign Out", url: "#", Icon: LogIn, bgColor: "pinklet" },
];
