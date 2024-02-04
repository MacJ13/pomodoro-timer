import styled from "styled-components";
import { ChildrenProps } from "../../types/types";

type SettingsHeadingProps = {
  title: string;
} & ChildrenProps;

const SettingsHeading = ({ title, children }: SettingsHeadingProps) => {
  return (
    <Heading>
      <Title>{title}</Title>
      {children}
    </Heading>
  );
};

const Heading = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.375);
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default SettingsHeading;
