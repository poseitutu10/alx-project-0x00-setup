import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Landing: React.FC = () => {
  return(
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Submit" styles="bg-green-500 text-sm px-5 py-2 rounded-sm cursor-pointer" />
      <Button  title="Save" styles="bg-yellow-300 text-base p-2 rounded-full cursor-pointer"/>
    </div>
  )
}

export default Landing;