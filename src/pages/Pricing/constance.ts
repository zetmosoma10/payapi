import iconCheck from "../../assets/shared/desktop/icon-check.svg";

export const cardsData = [
  {
    heading: "Free Plan",
    headerText:
      "Build and test using our core set of products with up to 100 API requests ",
    price: "$0.00",
    icon: iconCheck,
    list: [
      { checked: true, item: "Transactions" },
      { checked: true, item: "Auth" },
      { checked: true, item: "Identity" },
      { checked: false, item: "Investments" },
      { checked: false, item: "Assets" },
      { checked: false, item: "Liabilities" },
      { checked: false, item: "Income" },
    ],
  },
  {
    heading: "Basic Plan",
    headerText:
      "Launch your project with unlimited requests and no contractual minimums ",
    price: "$249.00",
    icon: iconCheck,
    list: [
      { checked: true, item: "Transactions" },
      { checked: true, item: "Auth" },
      { checked: true, item: "Identity" },
      { checked: true, item: "Investments" },
      { checked: true, item: "Assets" },
      { checked: false, item: "Liabilities" },
      { checked: false, item: "Income" },
    ],
  },
  {
    heading: "Premium Plan",
    headerText:
      "Get tailored solutions, volume pricing, and dedicated support for your team ",
    price: "$499.00",
    icon: iconCheck,
    list: [
      { checked: true, item: "Transactions" },
      { checked: true, item: "Auth" },
      { checked: true, item: "Identity" },
      { checked: true, item: "Investments" },
      { checked: true, item: "Assets" },
      { checked: true, item: "Liabilities" },
      { checked: true, item: "Income" },
    ],
  },
];
