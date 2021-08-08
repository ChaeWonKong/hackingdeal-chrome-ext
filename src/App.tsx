import React, { useState } from "react";
import Wrapper from "./components/wrapper";
import Button from "./components/button";
import TextField from "./components/text-field";
import Form from "./components/form";
import Label from "./components/label";
import Select from "./components/select";

enum WEIGHT {
  POUND = "파운드(lb)",
  OZ = "온스(oz)",
}

const weightOptions = [{ text: WEIGHT.POUND }, { text: WEIGHT.OZ }];

export default function App() {
  const [initialPrice, setInitialPrice] = useState(0);
  const [volume, setVolume] = useState(1);

  // 무게는 lb 기준으로 통일한다.
  const [pounds, setPounds] = useState(0);
  const setWeightInPounds = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case WEIGHT.POUND:
        return;
      // ounce는 pound로 변환해 저장한다.
      case WEIGHT.OZ:
        setPounds(pounds / 16);
        return;
      default:
        return;
    }
  };
  console.log(pounds);

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
      <Form>
        <Label>부피계산</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVolume(volume * parseFloat(e.target.value))
          }
          validity={!isNaN(volume)}
          errorMessage="숫자만"
        />
        <Label>X</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVolume(volume * parseFloat(e.target.value))
          }
          validity={!isNaN(volume)}
          errorMessage="숫자만"
        />
        <Label>X</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVolume(volume * parseFloat(e.target.value))
          }
          validity={!isNaN(volume)}
          errorMessage="숫자만"
        />
        <Label>inch</Label>
      </Form>
      <Form>
        <Label>무게</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPounds(parseFloat(e.target.value))
          }
          validity={!isNaN(volume)}
          errorMessage="숫자만 입력해주세요."
        />

        <Select selectOptions={weightOptions} onChange={setWeightInPounds} />
      </Form>
      <Button>배송대행지 이용시 총 가격 계산</Button>
    </Wrapper>
  );
}
