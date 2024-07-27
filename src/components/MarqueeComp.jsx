import { cn } from "../libs/utils";
import Marquee from "../components/MarqueeMagicUI";
import Adidas from "../assets/adidas.svg"
import Puma from "../assets/puma-logo.svg"
import Forever21 from "../assets/forever-21-logo-1.svg"
import Levis from "../assets/levis-1.svg"
import Hollister from "../assets/hollister-california.svg"
import Nautica from "../assets/nautica-2.svg"
import Nike from "../assets/nike-11.svg"
import RalphLaurenPolo from "../assets/ralphlauren.svg"
import OlvNavy from "../assets/old-navy.svg"
import Under from "../assets/under-armour-logo.svg"

const reviews = [
  {
    name: "Adidas",
    img: Adidas,
  },
  {
    name: "Puma",
    img: Puma,
  },
  {
    name: "Forever 21",
    img: Forever21,
  },
  {
    name: "Levi's",
    img: Levis,
  },
  {
    name: "Hollister",
    img: Hollister,
  },
  {
    name: "Nautica",
    img: Nautica,
  },
  {
    name: "OlvNavy",
    img: OlvNavy,
  },
  {
    name: "RalphLaurenPolo",
    img: RalphLaurenPolo,
  },
  {
    name: "Under Armour",
    img: Under,
  },
  {
    name: "Nike",
    img: Nike,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name
}) => {
  return (
    <figure
      className={cn(
        "relative size-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
        <img className="h-full w-full max-w-full rounded-lg object-contain" alt={'logo de ' + name} src={img} />
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="w-full relative flex h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
