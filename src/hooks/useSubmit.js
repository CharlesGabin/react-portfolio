import { useState } from "react";
import { useAlertContext } from "../context/alertContext";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState({ type: "", message: "" });

  const { onOpen } = useAlertContext();

  const submit = async (url, data) => {
    const random = Math.random();
    console.log(random);
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: `Something went wrong ${data.firstName}, please try again later!`,
      });
    } finally {
      setLoading(false);
    }
    onOpen(response.type, response.message);
    console.log(random);
    console.log(response.type, response.message);
  };

  return { isLoading, response, submit };
};

export default useSubmit;
