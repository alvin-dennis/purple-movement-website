import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { env } from "@/config/env";

interface StepFourProps {
  userName?: string;
  isAnonymous?: boolean;
}

export default function StepFour({ userName = "Friend", isAnonymous = false }: StepFourProps) {
  if (isAnonymous) {
    return (
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="w-[904px] rounded-[10px] flex flex-col items-center justify-center py-10 gap-8">
            <div className="w-80 space-y-6 flex flex-col items-center">
              <div className="text-center text-5xl font-bold capitalize">Thank You!</div>
              <div className="text-center text-xl font-normal capitalize">
                We&apos;ve received your response.
              </div>
              <Link href="/" className="mt-4">
                <div className="px-7 py-3.5 bg-primary hover:bg-primary rounded inline-flex justify-center items-center gap-1.5 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-xl font-bold capitalize">Go Home</div>
                  <MdHome className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl px-5 py-8 sm:px-10 sm:py-10 text-center space-y-6 sm:space-y-8 shadow-md">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white capitalize">
            Thank you {userName}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            We&apos;ve received your response.
          </p>

          <div className="text-center justify-start sm:text-base md:text-lg text-white text-xl font-semibold capitalize">
            Join our WhatsApp for updates.
          </div>
          <div className="w-full flex justify-center">
            <Link href={env.NEXT_PUBLIC_WTSP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant={"default"}
                className="-mt-5 sm:w-auto px-6 py-3 flex items-center justify-center gap-2"
              >
                <span>Join WhatsApp</span>
                <FaWhatsapp className="w-5 h-5 text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
