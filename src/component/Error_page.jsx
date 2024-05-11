import { useRouteError} from "react-router-dom";
import { BiError } from "react-icons/bi";
import { FaSadCry } from "react-icons/fa";
import { useEffect } from "react";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  useEffect(() => {
    document.title = "Error page";
 }, []);
  return (
    <div id="error-page" className="flex flex-col justify-center items-center gap-4 bg-gray-200 p-12 rounded-3xl">
      <div>
            <FaSadCry  className="w-32 h-32 text-red-600"/>
            <h1 className="text-5xl font-bold text-center"> Oops!</h1>
      </div>
      <p className="text-2xl font-semibold text-center">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}