import { Navbar } from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const BlackII6KAppleID = "/assets/images/BlackII6KAppleID.png";

export const AppleID = () => {
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.to(".g_fade", { opacity: 1, delay: 0.3, duration: 1, stagger: 0.2 });
    gsap.to(".g_grow", { opacity: 1, y: -20, delay: 1 });
  }, []);

  return (
    <>
      <Navbar />
      <section className="w-full nav-height">
        <div className="w-full flex-center flex-col">
          <div className="w-screen flex flex-col justify-center items-center">
            <div className="flex justify-center opacity-0 g_fade">
              <img src={BlackII6KAppleID} width={650} height={500} alt="" />
            </div>

            <div className="flex justify-center items-center flex-col p-10 opacity-0 g_fade">
              <h1 className="text-2xl text-center text-gray-100 pb-8 md:text-xl md:w-10/12 w-9/12">
                {t("oneacc")}
              </h1>
              <p className="text-sm text-center w-10/12 text-gray-200 opacity-0 g_fade">
                {t("oneaccinfo")}
              </p>
            </div>

            <div className="g_grow flex justify-center items-center translate-y-20 opacity-0">
              <button className="btn flex justify-center items-center">
                {t("oneaccbtn")}
              </button>
            </div>
          </div>

          {/* Info boxes */}
          <div className="common-padding w-full flex flex-col items-center lg:flex-row justify-evenly">
            <div className="bg-zinc w-9/12 rounded-3xl p-5 mb-20 lg:mb-0 lg:w-[40%]">
              <h2 className="p-3 text-3xl">{t("box1h")}</h2>
              <p className="p-5">{t("box1p")}</p>
            </div>
            <div className="bg-zinc w-9/12 rounded-3xl p-5 mb-20 lg:mb-0 lg:w-[40%]">
              <h2 className="p-5 text-3xl">{t("box2h")}</h2>
              <p className="p-5">{t("box2p")}</p>
            </div>
          </div>

          {/* FAQ section */}
          <div className="common-padding flex flex-col justify-start items-center bg-zinc">
            <div className="lg:h-[63vh] w-9/12 flex justify-start items-start flex-col">
              <div>
                <h2 className="p-2 text-2xl">{t("qh1")}</h2>
                <p className="text-md p-3 text-gray-100">{t("ap1")}</p>
              </div>
              <div>
                <h2 className="p-2 text-2xl">{t("qh2")}</h2>
                <p className="text-md p-3 text-gray-100">{t("ap2")}</p>
              </div>
              <div>
                <h2 className="p-2 text-2xl">{t("qh3")}</h2>
                <p className="text-md p-3 text-gray-100">{t("ap3")}</p>
              </div>
              <p className="text-md p-3 text-blue cursor-pointer">{t("faq")}</p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
