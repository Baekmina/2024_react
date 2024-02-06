import React from "react";

// export default function Tabs({ buttons, buttonsContainer, children }) {
// export default function Tabs({ buttons, ButtonsContainer, children }) {
export default function Tabs({ buttons, ButtonsContainer = "menu", children }) {
  // const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
