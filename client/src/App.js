import Header from "./header/header";
import { React, useState } from "react";
import AllTikers from "./components/allTikers";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  let themeColor = [];

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  if (checked) {
    themeColor.push("dark");
  }
  return (
    <div className={themeColor}>
      <Provider store={store}>
        <Header checked={checked} handleChange={handleChange} />
        <AllTikers />
      </Provider>
    </div>
  );
}

export default App;
