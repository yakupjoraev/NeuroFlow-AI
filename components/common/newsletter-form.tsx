"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Check,
  CircleNotch,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema, type NewsletterValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: NewsletterValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    void values;
    setDone(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("w-full", className)}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "newsletter-error" : undefined}
            {...register("email")}
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? (
            <CircleNotch className="size-4 animate-spin" />
          ) : done ? (
            <Check weight="bold" className="size-4" />
          ) : (
            <>
              Subscribe
              <ArrowRight weight="bold" className="size-4" />
            </>
          )}
        </Button>
      </div>
      <div className="mt-2 min-h-5" aria-live="polite">
        {errors.email ? (
          <p id="newsletter-error" className="text-xs text-destructive">
            {errors.email.message}
          </p>
        ) : done ? (
          <p className="text-xs text-success">
            You are on the list. Watch your inbox.
          </p>
        ) : null}
      </div>
    </form>
  );
}
