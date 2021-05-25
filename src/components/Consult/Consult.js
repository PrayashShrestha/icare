import React, { useEffect, useState } from "react";
import { firestore } from "../../Firebase";
import ConsultantCard from "./ConsultantCard";

const Consult = () => {
  const [consultats, setConsultats] = useState([]);
  useEffect(() => {
    const respose = async () => {
      const doc = await firestore.collection("doctor").get();
      doc.docs.map((all) => setConsultats([all.data()]));
    };
    respose();
    console.log(consultats);
  }, []);
  return (
    <div className="consult">
      {consultats.map((consultant, index) => (
        <ConsultantCard consultats={consultant} key={index} />
      ))}
    </div>
  );
};

export default Consult;
