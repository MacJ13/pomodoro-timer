import styled from "styled-components";

import { RowProps } from "../../types/types";

const SettingsRow = ({ title, children }: RowProps) => {
  return (
    <Row>
      <RowTitle>{title}</RowTitle>
      {children}
    </Row>
  );
};

const RowTitle = styled.h2`
  color: rgba(0, 0, 0, 0.375);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export default SettingsRow;
