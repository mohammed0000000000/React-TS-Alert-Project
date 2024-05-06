// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Alert from "./component/Alert/Alert";
import {
  Ban,
  BellRing,
  CheckCheck,
  Clock12,
  TriangleAlert,
} from "lucide-react";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <Alert
        type="alert-default"
        icon={<BellRing size={20} />}
        title="Upgrade your plan"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni unde nisi suscipit minima delectus quia beatae quaerat saepe quisquam nobis ipsum 
        excepturi fuga dolores modi molestiae totam ipsam, sit dolore!"
      />
      <Alert
        type="alert-info"
        icon={<Clock12 size={20} />}
        title="Note"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni unde nisi suscipit minima delectus quia beatae quaerat saepe quisquam nobis ipsum 
        excepturi fuga dolores modi molestiae totam ipsam, sit dolore!"
      />
      <Alert
        type="alert-success"
        icon={<CheckCheck size={20} />}
        title="Your order has been proccessed"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni unde nisi suscipit minima delectus quia beatae quaerat saepe quisquam nobis ipsum 
        excepturi fuga dolores modi molestiae totam ipsam, sit dolore!"
      />
      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title="Something Went Wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni unde nisi suscipit minima delectus quia beatae quaerat saepe quisquam nobis ipsum 
        excepturi fuga dolores modi molestiae totam ipsam, sit dolore!"
      />
      <Alert
        type="alert-warning"
        icon={<TriangleAlert size={20} />}
        title="Tips & Tricks"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni unde nisi suscipit minima delectus quia beatae quaerat saepe quisquam nobis ipsum 
        excepturi fuga dolores modi molestiae totam ipsam, sit dolore!"
      />
    </div>
  );
}

export default App;
