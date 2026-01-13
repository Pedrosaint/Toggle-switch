import { useEffect, useState } from "react";
import Toggle from "./toggle";

const STORAGE_KEY = "enable_notifications";

const SettingsPage = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (storedValue !== null) {
      setEnabled(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enabled));
  }, [enabled]);

  return (
    <div className="settings-page">
      <div className="settings-card">
        <div className="settings-header">
          <div>
            <p className="eyebrow">Preferences</p>
            <h2>Notifications</h2>
            <p className="subtitle">
              Choose whether you want to stay in the loop with updates.
            </p>
          </div>
          <span className={`status-pill ${enabled ? "on" : "off"}`}>
            {enabled ? "Live" : "Muted"}
          </span>
        </div>

        <div className="settings-row">
          <div>
            <p className="row-title">Enable notifications</p>
            <p className="row-description">
              Toggle to receive alerts about new activity.
            </p>
          </div>
          <Toggle label="" value={enabled} onChange={setEnabled} />
        </div>

        <div className="settings-footer">
          <p className="status-text">
            Notifications are{" "}
            <strong className={enabled ? "text-success" : "text-muted"}>
              {enabled ? "ON" : "OFF"}
            </strong>
          </p>
          <button
            type="button"
            className="ghost-button"
            onClick={() => setEnabled(!enabled)}
          >
            {enabled ? "Turn off" : "Quick enable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
