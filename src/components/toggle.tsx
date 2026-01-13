import type { KeyboardEvent } from "react";

interface ToggleProps {
  value: boolean;
  onChange: (nextValue: boolean) => void;
  disabled?: boolean;
  label?: string;
}

const Toggle = ({ value, onChange, disabled = false, label }: ToggleProps) => {
  const handleToggle = () => {
    if (disabled) return;
    onChange(!value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`toggle-wrapper ${disabled ? "disabled" : ""}`}>
      {label && <span className="toggle-label">{label}</span>}

      <button
        type="button"
        role="switch"
        aria-checked={value}
        aria-disabled={disabled}
        className={`toggle ${value ? "on" : "off"}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      >
        <span className="thumb" />
      </button>
    </div>
  );
};

export default Toggle;
