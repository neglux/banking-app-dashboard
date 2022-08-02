import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TbZoomMoney } from "react-icons/tb";

export default {
  navbar: {
    welcomeMsg: "Welcome back,",
    logoutBtnText: "Log Out",
  },
  loginForm: {
    title: "welcome",
    loginMsg: "Login to get started",
    loginBtnText: "Log In",
  },
  menu: {
    sections: [
      { icon: <MdSpaceDashboard />, text: "Dashboard" },
      { icon: <FaMoneyCheckAlt />, text: "Transfer" },
      { icon: <TbZoomMoney />, text: "Loan" },
    ],
  },
  dashboard: {
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
  dialogs: {
    loginSuccess: "successfully logged in",
    transferSuccess: "transfer done",
    transferFail: "invalid transfer",
    loanSuccess: "loan approved! check your account",
    loanFail: "we're sorry, you cannot request that loan amount",
    cookie: {
      title: "we value your privacy",
      text: "this website would collect cookies to deliver better user experience if it were real website",
      agree: "accept all",
      decline: "refuse non-essential cookies",
    },
  },
};
