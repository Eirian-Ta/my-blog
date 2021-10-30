import React, { ReactNode } from 'react';

type IFooterBlockProps = {
  title: string;
  children: ReactNode;
};

const FooterBlocks = (props: IFooterBlockProps) => (
  <div className="p-5">
    <div className="text-gray-500">{props.title}</div>
    {props.children}
  </div>
);

export { FooterBlocks };
