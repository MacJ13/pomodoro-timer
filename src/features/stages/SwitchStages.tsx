import { useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import styled from "styled-components";

const SwitchStages = () => {
  const stages = useSelector(selectAllStages);

  const buttonStages = stages.map((stage) => (
    <Button key={stage.id}>{stage.name}</Button>
  ));

  return <Wrapper>{buttonStages}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1.25rem 0;
  margin: 1rem 0;
`;

const Button = styled.button`
  width: 7.5rem;
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  background-color: rgba(255, 255, 255, 0.25);
  font-weight: 600;
  color: #fff;
`;

export default SwitchStages;
