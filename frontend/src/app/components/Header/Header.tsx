"use client";

import Link from "next/link";
import headerClassNames from "./headerClassNames";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppDispatch } from "@/hooks/storeHook";
import { toggleCart } from "@/redux/features/cartSlice";
import useCartTotals from "@/hooks/useCartTotals";
import Signup from "../Signup/Signup";
import { useState } from "react";

const Header = () => {
  const {
    header,
    container,
    li,
    logoContainer,
    link,
    logo,
    nav,
    ul,
    orders,
    contactUs,
    signupBtn,
    signinBtn,
    logoutBtn,
    cart,
  } = headerClassNames;

  const [isSignupFormOpen, setIsSignUpFormOpen] = useState(false);

  const { totalQuantity } = useCartTotals();

  const dispatch = useAppDispatch();

  const toggleForm = () => {
    setIsSignUpFormOpen(!isSignupFormOpen);
  };

  return (
    <>
      <Signup isSignupFormOpen={isSignupFormOpen} toggleForm={toggleForm} />
      <header className={header}>
        <div className={container}>
          <Link href="/" className={logoContainer}>
            <h1 className={logo}>Logo</h1>
          </Link>

          <nav className={nav}>
            <ul className={ul}>
              <li>
                <button onClick={() => dispatch(toggleCart())} className={link}>
                  <span>
                    Cart
                    <AiOutlineShoppingCart className="inline-block text-3xl" />
                  </span>
                  <div className={cart}>{totalQuantity}</div>
                </button>
              </li>

              <li className="flex items-center justify-center h-7">
                <Link href="/orders" className={orders}>
                  Orders
                </Link>
                <button className={logoutBtn}>Logout</button>
                <button className={signinBtn} onClick={toggleForm}>
                  Sign Up
                </button>
                <button className={signinBtn}>Sign In</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
