import { useState } from "react";
import Card from "../ui/card/Cards";
import Input from "./input/input";
import PasswordInput from "./input/Password";
import Select from "./Select";
import Area from "./HyArea";
import Radio from "./Radio";
import CheckBox from "./CheckBox";

const FormView = () => {
  const [checked, setChecked] = useState(false);

  //seting select
  const [country, setCountry] = useState(null);

  const countries = [
    { value: "", label: "Select a country" },
    { value: "us", label: "United States" },
    { value: "id", label: "Indonesia" },
    { value: "uk", label: "United Kingdom" },
  ];

  const handleSelect = (e) => {
    setCountry(e.target.value);
  };
  //setting radiobutton

  const [selectedRadio, setSelectedRadio] = useState("select");

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const RadioData = [
    { value: "defaul", label: "Defaul" },
    { value: "select", label: "Select" },
    { value: "disable", label: "Disable", disabled: true },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        <div className="flex-1 min-w-0">
          <Card title={"input defaul"}>
            <Input label={"input"} value={country} />

            <PasswordInput label={"Password"} />
            <Input
              label={"Input with placeholder"}
              placeholder="info@email.com"
            />
            <Select
              label={"Select"}
              name={"country"}
              options={countries}
              onChange={handleSelect}
            />
            <Input label={"Disabel"} disabled placeholder={"Disable"} />

            <CheckBox
              label="Saya setuju dengan syarat & ketentuan"
              name="agreement"
              value="yes"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-4"
            />
          </Card>
        </div>
        <div className="flex-1 min-w-0">
          <Card title={"input defaul"}>
            <Area label={"textarea"} />

            <Area label={"textarea disable"} disabled />
            <Radio
              direction="horizontal"
              label="Radio (Horzontal)"
              options={RadioData}
              selectedValue={selectedRadio}
              onChange={handleRadioChange}
              name="radio"
            />
            <Radio
              direction="vertical"
              label="Radio (vertical)"
              options={RadioData}
              selectedValue={selectedRadio}
              onChange={handleRadioChange}
              name="rvertical"
            />
          </Card>
        </div>
      </div>
      <div className="flex-1 m-4 min-w-0">
        <Card title={"docs"}>
          <p>docs</p>
        </Card>
      </div>
    </>
  );
};

export default FormView;
