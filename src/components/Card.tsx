import { useState, type MouseEvent } from "react";
import GlowingDot from "./GlowingDot";
import { useTranslation } from "react-i18next";

function Card({
  title,
  desc,
  image,
  imageName,
  imageAlt,
  requestUrl,
  onGenerateImage,
  onDownloadImage,
}: {
  title: string;
  desc: string;
  image: string | null;
  imageName: string;
  imageAlt: string;
  requestUrl: string;
  onGenerateImage: (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>,
    requestUrl: string,
  ) => void;
  onDownloadImage: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const [dx] = useState(() => Math.floor(Math.random() * 10) + 2);
  const [dy] = useState(() => Math.floor(Math.random() * 2) + 2);
  const [duration] = useState(() => Math.floor(Math.random() * 2 + 2));
  const [textColor, setTextColor] = useState("text-(--coolor-blue-light)");
  const [width] = useState(() => 5);
  const signX = 1;
  const signY = -1;
  const color = "bg-cyan-400";
  const shadow = "#00f5ff";

  const { t } = useTranslation();

  function handleDotClick() {
    setTextColor(
      textColor === "text-(--coolor-blue-light)"
        ? "text-cyan-400"
        : "text-(--coolor-blue-light)",
    );
    return;
  }

  return (
    <>
      <div
        className={`
            w-100 h-full p-5
            flex flex-col gap-5 justify-evenly
            rounded-xl 
            text-md ${textColor} 
            shadow-[0_0_15px_rgba(0,0,0,0.4)]
        `}
        title={title}
      >
        <div className="flex gap-5">
          <h2 className="text-lg">{title}</h2>
          <GlowingDot
            dotWidth={width}
            dotColor={color}
            dotShadow={shadow}
            dx={dx}
            dy={dy}
            duration={duration}
            signX={signX}
            signY={signY}
            onDotClick={handleDotClick}
          />
        </div>
        <p className={`text-sm ${textColor}`}>{desc}</p>
        <button
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            onGenerateImage(event, requestUrl)
          }
          className="
            rounded-xl 
            shadow-[0_0_15px_rgba(0,0,0,0.4)]
            hover-glow
            py-4
            px-8
            bg-black
            cursor-pointer
            "
        >
          {t("actions.generateImage")}
        </button>
        {image && (
          <div className="flex flex-col gap-5">
            <img src={image} alt={imageAlt} className="w-100 rounded-xl" />
            <a
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                onDownloadImage(event)
              }
              href={image}
              download={`${imageName}.png`}
              className="text-center 
                rounded-xl 
                shadow-[0_0_15px_rgba(0,0,0,0.4)]
                hover-glow
                py-4
                px-8
              bg-black
                cursor-pointer
              "
            >
              {t("actions.downloadImage")}
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
