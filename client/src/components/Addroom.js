import axios from "axios";
import React, { useState, useEffect } from "react";

function Addroom() {
  const [room, setroom] = useState("");
  const [rentperday, setrentperday] = useState();
  const [maxcount, setmaxcount] = useState();
  const [description, setdescription] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [type, settype] = useState("");
  const [image1, setimage1] = useState("");
  
  async function addRoom()
  {
      const roomobj = {
          room , 
          rentperday, maxcount ,description ,phonenumber ,type ,image1 
      }
      try {
          const result = await axios.post('/api/rooms/addroom' , roomobj)
      } catch (error) {
          
      }
  }
  return (
    <div className="row">
     
        <div className="col-md-5">
          <input
            type="text"
            className="form-control mt-1"
            placeholder="name"
            value={room}
            onChange={(e) => {
              setroom(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="rentperday"
            value={rentperday}
            onChange={(e) => {
              setrentperday(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="maxcount"
            value={maxcount}
            onChange={(e) => {
              setmaxcount(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="phonenumber"
            value={phonenumber}
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
          />
          
        </div>

        <div className="col-md-6">
        <input
            type="text"
            className="form-control mt-1"
            placeholder="type"
            value={type}
            onChange={(e) => {
              settype(e.target.value);
            }}
          />
        <input
            type="text"
            className="form-control mt-1"
            placeholder="Image url 1"
            value={image1}
            onChange={(e) => {
              setimage1(e.target.value);
            }}
          />
          
          <div className='mt-1 text-right'>
          <button className="btn btn-primary" onClick={addRoom}>ADD CAR</button>
          </div>
        </div>
     
    </div>
  );
}

export default Addroom;
