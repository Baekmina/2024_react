import TabButton from "./TabButton";

// export default function Tabs({ buttons, buttonsContainer, children }) {
export default function Tabs({ buttons, ButtonsContainer, children }) {
  // const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
