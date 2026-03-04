"use client";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import "react-phone-input-2/lib/style.css";

// Custom styles for the phone input to match dark theme
const phoneInputStyles = `
  .react-tel-input {
    width: 100% !important;
  }

  .react-tel-input .form-control {
    width: 100% !important;
    background-color: transparent !important;
    border: 1px solid white !important;
    border-left: none !important;
    color: white !important;
    border-radius: 0 6px 6px 0 !important;
    height: 44px !important;
  }
  
  .react-tel-input .form-control:focus {
    border-color: #8b5cf6 !important;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5) !important;
  }
  
  .react-tel-input .flag-dropdown {
    background-color: transparent !important;
    border: 1px solid white !important;
    border-right: 1px solid white !important;
    border-radius: 6px 0 0 6px !important;
    height: 44px !important;
  }
  
  .react-tel-input .flag-dropdown:hover {
    background-color: transparent !important;
  }
  
  .react-tel-input .flag-dropdown.open {
    background-color: transparent !important;
  }
  
  .react-tel-input .selected-flag {
    height: 44px !important;
    padding: 0 12px !important;
    background-color: transparent !important;
  }
  
  .react-tel-input .selected-flag:hover {
    background-color: transparent !important;
  }
  
  .react-tel-input .country-list {
    background-color: #374151 !important;
    border: 1px solid #6b7280 !important;
    border-radius: 6px !important;
    color: white !important;
  }
  
  .react-tel-input .country-list::-webkit-scrollbar {
    width: 2px !important;
  }

  .react-tel-input .country-list::-webkit-scrollbar-track {
    background: rgb(33, 1, 46) !important;
  }

  .react-tel-input .country-list::-webkit-scrollbar-thumb {
    background: rgb(92, 0, 128) !important;
    border-radius: 20px !important;
  }
  
  .react-tel-input .country-list .country {
    background-color: #374151 !important;
    color: white !important;
  }
  
  .react-tel-input .country-list .country:hover {
    background-color: #4b5563 !important;
  }
  
  .react-tel-input .country-list .country.highlight {
    background-color: #8b5cf6 !important;
  }
  
  .react-tel-input .country-list .search {
    background-color: #374151 !important;
    border: 1px solid #6b7280 !important;
    color: white !important;
  }
  
  .react-tel-input .country-list .search::placeholder {
    color: #9ca3af !important;
  }
  
  .react-tel-input.error .form-control {
    border-color: #ef4444 !important;
  }
  
  .react-tel-input.error .flag-dropdown {
    border-color: #ef4444 !important;
  }
  
  .react-tel-input.error .form-control:focus {
    border-color: #ef4444 !important;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.5) !important;
  }
  
  .react-tel-input.disabled .form-control {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }
  
  .react-tel-input.disabled .flag-dropdown {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }
`;

interface StepThreeFormData {
  name: string;
  email: string;
  phone: string;
  interested: boolean;
  notInterested: boolean;
}

interface StepThreeProps {
  selectedFromPrevious?: string | null;
  formData: StepThreeFormData;
  onChange: (updates: Partial<StepThreeFormData>) => void;
  onNext?: () => void;
  onBack?: () => void;
  isSubmitting?: boolean;
  submitError?: string | null;
}

