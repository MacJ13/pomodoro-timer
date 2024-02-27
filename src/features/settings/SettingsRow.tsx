import styled from "styled-components";
import { RowProps } from "../../utils/types/types";
import { Flex } from "src/components/styles/Flex.styled";

const SettingsRow = ({ title, children }: RowProps) => {
  return (
    <Row>
      <Flex $align="flex-start" $justify="space-between">
        <Title>{title}</Title>
        {children}
      </Flex>
    </Row>
  );
};

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.black0375};
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Row = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: ${({ theme }) => theme.borders.greySlim};
`;

export default SettingsRow;
