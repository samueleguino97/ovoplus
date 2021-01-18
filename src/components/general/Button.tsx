import React from "react";

type ButtonProps = React.HTMLProps<HTMLButtonElement> &
  React.HTMLProps<HTMLDivElement> & {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    leftIcon?: string | React.ReactNode;
    rightIcon?: string | React.ReactNode;
    variant?: "danger" | "default";
  };

function Button({
  children,
  leftIcon,
  rightIcon,
  variant,
  onClick,
  ...buttonProps
}: ButtonProps) {
  return (
    <div
      style={{
        backgroundColor: variant === "danger" ? "RED" : "",
      }}
      onClick={onClick}
    >
      {leftIcon && leftIcon}
      <button
        {...buttonProps}
        style={{
          ...buttonProps.style,
          width: "100%",
        }}
      >
        {children}
      </button>
      {rightIcon && rightIcon}
    </div>
  );
}

export default Button;
