const headerClassNames = {
  header: "fixed w-full top-0 left-0 z-20 bg-white text-black",
  container: "container mx-auto py-4 px-6 flex items-center justify-between",
  logoContainer: "flex items-center",
  logo: "font-bold text-xl hover:text-primary-light",
  nav: "",
  ul: "flex space-x-6",
  li: "",
  link: "hover:text-primary-light relative",
  cart: "absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -right-2",
  contactUs: "px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  orders: "px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  signupBtn:
    "bg-primary-primarydark mr-4 hover:bg-primary-primarylight text-white font-bold py-2 px-4 rounded",
  signinBtn:
    "bg-primary-primarydark flex hover:bg-primary-primarylight text-white font-bold py-2 px-4 rounded",
  logoutBtn:
    "bg-primary-primarydark ml-4 flex hover:bg-primary-primarylight text-white font-bold py-2 px-4 rounded",
};

export default headerClassNames;
