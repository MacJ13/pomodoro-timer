import styled from "styled-components";
import CloseSvg from "../../assets/icons/close.svg?react";

const Settings = () => {
  return (
    <Modal>
      <Content>
        <SettingsBar>
          <Title>Settings</Title>
          <CloseButton>
            <CloseSvg />
          </CloseButton>
        </SettingsBar>
        <div></div>
      </Content>
    </Modal>
  );
};

const CloseButton = styled.button`
  position: relative;
  height: 1.25rem;
  width: 1.25rem;
  fill: rgba(0, 0, 0, 1);
  background: none;

  opacity: 0.25;

  transition: opacity 0.375s;

  &:hover {
    opacity: 0.375;
  }
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.375);
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const SettingsBar = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 1rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);

  z-index: 5;
`;

const Content = styled.div`
  position: relative;
  background-color: white;
  border-radius: 0.75rem;
  color: grey;
  width: 100%;
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem 1.5rem;
`;

export default Settings;
