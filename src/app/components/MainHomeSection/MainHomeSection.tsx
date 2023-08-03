import { FC } from "react";
import mainHomeClassNames from "./mainHomeClassNames";
import Link from "next/link";
import Image from "next/image";

const MainHomeSection: FC<{ showLink?: boolean }> = (props) => {
  const { showLink } = props;

  return (
    <section className={mainHomeClassNames.hero}>
      <div className={mainHomeClassNames.grid}>
        <div className={mainHomeClassNames.content}>
          <h1 className={mainHomeClassNames.heading}>Brandon&apos;s Tech</h1>
          <h1 className={mainHomeClassNames.ctaText}>PC Builds & More</h1>
          <p className={mainHomeClassNames.paragraph}>
            Power, Performance, and Play with our Custom Collection of PC Builds
          </p>
          {showLink && (
            <div className="mt-8 sm:mt-10 rounded">
              <Link
                href="#recent-products"
                className={mainHomeClassNames.button}
              >
                Find Products
              </Link>
            </div>
          )}
        </div>

        <div className={mainHomeClassNames.imageContainer}>
          <Image
            src="https://i.ibb.co/LZftDhj/IMG-3108.jpg"
            alt="PC Build"
            className={mainHomeClassNames.image}
            width={400}
            height={400}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MainHomeSection;
