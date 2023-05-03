import * as React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light sm:text-base">
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6hi">
          <span  >{new Date().getFullYear()}&copy; All Rights Reserved</span>
          <div  >
            Built with heart by
          <span className="text-primary ml-1 dark:text-secondary">MS</span>
          </div>
        
        </Layout>
      </footer>
    </>
  );
}

export default Footer;
