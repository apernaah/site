import { useRef } from "react";
 import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import { useIsomorphicLayoutEffect } from "../utils";
@@ -48,74 +48,77 @@
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
    <div 
      className={`relative min-h-screen w-full bg-cover bg-center bg-no-repeat tablet:bg-fixed bg-[url('/light-bg.jpg')] dark:bg-[url('/dark-bg.jpg')] ${data.showCursor && "cursor-none"}`}
    >
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h2
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h2>
            <h3
              ref={textThree}
              className="text-6xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h3>
            <h3
              ref={textFour}
              className="text-6xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h3>
            <h3
              ref={textFive}
              className="text-6xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFive}
            </h3>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
