import Link from "next/link";

export default function MainLeft() {
  return (
    <>
      <div className="left h-full w-[10%]">
        <nav className="h-full">
          <ul className="h-full flex flex-col gap-20 justify-end p-10 items-center">
            <li>
              <Link href="#">
                <div className="transform -rotate-90 hover:text-primary/80">about.</div>
              </Link>
            </li>
            <li>
              <Link href="/pages/projects">
                <div className="transform -rotate-90 hover:text-primary/80">projects.</div>
              </Link>
            </li>
            <li>
              <Link href="/pages/resume">
                <div className="transform -rotate-90 hover:text-primary/80">resume.</div>
              </Link>
            </li>
            <li>
              <Link href="/pages/contact">
                <div className="transform -rotate-90 hover:text-primary/80">contact.</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
