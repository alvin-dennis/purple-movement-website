"use client";

import { ArrowLeft, ArrowRight, ChevronDown, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface StepTwoFormData {
  selectedRole: string;
  whyHere: string;
  portfolioLink: string;
}

interface StepTwoProps {
  selectedFromPrevious?: string | null;
  formData: StepTwoFormData;
  onChange: (updates: Partial<StepTwoFormData>) => void;
  onNext?: () => void;
  onBack?: () => void;
}

export default function StepTwo({
  selectedFromPrevious,
  formData,
  onChange,
  onNext,
  onBack,
}: StepTwoProps) {
  const { selectedRole, whyHere, portfolioLink } = formData;
  const canProceed = (selectedRole?.trim() || "") !== "" && (whyHere?.trim() || "") !== "";

  const getRoleOptions = (category: string | null) => {
    switch (category) {
      case "individual":
        return [
          "Student",
          "Creator / Entrepreneur ",
          "Enthusiast / Professional mentoring, volunteering, or supporting initiatives",
          "Other",
        ];
      case "government":
        return [
          "Government Body – Local, state, or national departments supporting initiatives",
          "Policy Maker ",
          "Government Affiliated Institution ",
          "Public Sector – State-run companies and enterprises contributing to programs",
          "Other",
        ];
      case "organisation":
        return [
          "Nonprofit / NGO: Supporting social and community initiatives",
          "Startup / Company: Building and scaling impactful solutions",
          "Educational / Training Institution: Enabling learning and skill development",
          "Research / Innovation Lab: Driving research and practical solutions",
          "Other",
        ];
      default:
        return [];
    }
  };

  const roleOptions = getRoleOptions(selectedFromPrevious || null);

  return (
    <div className="w-full px-4 sm:px-6 space-y-10">
      <div className="space-y-4">
        <div className="max-w-[864px] w-full mx-auto space-y-3">
          <label
            htmlFor="role-select"
            className="block text-base sm:text-xl md:text-2xl font-semibold capitalize text-white tracking-wide"
          >
            What defines you?
          </label>{" "}
          <div className="relative">
            <select
              id="role-select"
              value={selectedRole || ""}
              onChange={(e) => onChange({ selectedRole: e.target.value })}
              className="w-full h-11 px-4 text-sm sm:text-base bg-transparent border border-white rounded text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-700"
            >
              <option value="">Select...</option>
              {roleOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="max-w-[864px] w-full mx-auto space-y-3">
          <Label
            htmlFor="why-here"
            className="block text-base sm:text-xl md:text-2xl font-semibold capitalize tracking-wide"
          >
            What Do You Want to Share?
          </Label>
          <p>Contribute ideas, report issues, and drive impact.</p>

          <Textarea
            id="why-here"
            value={whyHere}
            onChange={(e) => onChange({ whyHere: e.target.value })}
            placeholder="I’m here for Purple Movement to share, and turn ideas into real-world solutions without barriers...."
            className="w-full h-32 px-4 py-3 text-sm sm:text-base"
            rows={6}
          />
        </div>

        <div className="max-w-[864px] w-full mx-auto">
          <div className="relative">
            <Input
              id="link-input"
              type="url"
              value={portfolioLink}
              onChange={(e) => onChange({ portfolioLink: e.target.value })}
              placeholder="Share your works...(Optional)"
              className="w-full h-16 pl-14 pr-6 py-3 text-sm sm:text-base"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Link className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center max-w-[864px] w-full mx-auto">
        <Button
          variant={"default"}
          onClick={onBack}
          className="w-full sm:w-32 py-2 flex justify-center items-center gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-smr">Back</span>
        </Button>

        <Button
          variant={"default"}
          onClick={canProceed ? onNext : undefined}
          disabled={!canProceed}
          className={`w-full sm:w-32 py-2 flex justify-center items-center gap-1.5 transition-colors ${
            canProceed ? "" : "bg-primary/50 cursor-not-allowed"
          }`}
        >
          <span className="text-smr">Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {selectedFromPrevious && (
        <div className="text-xs sm:text-sm text-center mt-6">
          Joining as: <span className="text-tpm capitalize">{selectedFromPrevious}</span>
        </div>
      )}
    </div>
  );
}
