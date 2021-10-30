import React, { ReactNode, useState } from 'react';

import Link from 'next/link';

import { Footer } from '../footer/Footer';
import { FooterBlocks } from '../footer/FooterBlocks';
import { FooterIconList } from '../footer/FooterIconList';
import { FooterLinks } from '../footer/FooterLinks';
import { FooterThreeColumns } from '../footer/FooterThreeColumns';
import { Navbar } from '../navigation/Navbar';

type IMainProps = {
  meta: ReactNode;
  hero: ReactNode;
  children: ReactNode;
};

export interface Theme {
  value1: string;
  value2: string;
}

const Base = (props: IMainProps) => {
  const [theme, setTheme] = useState('');

  return (
    <div className={`antialiased w-full text-gray-300 ${theme}`}>
      {props.meta}

      <Navbar theme={theme} setTheme={setTheme}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/about/">
            <a>About</a>
          </Link>
        </li>
      </Navbar>

      {props.hero}

      {props.children}

      <Footer>
        <FooterThreeColumns
          block2={(
            <FooterBlocks title="All Reviews">
              <FooterLinks>
                <li>
                  <Link href="/">
                    <a>Manga</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Movie</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Music</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Others</a>
                  </Link>
                </li>
              </FooterLinks>
            </FooterBlocks>
        )}
          block3={(
            <FooterBlocks title="Miscellaneous">
              <FooterLinks>
                <li>
                  <Link href="/">
                    <a>Fiction</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Poem</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Psychics</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Others</a>
                  </Link>
                </li>
              </FooterLinks>
            </FooterBlocks>
        )}
        >
          <FooterBlocks title="About me">
            <div>
              / Bạch Tư Viên @ vnfiction / Developer / Wiccan /
            </div>

            <FooterIconList />
          </FooterBlocks>
        </FooterThreeColumns>
      </Footer>
    </div>
  );
};

export { Base };
