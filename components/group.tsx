import React, { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

import { Error } from "./error";
import { classNames } from "@/libs";

export interface GroupProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "prefix"> {
  name: string;
  error?: string;
  label?: string;
  disabled?: boolean;
  children?: any;
  withFormik?: boolean;
  errorClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  containerPlacementClass?: string;
  required?: boolean;
}

export function Group({
  name,
  error,
  label,
  children,
  disabled,
  withFormik,
  errorClassName,
  labelClassName,
  wrapperClassName,
  containerClassName,
  containerPlacementClass,
  required,
  ...props
}: GroupProps) {
  return (
    <StyledGroup className={classNames(wrapperClassName)} {...props}>
      {label && (
        <label
          htmlFor={name}
          className={classNames(
            "text-xs mb-1 font-medium block",
            labelClassName
          )}
        >
          {label}{" "}
          {required && <span className="text-danger-main text-error">*</span>}
        </label>
      )}
      <StyledContainer
        disabled={disabled}
        className={classNames(
          "rounded-md",
          containerPlacementClass ?? "flex gap-2 items-center",
          "transition ease-in-out duration-150",
          "border border-black",
          "focus-within:border-primary",
          disabled && "bg-neutral-50",
          containerClassName
        )}
      >
        {children && (
          <>
            {React.Children.map(
              children,
              (child) =>
                child && React.cloneElement(child, { ...child.props, disabled })
            )}
          </>
        )}
      </StyledContainer>
      <Error
        className={classNames(`field-error`, errorClassName)}
        {...{ name, error, withFormik }}
      />
    </StyledGroup>
  );
}

/**
 * styles
 */
const StyledContainer = styled.div<{
  disabled?: boolean;
}>`
  min-height: 3rem;
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-neutral-50)" : "#fff"};
  ${({ disabled }) => disabled && `pointer-events: none;`};
`;

const StyledGroup = styled.div`
  margin-bottom: 1.5rem;

  &:has(small.field-error) {
    & > div {
      border-color: rgba(var(--color-red-600-rgb), 1);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
