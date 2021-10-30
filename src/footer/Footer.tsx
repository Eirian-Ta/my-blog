import React, { ReactNode } from 'react';

import { Config } from '../utils/Config';

type IFooterProps = {
  children: ReactNode;
};

const Footer = (props: IFooterProps) => (
  <div className="w-full bg-dark-bg-lighter">
    <footer className="max-w-screen-xl py-12 mx-auto text-white">
      {props.children}

      <div className="text-center text-gray-500 text-sm mt-12 px-5">
        {`© Copyright ${new Date().getFullYear()} ${Config.site_name}. All Rights Reserved.`}
      </div>
    </footer>
  </div>
);

export { Footer };
