import React, { useEffect, useState } from "react";
import { firestore } from "../../Firebase";
import ConsultantCard from "./ConsultantCard";

const Consult = () => {
  const [consultants, setConsultants] = useState([]);
  useEffect(() => {
    const respose = async () => {
      const doc = await firestore
        .collection("doctor")
        .onSnapshot((snapshot) => {
          setConsultants(snapshot.docs.map((doc) => doc.data()));
        });

      // doc.docs.map((all) => setConsultats([...consultats, [all.data()]]));
    };
    respose();
    console.log(consultants);
  }, []);
  return (
    <div className="consult">
      {consultants.map((consultant, index) => (
        <ConsultantCard consultats={consultant} key={index} />
      ))}
    </div>
  );
};

export default Consult;
