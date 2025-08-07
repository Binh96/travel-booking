import ButtonComponent from "../components/button/ButtonComponent";

const MainPageComponent = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <ButtonComponent label="Click Me 1" onClick={() => alert("Button 1 clicked!")}></ButtonComponent>
      <ButtonComponent 
        label="Click Me 2" 
        onClick={() => alert("Button 2 clicked!")}
        backgroundColor="blue"
        color="white"
        borderRadius="5px"
      >
      </ButtonComponent>
      <ButtonComponent 
        label="Click Me 3" 
        onClick={() => alert("Button 3 clicked!")}
        backgroundColor="red"
        color="white"
        borderRadius="32px"
      >
      </ButtonComponent>
    </div>
  );
}

export default MainPageComponent;