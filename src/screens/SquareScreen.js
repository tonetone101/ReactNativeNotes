import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
// a reducer is a function that manages changes to an Object

const COLOR_INCREMENT = 15;

//reducer function
// action === how to change state object/ {colorToCHange: 'red' || "green" || "blue" amount: 15 || -15 }
// state === { red: 0, green: 0, blue: 0}
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      // never modify state value directly like state.red
      //  make a new state object and overwrite the existing property
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // state without reducer
  // state value is color based on RGB
  //  const [red, setRed] = useState(0);
  //  const [green, setGreen] = useState(0);
  //  const [blue, setBlue] = useState(0);

  // logic so RGB doesnt go past 255 or below 0
  // setColor written in switch statement without reducer
  //  const setColor = (color, change) => {
  //    // color === 'red', 'green', 'blue'
  //    // change === +15, -15
  //    switch (color) {
  //      case "red":
  //        red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //        return;

  //      case "green":
  //        green + change > 255 || green + change < 0
  //          ? null
  //          : setGreen(green + change);
  //        return;

  //      case "blue":
  //        blue + change > 255 || blue + change < 0
  //          ? null
  //          : setBlue(blue + change);
  //        return;
  //      default:
  //        return;
  //    }
  //  };

  // setColor written in if statement without reducer
  //const setColor = (color, change) => {
  //	// color === 'red', 'green', 'blue'
  //	// change === +15, -15
  //	if (color === "red") {
  //		if (red + change > 255 || red + change < 0) {
  //			return;
  //		} else {
  //			setRed(red + change);
  //		}
  //	}
  //};

  // useReducer hook that accepts a function and initial value as arguments for statemanagement
  const [state, runReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;
  console.log(state);

  return (
    <View>
      <ColorCounter
        // increase function without reducer
        //onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onIncrease={() =>
          runReducer({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        // decrease function without reducer
        // onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        onDecrease={() =>
          runReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="red"
      />
      <ColorCounter
        // increase function without reducer
        // onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onIncrease={() =>
          runReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        // decrease function without reducer
        // onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        onDecrease={() =>
          runReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="blue"
      />
      <ColorCounter
        // increase function without reducer
        // onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onIncrease={() =>
          runReducer({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        // decrease function without reducer
        //onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        onDecrease={() =>
          runReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
