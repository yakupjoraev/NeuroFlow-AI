"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/common/magnetic";
import { WorkflowGraph } from "@/components/common/workflow-graph";
import { easeOutExpo } from "@/lib/motion";

const headline = ["Automate", "the", "work", "that", "runs", "your", "business."];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 lg:pt-48">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              <Badge variant="brand">
                <Sparkles className="size-3" />
                Introducing autonomous agents
              </Badge>
            </motion.div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {headline.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="inline-block overflow-hidden pb-[0.05em] align-bottom"
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + index * 0.06,
                      ease: easeOutExpo,
                    }}
                  >
                    {word === "runs" ? (
                      <span className="text-gradient">{word}</span>
                    ) : (
                      word
                    )}
                    {index < headline.length - 1 ? " " : ""}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: easeOutExpo }}
            >
              NeuroFlow AI deploys reasoning agents that plan, execute, and
              improve your operations across every tool your team already uses.
              No brittle scripts. Full visibility.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: easeOutExpo }}
            >
              <Magnetic>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start automating
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Button asChild variant="secondary" size="lg">
                <Link href="/features">
                  <PlayCircle className="size-4" />
                  See how it works
                </Link>
              </Button>
            </motion.div>

            <motion.p
              className="mt-8 font-mono text-xs uppercase tracking-wider text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              Free forever plan · No credit card · SOC 2 Type II
            </motion.p>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: easeOutExpo }}
          >
            <div className="relative rounded-3xl border border-border glass p-6 shadow-2xl shadow-black/10 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-destructive/70" />
                  <span className="size-2.5 rounded-full bg-primary/60" />
                  <span className="size-2.5 rounded-full bg-success/70" />
                </div>
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  live workflow
                </span>
              </div>
              <WorkflowGraph />
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                <HeroStat value="1.2s" label="Avg latency" />
                <HeroStat value="312" label="Runs / min" />
                <HeroStat value="0" label="Errors today" />
              </div>
            </div>
            <div className="animate-float absolute -bottom-6 -left-5 hidden rounded-2xl border border-border glass px-4 py-3 shadow-xl sm:block">
              <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                Time saved
              </p>
              <p className="text-lg font-semibold text-gradient">4.2h / week</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-lg font-semibold tracking-tight">{value}</span>
      <span className="text-xs text-muted">{label}</span>
    </div>
  );
}
