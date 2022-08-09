import { useContext } from "react";
import AppLogo from "./AppLogo";
import { OMIContext } from "./OMI";

function Navbar() {
  const context = useContext(OMIContext);

  return (
    <nav className="relative w-full h-[calc(15vh-1rem)] rounded-b-[20px] shadow-md bg-zinc-800 flex flex-row items-center justify-center">
      <AppLogo className="absolute top-0 left-4 rounded-[20px] mt-1" />
      <button
        onClick={() => context.setShowInstructions(true)}
        className="text-white absolute right-60 text-[36px] hover:underline"
      >
        Instruções
      </button>
    </nav>
  );
}

export default Navbar;