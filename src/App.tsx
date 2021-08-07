import React, { useState } from "react";
import Button from "./components/button";
import TextField from "./components/text-field";

export default function App() {
  const [price, setPrice] = useState(0);

  return (
    <div>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPrice(parseFloat(e.target.value))
        }
        validity={!isNaN(price)}
        errorMessage="숫자를 입력해주세요."
      />
      <Button>원화 변환</Button>
    </div>
  );
}
