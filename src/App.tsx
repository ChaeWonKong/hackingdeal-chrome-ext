import React, { useState } from "react";
import Wrapper from "./components/wrapper";
import Button from "./components/button";
import TextField from "./components/text-field";
import Form from "./components/form";
import Label from "./components/label";

export default function App() {
  const [initialPrice, setInitialPrice] = useState(0);

  return (
    <Wrapper>
      <Form>
        <Label>가격</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInitialPrice(parseFloat(e.target.value))
          }
          validity={!isNaN(initialPrice)}
          errorMessage="숫자를 입력해주세요."
        />
        <Label>USD($)</Label>
      </Form>
      <Button>원화 변환</Button>
    </Wrapper>
  );
}
