import React, { ReactNode } from 'react';

type IFooterLinksProps = {
  children: ReactNode;
};

const FooterLinks = (props: IFooterLinksProps) => (
  <ul className="footer-links mt-3">
    {props.children}

    <style jsx>
      {`
        .footer-links :global(li) {
          @apply mb-1;
        }

        .footer-links :global(a:hover) {
          @apply text-blue-600;
        }
      `}
    </style>
  </ul>
);

export { FooterLinks };
