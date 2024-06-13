import {
  IconLayoutDashboard,
  IconShoppingCart,
  IconPackage,
  IconUsers,
  IconChartPie,
  IconSettings,
  IconCurrencyDollar,
  IconGift,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Management",
  },
  {
    id: uniqueId(),
    title: "Products",
    icon: IconPackage,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Orders",
    icon: IconShoppingCart,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Customers",
    icon: IconUsers,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Marketing",
    icon: IconChartPie,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Reward Points",
    icon: IconGift,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "VCC Balance",
    icon: IconCurrencyDollar,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconSettings,
    href: "#",
  },
];

export default Menuitems;
