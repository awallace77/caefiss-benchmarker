import { useState, type ChangeEvent, type MouseEvent } from "react";
import Header from "./components/Header";
import FileInput from "./components/FileInput";
import Card from "./components/Card";
import Alert from "./components/Alert";
import { useTranslation } from "react-i18next";
import {
  ALERT_PRESETS,
  type AlertColor,
  type AlertType,
} from "./types/AlertType";
import LocaleSwitch from "./components/LocaleSwitch";

type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

function App() {
  const [alerts, setAlerts] = useState<AlertType[]>([]);
  const [jsonFile, setJsonFile] = useState<JSONValue | null | undefined>(null);
  const [image, setImage] = useState<string | null>(null);
  const requestUrl = "https://caefiss-benchmarker-backend.vercel.app";
  const { t } = useTranslation();

  if (!t) return <div className="w-full">Loading...</div>;

  /**
   * Handles file input change
   * @param event
   */
  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    event.stopPropagation();
    setJsonFile(null);
    setImage(null);
    const file = event.target.files?.[0];
    if (!file) return;

    // JSON only
    if (file.type !== "application/json") {
      handleAlert(
        ALERT_PRESETS.warning.color,
        ALERT_PRESETS.warning.bgColor,
        t("warning.fileType"),
      );
      setJsonFile(undefined);
      return;
    } else {
      try {
        // Read file as text
        const text = await file.text();
        const json = JSON.parse(text);
        setJsonFile(json);
        handleAlert(
          ALERT_PRESETS.success.color,
          ALERT_PRESETS.success.bgColor,
          t("success.upload"),
        );
      } catch (err: unknown) {
        console.error(err);
        handleAlert(
          ALERT_PRESETS.danger.color,
          ALERT_PRESETS.danger.bgColor,
          t("errors.error"),
        );
      }
    }
  }

  /**
   * Makes POST request to create the image
   * @param file the JSON file to send in the request
   * @param requestUrl the POST request url
   */
  async function createImage(jsonData: JSONValue, requestUrl: string) {
    try {
      // Send POST request
      const res = await fetch(requestUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to generate chart");
      }

      const data = await res.json();

      // Convert base64 to image source
      setImage(`data:image/png;base64,${data.image}`);
      handleAlert(
        ALERT_PRESETS.success.color,
        ALERT_PRESETS.success.bgColor,
        t("success.generated"),
      );
    } catch (err: unknown) {
      console.error(err);
      handleAlert(
        ALERT_PRESETS.danger.color,
        ALERT_PRESETS.danger.bgColor,
        t("errors.error"),
      );
      throw new Error("Error creating image");
    }
  }

  /**
   * Handles the alert indicator
   * @param color the text color
   * @param bgColor the background color
   * @param message the message of the alert
   */

  function handleAlert(
    color: AlertColor,
    bgColor: AlertColor,
    message: string,
  ) {
    const id = Date.now(); // Unique ID for this specific alert

    const newAlert = { id, color, bgColor, message };

    // Add the new alert to the list
    setAlerts((prev) => [...prev, newAlert]);

    // Remove ONLY this alert after 3 seconds
    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 3000);
  }

  function showAlert(color: AlertColor, bgColor: AlertColor, message: string) {
    const id = Date.now(); // Unique ID for this specific alert
    const newAlert = { id, color, bgColor, message };
    setAlerts((prev) => [...prev, newAlert]);

    return id;
  }

  function hideAlert(id: number) {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }

  /**
   * Notifies the user of the download
   */
  function handleDownloadImage(event: MouseEvent<HTMLAnchorElement>) {
    // event.preventDefault();
    event.stopPropagation();
    handleAlert(
      ALERT_PRESETS.info.color,
      ALERT_PRESETS.info.bgColor,
      t("info.download"),
    );
  }

  /**
   * Triggers the image generation request
   * @param requestUrl
   */
  function handleGenerateImage(
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>,
    requestUrl: string,
  ) {
    event.preventDefault();
    event.stopPropagation();
    if (jsonFile === null) {
      handleAlert(
        ALERT_PRESETS.danger.color,
        ALERT_PRESETS.danger.bgColor,
        t("errors.noFile"),
      );

      return;
    } else if (jsonFile === undefined) {
      handleAlert(
        ALERT_PRESETS.warning.color,
        ALERT_PRESETS.warning.bgColor,
        t("warning.fileType"),
      );
      return;
    }

    const alertId = showAlert(
      ALERT_PRESETS.info.color,
      ALERT_PRESETS.info.bgColor,
      t("info.generated"),
    );

    createImage(jsonFile, requestUrl).then(() => {
      hideAlert(alertId);
    });
  }

  return (
    <>
      <div
        id="main-container"
        className="flex flex-col w-full h-screen p-5 gap-10"
      >
        <div
          id="locale-switch-container"
          className="w-full flex justify-center"
        >
          <LocaleSwitch />
        </div>
        <div
          id="header-container"
          className="w-full flex flex-col gap-3 justify-center"
        >
          <Header />
        </div>
        <div
          id="input-container"
          className="w-full flex justify-center items-center"
        >
          <div className="w-100">
            <FileInput
              id="file-input"
              accessibleLabel={t("general.fileInputLabel")}
              label={t("general.fileInputLabel")}
              type="file"
              key="file-input"
              onChange={handleFileChange}
              hideLabel={true}
            />
          </div>
        </div>
        <div
          id="gallery-container"
          className="flex flex-row gap-5 w-full justify-center"
        >
          <Card
            title={t("generatorTypes.storyPoints")}
            desc={t("generatorTypes.storyPointsDesc")}
            imageAlt={t("generatorTypes.storyPointsImgAlt")}
            image={image}
            imageName={t("generatorTypes.storyPointsImgName")}
            onDownloadImage={handleDownloadImage}
            onGenerateImage={handleGenerateImage}
            requestUrl={`${requestUrl}/generate_chart`}
          />
        </div>
        <div className="alert-container w-full flex flex-col justify-center items-center">
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              color={alert.color}
              bgColor={alert.bgColor}
              message={alert.message}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
