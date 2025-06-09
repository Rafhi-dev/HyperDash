import { useEffect, useState } from "react";
import Input from "../components/form/input";
import Select from "../components/form/Select";
import CheckBox from "../components/form/CheckBox";
import Radio from "../components/form/Radio";
import Switch from "../components/ui/switch/Switch";
import Alert from "../components/ui/alerts/Alert";

const Ujicoba = () => {
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
  const [checked, setChecked] = useState(false);

  const [selectedRadio, setSelectedRadio] = useState("apple");

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const RadioData = [
    { value: "apple", label: "Apel" },
    { value: "orange", label: "Jeruk" },
    { value: "grape", label: "Anggur" },
  ];

  //setting switch

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn(!isOn);

  return (
    <div className="h-full">
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-800 pt-8 h-40">
        <p className="text-white text-4xl antialiased font-semibold text-center">
          Layout 1
        </p>
      </div>
      {/* area 1 */}
      <div className="flex flex-col sm:flex-row gap-4 -mt-6 m-4 z-10">
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <p>Ini adalah konten pertama</p>
        </div>
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <p>Ini adalah konten kedua</p>
        </div>
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <p>Ini adalah konten ketiga</p>
        </div>
      </div>
      {/* area 2 */}
      <div className="flex m-4 gap-4">
        <div className="w-2/3 bg-blue-100 rounded-lg shadow-md p-4">
          <p>koneten ke 4</p>
        </div>
        <div className="w-1/3 bg-blue-200 rounded-lg shadow-md p-4">
          <p>Konten ke 5</p>
        </div>
      </div>
      {/* area 3 */}
      <div className="flex m-4 gap-4">
        <div className="w-full bg-white rounded-lg shadow-md p-4">
          <p>Konten ke 6</p>

          <Input
            label={"Username"}
            value={country}
            name={"input"}
            placeholder={"input 1"}
          />

          <Select
            name={"country"}
            options={countries}
            onChange={handleSelect}
          />

          <Radio
            label="Pilih Buah Favoritmu"
            options={RadioData}
            selectedValue={selectedRadio}
            onChange={handleRadioChange}
            name="buah"
            className="mb-4"
          />

          <Switch
            id="demo-switch"
            isOn={isOn}
            handleToggle={handleToggle}
            label="Aktifkan fitur"
            labelPosition="right" // atau "left"
          />
          <p>Status: {isOn ? "ON" : "OFF"}</p>

          <CheckBox
            label="Saya setuju dengan syarat & ketentuan"
            name="agreement"
            value="yes"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-4"
          />

          <Alert msg={"succes"} value={"Alert Success"} className="mt-4" />
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} HyperDash.
      </footer>
    </div>
  );
};

export default Ujicoba;
