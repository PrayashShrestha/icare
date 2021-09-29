import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { firestore } from "../../Firebase";
import ConsultantCard from "./ConsultantCard";

const Consult = () => {
  const [consultants, setConsultants] = useState([]);
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const [filteredConsultants, setFilteredConsultants] = useState([]);

  const user = useSelector((state) => state.user.user);
  const verified = useSelector((state) => state.user.emailVerified);


  useEffect(() => {
    const respose = async () => {
      await firestore
        .collection("doctor")
        .onSnapshot((snapshot) => {
          setConsultants(snapshot.docs.map((doc) => doc.data()));
          setFilteredConsultants(snapshot.docs.map((doc) => doc.data()));
        });

      // doc.docs.map((all) => setConsultats([...consultats, [all.data()]]));
    };
    respose();
    // console.log(consultants);
  }, []);

  const handleChange = (e) => {
    setSearch(searchRef.current.value);
    // setSearch(search.toLocaleLowerCase());

    if (searchRef.current.value) {
      const datas = consultants.filter(item => {
        return Object.keys(item).some((key) => {
          // item[key].toLowerCase().includes(search)
          if (item[key].toLocaleLowerCase().includes(searchRef.current.value)) {
            return true;
          }
        }
        );
      });
      setFilteredConsultants(datas);
    }
    else {
      setFilteredConsultants(consultants);
    }
    // console.log(search);
  };
  return (
    <div>
      {verified ? (
        <div className="consult__container">
          <form className="consult__inp">
            <input type="text" onChange={handleChange} ref={searchRef} placeholder="Search" />
          </form>
          <div className="consult">
            {filteredConsultants.map((consultant, index) => (
              <ConsultantCard consultats={consultant} key={index} />
            ))}</div>
        </div>
      ) :
        user ? (<div className="consult__msg">Please Verify your Email.Verification Email has been sent to you.</div>) : (<div className="consult__msg">Please<a href="/signin"> Signin </a>first.</div>)}
    </div>
  );
};

export default Consult;
