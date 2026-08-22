import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import { useTranslation } from "react-i18next";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/anime";

const Model = () => {
  const { t } = useTranslation();
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const smallRotation = useRef(0);
  const largeRotation = useRef(0);

  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    timeline.current.clear();

    if (size === "large") {
      animateWithGsapTimeline(
        timeline.current,
        small,
        smallRotation.current,
        "#view1",
        "#view2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        },
      );
    }

    if (size === "small") {
      animateWithGsapTimeline(
        timeline.current,
        large,
        largeRotation.current,
        "#view2",
        "#view1",
        {
          transform: "translateX(0)",
          duration: 2,
        },
      );
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
    gsap.to("#modals", {
      scrollTrigger: {
        trigger: "#modals",
        start: "top 50%",
        toggleActions: "play none none none",
      },
      opacity: 1,
    });
  }, []);

  return (
    <section id="modals" className="common-padding opacity-0">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          {t("clok")}
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={(rotation) => {
                smallRotation.current = rotation;
              }}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={(rotation) => {
                largeRotation.current = rotation;
              }}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item) => (
                  <li key={item.id} className="mx-2">
                    <button
                      type="button"
                      aria-label={`Select ${item.title}`}
                      className="w-6 h-6 rounded-full cursor-pointer"
                      style={{ backgroundColor: item.color[0] }}
                      onClick={() => setModel(item)}
                    />
                  </li>
                ))}
              </ul>

              <div className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={size === value}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
