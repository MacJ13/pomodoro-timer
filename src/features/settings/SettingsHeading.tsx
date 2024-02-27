import styled from "styled-components";
import { ChildrenProps } from "../../utils/types/types";
import { Flex } from "src/components/styles/Flex.styled";

type SettingsHeadingProps = {
  title: string;
} & ChildrenProps;

const SettingsHeading = ({ title, children }: SettingsHeadingProps) => {
  return (
    <Heading>
      <Flex $justify="space-between">
        <h2>{title}</h2>
        {children}
      </Flex>
    </Heading>
  );
};

const Heading = styled.div`
  border-bottom: ${({ theme }) => theme.borders.greySlim};
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
`;

export default SettingsHeading;
