import React, { useState } from "react";
import Wrapper from "./components/wrapper";
import Button from "./components/button";
import TextField from "./components/text-field";
import Form from "./components/form";
import Label from "./components/label";
import Select from "./components/select";
import { calcVolWeight } from "./utils/weight";

enum WEIGHT {
  POUND = "파운드(lb)",
  OZ = "온스(oz)",
}

const weightOptions = [{ text: WEIGHT.POUND }, { text: WEIGHT.OZ }];

export default function App() {
  const [initialPrice, setInitialPrice] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);

  // 무게는 lb 기준으로 통일한다.
  const [pounds, setPounds] = useState(0);

  /**
   * Set weight of maximum type(either weight or volume weight)
   * @param w weight in pounds(lb)
   * @returns maximum of weight and volume weight
   */
  const setWeightWithMaxType = (w: number) =>
    setPounds(Math.max(w, calcVolWeight(width, height, length)));

  const setWeightInPounds = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case WEIGHT.POUND:
        return;
      // ounce는 pound로 변환해 저장한다.
      case WEIGHT.OZ:
        setWeightWithMaxType(pounds / 16);
        return;
      default:
        return;
    }
  };

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
            setWidth(parseFloat(e.target.value))
          }
          validity={!isNaN(width)}
          errorMessage="숫자만"
        />
        <Label>X</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHeight(parseFloat(e.target.value))
          }
          validity={!isNaN(height)}
          errorMessage="숫자만"
        />
        <Label>X</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLength(parseFloat(e.target.value))
          }
          validity={!isNaN(length)}
          errorMessage="숫자만"
        />
        <Label>inch</Label>
      </Form>
      <Form>
        <Label>무게</Label>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWeightWithMaxType(parseFloat(e.target.value))
          }
          validity={!isNaN(pounds)}
          errorMessage="숫자만 입력해주세요."
        />

        <Select selectOptions={weightOptions} onChange={setWeightInPounds} />
      </Form>
      <Button onClick={() => alert(`${pounds} 파운드(lb)`)}>
        배송대행지 이용시 총 가격 계산
      </Button>
    </Wrapper>
  );
}
