"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitFeedback } from "@/services/hooks";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { Textarea } from "./ui/textarea";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackPopup({ isOpen, onClose }: FeedbackPopupProps) {
  const [feedback, setFeedback] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const { mutateAsync: submitFeedback, isPending } = useSubmitFeedback();

  const reactions = [
    { id: 1, src: "/images/fbr1.webp", alt: "Very Sad" },
    { id: 2, src: "/images/fbr2.webp", alt: "Sad" },
    { id: 3, src: "/images/fbr3.webp", alt: "Neutral" },
    { id: 4, src: "/images/fbr4.webp", alt: "Happy" },
    { id: 5, src: "/images/fbr5.webp", alt: "Very Happy" },
  ];

  const handleReactionClick = (rating: number) => {
    setSelectedRating(selectedRating === rating ? null : rating);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = () => {
    if (!feedback.trim() && !selectedRating) return;

    submitFeedback(
      {
        message: feedback.trim(),
        rating: selectedRating || 0,
        site_id: "tpm-website",
      },
      {
        onSuccess: () => {
          toast.success("Thank you for your feedback!");
          setFeedback("");
          setSelectedRating(null);
          onClose();
        },
        onError: () => {
          toast.error("Failed to submit feedback. Please try again.");
        },
      },
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="block md:hidden w-full max-w-[90vw] sm:max-w-[500px] h-auto max-h-[90vh] bg-card rounded-[15px] sm:rounded-[20px] overflow-y-auto relative p-4 sm:p-6">
        <Button
          variant={"default"}
          size={"icon"}
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="text-center mb-10 mt-10 sm:mb-6 pt-2 sm:pt-0">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold">How helpful was this?</h2>
        </div>
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          {reactions.map((reaction) => (
            <Button
              key={reaction.id}
              onClick={() => handleReactionClick(reaction.id)}
              className={`transition-all duration-200 hover:opacity-100 hover:scale-110 ${
                selectedRating === reaction.id ? "opacity-100 scale-110" : "opacity-25"
              }`}
              title={reaction.alt}
            >
              <Image
                src={reaction.src}
                alt={reaction.alt}
                width={48}
                height={48}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </Button>
          ))}
        </div>

        <div className="w-full mb-6">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Give your feedback here...."
            className="w-full h-32 px-4 py-4 text-sm"
          />
        </div>

        <div className="flex justify-center">
          <InteractiveHoverButton
            onClick={handleSubmit}
            disabled={(!feedback.trim() && !selectedRating) || isPending}
            className="inline-flex justify-center items-center disabled:opacity-50"
          >
            {isPending && <Spinner className="mr-2 h-4 w-4" />} Submit
          </InteractiveHoverButton>
        </div>
      </div>

      <div className="hidden md:block w-[780px] h-[520px] bg-card shadow-2xl rounded-xl overflow-hidden relative">
        <Button
          variant={"default"}
          size={"icon"}
          onClick={onClose}
          className="absolute top-6 right-8"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="absolute left-[121.5px] top-[66.32px]">
          <h2 className="text-5xl font-bold">How helpful was this?</h2>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 mt-10 top-[148px] flex justify-center items-center gap-6">
          {reactions.map((reaction) => (
            <button
              key={reaction.id}
              type="button"
              onClick={() => handleReactionClick(reaction.id)}
              className={`transition-all duration-200 hover:opacity-100 hover:scale-110 ${
                selectedRating === reaction.id ? "opacity-100 scale-110" : "opacity-25"
              }`}
              title={reaction.alt}
            >
              <Image
                src={reaction.src}
                alt={reaction.alt}
                width={50}
                height={50}
                className="object-contain"
              />
            </button>
          ))}
        </div>
        <div className="w-[544.59px] h-40 mt-10 absolute left-[125.06px] top-[227.28px] rounded">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Give your feedback here...."
            className="w-full h-full px-4 py-4 text-lg"
          />
        </div>
        <div className="p-2.5 mt-10 absolute left-[329px] top-[406px] inline-flex justify-center items-center gap-2.5">
          <InteractiveHoverButton
            onClick={handleSubmit}
            disabled={(!feedback.trim() && !selectedRating) || isPending}
            className="disabled:opacity-50"
          >
            {isPending && <Spinner className="mr-2 h-4 w-4" />} Submit
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
