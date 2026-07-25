"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle,
  CircleNotch,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

const teamSizes: ContactValues["teamSize"][] = [
  "1-10",
  "11-50",
  "51-200",
  "200+",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const selectedSize = watch("teamSize");

  const onSubmit = async (values: ContactValues) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    void values;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start border border-border-strong p-10">
        <CheckCircle weight="light" aria-hidden className="size-9 text-primary" />
        <h3 className="display-md mt-6">Thanks, we are on it</h3>
        <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted">
          A member of our team will reach out within one business day. Keep an
          eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 border border-border-strong p-7 sm:p-8"
    >
      <Field
        id="name"
        label="Full name"
        error={errors.name?.message}
      >
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Work email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
        <Field
          id="company"
          label="Company"
          error={errors.company?.message}
        >
          <Input
            id="company"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-foreground">
          Team size
        </legend>
        <div
          className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4"
          role="radiogroup"
          aria-label="Team size"
        >
          {teamSizes.map((size) => (
            <button
              key={size}
              type="button"
              role="radio"
              aria-checked={selectedSize === size}
              onClick={() =>
                setValue("teamSize", size, { shouldValidate: true })
              }
              className={cn(
                "rounded-xs border px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selectedSize === size
                  ? "border-primary text-primary"
                  : "border-border-strong text-muted hover:border-muted hover:text-foreground",
              )}
            >
              {size}
            </button>
          ))}
        </div>
        {errors.teamSize ? (
          <p className="mt-2 text-xs text-destructive">
            {errors.teamSize.message}
          </p>
        ) : null}
      </fieldset>

      <Field
        id="message"
        label="How can we help?"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <CircleNotch className="size-4 animate-spin" />
        ) : (
          <>
            Send message
            <ArrowRight weight="bold" className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
