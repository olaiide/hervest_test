import icon from "../../assets/save.svg"
import arrow from "../../assets/arrow.svg"
import plan from "../../assets/plan.svg"
import farmer from "../../assets/farmer.svg"
import girls from "../../assets/girls.svg"
export const BalanceData = [
  {
    id : 1,
    title: "Available Balance",
    amount: "₦1,063,345.04",
  },
  {
    id : 2,
    title: "Impact Investments",
    amount: "₦1,007,345.04",
  },
  {
    id : 3,
    title: "Total Savings",
    amount: "₦2,007,345.04",
  },
  {
    id : 4,
    title: "Total Returns",
    amount: "₦56,000.00",
  },
];

export const SaveData = [
  {
    id : 1,
    title : 'Saving for raining days',
    icon,
    amount : 'N400.000',
  },
  {
    id : 2,
    title : 'Saving for raining days',
    icon,
    amount : 'N400.000',
  },
  {
    id : 3,
    title : 'Saving for raining days',
    icon,
    amount : 'N400.000',
    arrow,
  }
]

export const Data = [
  {
    id : 1,
    title : 'Create a savings plan',
    text : 'Earn up to 12%',
    icon : plan,
    className : 'first'
  },
  {
    id : 2,
    title : 'Invest in a Female Farmer',
    text : 'Get up to 25% returns per anum',
    icon : farmer,
    className : 'second'
  },
  {
    id : 3,
    title : 'Invite your girls to HerVest',
    text : 'Share you girl code.',
    icon : girls,
    className : 'third',
    code : 'HG7FIB',
    share : 'Share'
  }
]
