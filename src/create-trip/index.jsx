import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "@/constants/options";
import React, { useEffect, useState } from "react";

function CreateTrip() {
  const [place, setPlace] = useState("Kathmandu, Nepal");
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);


  const OnGenerateTrip=()=>{
    if(formData?.noOfDays>20){
      return;
    }
    else{
      console.log(formData)
    }
  }
  return (
    <>
      <div className="max-w-screen-2xl mx-auto sm:px-10 md:px-32 lg:px-56 px-5 mt-10">
        <h2 className="font-bold text-3xl ">
          Tell us your travel preference 🏕️🌴
        </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information, and out trip planner will take
          care of the rest.
        </p>
        <div>
          <div className="mt-10">
            {/* Destination User Input */}
            <div>
              <h2 className="text-xl my-3 font-medium">
                What is destination of choice?
              </h2>
              <Input
                type="text"
                placeholder="Enter destination"
                onChange={(e) =>
                  handleInputChange("Destination", e.target.value)
                }
              />
            </div>

            {/* Duaration of the Trip */}
            <div>
              <h2 className="text-xl my-3 font-medium mt-10">
                Duration of your trip in days?
              </h2>
              <Input
                type="number"
                placeholder="Duration of stay"
                onChange={(e) => handleInputChange("noOfDays", e.target.value)}
              />
            </div>

            <div>
              {/* Budget option */}
              <h2 className="text-xl my-3 font-medium mt-10">
                What is your budget?
              </h2>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {SelectBudgetOptions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleInputChange("budget", item.title)}
                    className={`p-8 border rounded-lg cursor-pointer hover:shadow-lg 
                      ${
                        formData?.budget == item.title &&
                        "shadow-lg border-gray-500"
                      }
                      `}
                  >
                    <h1 className="text-4xl py-4">{item.icon}</h1>
                    <h2 className="font-bold text-large">{item.title}</h2>
                    <h2 className="text-sm text-gray-500">{item.desc}</h2>
                  </div>
                ))}
              </div>

              {/* Traveller Information */}
              <h2 className="text-xl my-3 font-medium mt-10">
                Who do you plan on travelling with on your next adventure?
              </h2>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {SelectTravelsList.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleInputChange("noOfPeople", item.people)}
                    className={`p-8 border rounded-lg cursor-pointer hover:shadow-lg 
                      ${
                        formData?.noOfPeople == item.people &&
                        "shadow-lg border-gray-900"
                      }
                      `}
                  >
                    <h1 className="text-4xl py-4">{item.icon}</h1>
                    <h2 className="font-bold text-large">{item.title}</h2>
                    <h2 className="text-sm text-gray-500">{item.desc}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 flex justify-end">
          <Button onClick={OnGenerateTrip}>Generate Trip</Button>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
