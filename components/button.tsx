import { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import { Spinner } from "./icons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, isSubmitting = false, ...props }, ref) => {
    /**
     * variables
     */
    disabled = (() => {
      if (isSubmitting) {
        return true;
      }
      return disabled;
    })();

    return (
      <StyledButton ref={ref} {...{ disabled, ...props }}>
        {isSubmitting ? <Spinner /> : ""}
        <div className="flex items-center gap-2">{children}</div>
      </StyledButton>
    );
  }
);

/**
 * styles
 */
const StyledButton = styled.button`
  outline: 0;
  gap: 0.5rem;
  height: 3rem;
  display: flex;
  user-select: none;
  font-weight: 500;
  white-space: nowrap;
  align-items: center;
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  justify-content: center;

  border-width: 1px;
  border-color: transparent;

  &:disabled {
    pointer-events: none;
  }

  &:active {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
  }
`;
