import dashboard from "../../assets/sidebar/dashboard_icon.svg";
import teamMembers from "../../assets/sidebar/team_member.svg";
import homeIcon from "../../assets/sidebar/home_icon.svg";

export const Sidebar = [
  // {
  //   name: "Dashboard",
  //   path: "/dashboard",
  //   base: "dashboard",
  //   icon: dashboard,
  //   selectedIcon: dashboard,
  // },
  {
    name: "User Dashboard",
    path: "/user-dashboard",
    base: "user-dashboard",
    icon: teamMembers,
    selectedIcon: teamMembers,
  },
  // {
  //   name: "Public Workspace",
  //   path: "/public-workspace",
  //   base: "public-workspace",
  //   icon: homeIcon,
  //   selectedIcon: homeIcon,
  // },
  {
    name: "Workspaces",
    path: "/workspaces",
    base: "workspaces",
    icon: homeIcon,
    selectedIcon: homeIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    base: "settings",
    icon: homeIcon, // TODO: Replace with a settings icon
    selectedIcon: homeIcon, // TODO: Replace with a selected settings icon
  },
];


export const pinnedWorkSpace = [
  { id: 1, name: "Accounts", isPin: true },
  { id: 2, name: "Doc Upload", isPin: true },
  { id: 3, name: "Example Workspace", isPin: true },
  { id: 4, name: "Forms", isPin: true },
  { id: 5, name: "Personal Tax", isPin: true },
  { id: 6, name: "Received Information", isPin: true },
  { id: 7, name: "A1001 - Adkins, Carla - Personal Tax", isPin: false },
  { id: 8, name: "B1002 - Bridge, Alexander - Personal", isPin: false },
  { id: 9, name: "C1003 - Chambers, Karl - Personal Tax", isPin: false },
  { id: 10, name: "D1004 - Davidson, Emmy - Personal Tax", isPin: false },
  { id: 11, name: "E1005 - Edwards, Ben - Personal Tax", isPin: false },
  { id: 12, name: "F1006 - Fisher, Rosie - Personal Tax", isPin: false },
  { id: 13, name: "G1007 - Gilbert, Alex - Audit", isPin: false },
  { id: 14, name: "H1008 - Hammond, Ashleigh - Audit", isPin: false },
  { id: 15, name: "I1009 - Ingram & Co - Audit", isPin: false },
  { id: 16, name: "J1010 - Jones, Dotter - Audit", isPin: false },
  { id: 17, name: "K1011 - King, Bradley - Audit", isPin: false },
  { id: 18, name: "L1012 - Lang, Ellis - End of Year", isPin: false },
  { id: 19, name: "M1013 - Mille, Ellie - End of Year", isPin: false },
];