import React, { useState } from "react";
import "./Predict.css";
import Fields from "../components/Fields/Fields";

import Button from "../components/Button/Button";
import axios from "axios";
import { useSelector } from "react-redux";

const Predict = () => {
  const fields = [
    { title: "Clump_Thickness", range: "0-10" },
    { title: "Uniformity_of_Cell_Size", range: "0-10" },
    { title: "Uniformity_of_Cell_Shape", range: "0-10" },
    { title: "Marginal_Adhesion", range: "0-10" },
    { title: "Single_Epithelial_Cell_Size", range: "0-10" },
    { title: "Bare_Nuclei", range: "0-10" },
    { title: "Bland_Chromation", range: "0-10" },
    { title: "Normal_Nucleoli", range: "0-10" },
    { title: "Mitoses", range: "0-10" },
  ];

  const [result, setResult] = useState("Set the values and click predict.");

  const [values, setValues] = useState([]);
  const [consultRoute, setConsultRoute] = useState("");

  const user = useSelector((state) => state.user.user);
  const verified = useSelector((state) => state.user.emailVerified);


  //form an array of the input values with the key values in the map function
  const updateValue = (val, index) => {
    const temp = [...values];
    if (val > 10 || val < 0) {

      alert("Please enter valid inputs between 0 and 10");
      temp[index] = 0;
      setValues(temp);
    }
    else {
      temp[index] = val;
      setValues(temp);
    }
  };

  //function for the reset all the input values
  const handleReset = (e) => {
    e.preventDefault();
    setValues([]);
    setResult("Set the values and click predict.");
  };

  //predict function
  const handlePredict = (e) => {
    e.preventDefault();

    const { Clump_Thickness, Uniformity_of_Cell_Size, Uniformity_of_Cell_Shape, Marginal_Adhesion, Single_Epithelial_Cell_Size, Bare_Nuclei, Bland_Chromation, Normal_Nucleoli, Mitoses } = e.target.elements;
    // const { Clump_Thickness, Uniformity_of_Cell_Size, Uniformity_of_Cell_Shape, Marginal_Adhesion, Single_Epithelial_Cell_Size, Bare_Nuclei, Normal_Nucleoli, Mitoses } = { Clump_Thickness_, Uniformity_of_Cell_Size_, Uniformity_of_Cell_Shape_, Marginal_Adhesion_, Single_Epithelial_Cell_Size_, Bare_Nuclei_, Normal_Nucleoli_, Mitoses_ };
    const inputs = {
      "Clump_Thickness": Clump_Thickness.value,
      "Uniformity_of_Cell_Size": Uniformity_of_Cell_Size.value,
      "Uniformity_of_Cell_Shape": Uniformity_of_Cell_Shape.value,
      "Marginal_Adhesion": Marginal_Adhesion.value,
      "Single_Epithelial_Cell_Size": Single_Epithelial_Cell_Size.value,
      "Bare_Nuclei": Bare_Nuclei.value,
      "Bland_Chromation": Bland_Chromation.value,
      "Normal_Nucleoli": Normal_Nucleoli.value,
      "Mitoses": Mitoses.value
    };
    if (values.includes(undefined) || values.length < fields.length) {
      return alert("Please enter all the correct values in the inputs.");
    }

    try {
      axios.post("http://192.168.1.12:80/predict", inputs).then((res) => {
        console.log(typeof (res.data.result));
        if (res.data.result === 1) {
          setResult("Your have *Breast Cancer*. Please consult with a doctor.");
          setConsultRoute("1");
        }
        else {
          setResult("Your don't have *Breast Cancer*.");
          setConsultRoute("");
        }

      })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    }
    catch (err) {
      alert(err);
    }
    // setResult("Predicting system is still under work");
  };
  return (
    <div>
      {verified ? (<div className="predict">
        <div className="predict__mssg">
          Please fill the inputs with the <br />
          appropriate data provided by the doctor.
        </div>

        {/* <Prompt /> */}
        <form className="predict__form" method="POST" onSubmit={handlePredict}>
          <div className="predict_form_fields">
            {fields.map((field, indx) => (
              <div className="form_fields">
                <label >{field.title}</label>
                <input
                  id={field.title}
                  className="inp"
                  type="number"
                  placeholder={field.range}
                  value={values[indx] ? values[indx] : ""}
                  onChange={(e) => updateValue(e.target.value, indx)}
                />
              </div>
              // <Fields
              //   field={field}
              //   key={id}
              //   id={id}
              //   value={values[id] ? values[id] : ""}
              //   updateValue={updateValue}
              // />
            ))}
          </div>

          <div className="predict__container">
            <div className="predict__result">
              <h3>Result:</h3> {result} <br /> {consultRoute ? (<a href="/consult">Doctor List</a>) : ""}
            </div>
            <div className="predict__btns">
              <Button onclick={handleReset}>Reset All</Button>
              <Button type="submit" >Predict</Button>
            </div>
          </div>
        </form>
      </div>) :
        user ? (<div className="consult__msg">Please Verify your Email.Verification Email has been sent to you.</div>) : (<div className="consult__msg">Please <a href="/signin">Signin</a> first to predict.</div>)}
    </div>
  );
};

export default Predict;