export default function StepThree({
  selectedFromPrevious,
  formData,
  onChange,
  onNext,
  onBack,
  isSubmitting = false,
  submitError = null,
}: StepThreeProps) {
  const { name, email, phone, notInterested } = formData;

  // Track which fields have been touched
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name can only contain letters and spaces";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return "Phone number is required";
    // react-phone-input-2 returns formatted phone with country code
    if (phone.length < 7) return "Phone number is too short";
    if (phone.length > 15) return "Phone number is too long";
    return "";
  };

  const nameError = !notInterested && touchedFields.name ? validateName(name) : "";
  const emailError = !notInterested && touchedFields.email ? validateEmail(email) : "";
  const phoneError = !notInterested && touchedFields.phone ? validatePhone(phone) : "";

  const isFormValid =
    notInterested ||
    (name.trim() && email.trim() && phone.trim() && !nameError && !emailError && !phoneError);

  return (
    <div className="w-full px-4 sm:px-6 space-y-8">
      <style dangerouslySetInnerHTML={{ __html: phoneInputStyles }} />
      <div className="space-y-6">
        <div className="max-w-[864px] w-full mx-auto space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold capitalize text-left pl-3 sm:pl-4">
            Tell Us About You
          </h1>
          <div className="justify-start text-base font-normal capitalize pl-3 sm:pl-4">
            We&apos;d love to hear from you, or you can stay anonymous.
          </div>
        </div>

        <div className="max-w-[864px] w-full mx-auto">
          <Label className="flex items-center space-x-3 cursor-pointer pl-3 sm:pl-4">
            <div className="relative cursor-pointer">
              <Input
                type="checkbox"
                checked={notInterested}
                onChange={(e) => onChange({ notInterested: e.target.checked })}
                className="w-8 h-8 border border-destructive bg-transparent appearance-none rounded-sm focus:ring-primary focus:outline-none cursor-pointer"
              />
              {notInterested && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>
            <span className="text-destructive text-xl font-medium capitalize">Stay Anonymous</span>
          </Label>
        </div>
      </div>
      <div className="max-w-[864px] w-full mx-auto space-y-8">
        <div className="space-y-3">
          <Label
            className={`block text-sm sm:text-lg font-bold capitalize
            ${notInterested ? "opacity-50" : ""}
          `}
          >
            Name:
          </Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => onChange({ name: e.target.value })}
            onFocus={() => setTouchedFields((prev) => ({ ...prev, name: true }))}
            disabled={notInterested}
            className={`w-full h-11 px-4 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
              nameError && !notInterested
                ? "border-destructive focus:ring-destructive"
                : "border-foreground focus:ring-primary"
            }`}
            placeholder="Enter your full name"
          />
          {nameError && !notInterested && (
            <p className="text-destructive text-sm mt-1">{nameError}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label
            className={`block text-sm sm:text-lg font-bold capitalize
            ${notInterested ? "opacity-50" : ""}
          `}
          >
            Email:
          </Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => onChange({ email: e.target.value })}
            onFocus={() => setTouchedFields((prev) => ({ ...prev, email: true }))}
            disabled={notInterested}
            className={`w-full h-11 px-4 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
              emailError && !notInterested
                ? "border-destructive focus:ring-destructive"
                : "border-foreground focus:ring-primary"
            }`}
            placeholder="Enter your email address"
          />
          {emailError && !notInterested && (
            <p className="text-destructive text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label
            className={`block text-sm sm:text-lg font-bold capitalize
            ${notInterested ? "opacity-50" : ""}
          `}
          >
            Phone:
          </Label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => onChange({ phone: value })}
            onFocus={() => setTouchedFields((prev) => ({ ...prev, phone: true }))}
            disabled={notInterested}
            containerClass={`w-full rounded-2xl ${phoneError && !notInterested ? "error" : ""} ${notInterested ? "disabled" : ""}`}
            inputProps={{
              placeholder: "Enter your phone number",
              disabled: notInterested,
            }}
          />
          {phoneError && !notInterested && (
            <p className="text-destructive text-sm mt-1">{phoneError}</p>
          )}
        </div>
      </div>
      {submitError && (
        <div className="max-w-[864px] w-full mx-auto">
          <div className="bg-destructive/30 border border-destructive rounded-lg p-4">
            <p className="text-foreground text-sm">{submitError}</p>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center max-w-[864px] w-full mx-auto">
        <Button
          variant={"default"}
          onClick={onBack}
          disabled={isSubmitting}
          className={`w-full sm:w-32 py-2 flex justify-center items-center gap-1.5 ${
            isSubmitting ? "bg-primary/30 cursor-not-allowed" : ""
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-inter">Back</span>
        </Button>

        <Button
          variant={"default"}
          onClick={onNext}
          disabled={!isFormValid || isSubmitting}
          className={`w-full sm:w-32 py-2  flex justify-center items-center gap-1.5 ${
            isFormValid && !isSubmitting ? "" : "bg-primary/50 cursor-not-allowed"
          }`}
        >
          {isSubmitting && <Spinner className="mr-2 h-4 w-4" />}
          <span className=" text-sm font-inter">Submit</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {selectedFromPrevious && (
        <p className="text-xs sm:text-sm text-center mt-4">
          Joining as:{" "}
          <span className="text-primary font-medium capitalize">{selectedFromPrevious}</span>
        </p>
      )}
    </div>
  );
}
