export default {
  navbar: {
    loginMsg: "Login to get started",
    loginBtnText: "Log In",
    welcomeMsg: "Welcome back,",
    logoutBtnText: "Log Out",
  },
  menu: {
    sections: ["Dashboard", "Transfer", "Loan", "Options"],
  },
  dashboard: {
    containerRate: {
      title: "Currency Rates",
    },
    containerMovement: {
      title: "Movements",
      dateFormat: {
        today: "today",
        yesterday: "yesterday",
        day: "days ago",
        week: "a week ago",
      },
    },
    containerBalance: {
      title: "Balance",
    },
  },
  transfer: {
    form: {
      senderLabelText: "sender",
      receiverLabelText: "receiver",
      amountLabelText: "amount",
      currencyLabelText: "currency",
      dateLabelText: "date",
      feeLabelText: "fee",
      sendBtn: "Send",
    },
    dropdownText: "Choose One",
  },
  loan: {
    loanConditionText:
      "You can request a loan up to 10% more than the maximum value of the last month's deposit transactions.",
    loanReviewText:
      "Once the loan request arrives, it takes some time to review.",
    loanApprovalText: "We will get back to you in",
    loanApprovalTime: "30",
    loanApprovalTimeUnit: "s",
    amountLabelText: "amount",
    approvalBtnText: "Send to Approval",
  },
};
