import React, { useState } from "react";
import { Text, Button } from "react-native";

const App = () => {
  let [counter, setCounter] = useState("0/10");
  return (
    <>
      <Button
        title="counter"
        onPress={() => {
          if (counter < 10) {
            setCounter((prev) => prev + 1);
          } else {
            setCounter(0);
          }
        }}
      />
      <Text>{counter}</Text>//addded
    </>
  );
};

export default App;
//for practice