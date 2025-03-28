export default function Home() {
  return (
    <>
      <div className="contain w-screen h-screen p-10 overflow-x-hidden">
        <div className="topbar flex items-center justify-between">
          <div className="title font-bold text-4xl w-[10%] flex justify-center">am.</div>
          <div className="available">available</div>
        </div>
        <div className="mainbody flex w-full h-[95%]">
          <div className="left h-full w-[10%]">
            <nav className="h-full">
              <ul className="h-full flex flex-col gap-20 justify-end p-10 items-center">
                <li>
                  <a href="#">
                    <div className="transform -rotate-90 ">first</div>
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <div className="transform -rotate-90 ">second</div>
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <div className="transform -rotate-90 ">third</div>
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <div className="transform -rotate-90 ">fourth</div>
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
          <div className="center text-5xl font-bold w-[80%] flex items-center justify-center">front-end-web(developer)__</div>
          <div className="right w-[10%]">right</div>
        </div>
      </div>
    </>
  );
}
