import { ContainerProps } from "./types";

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};
