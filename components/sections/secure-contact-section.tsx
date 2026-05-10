"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import { TerminalButton } from "@/components/terminal/terminal-button";
import { TerminalInput } from "@/components/terminal/terminal-input";
import { TerminalTextarea } from "@/components/terminal/terminal-textarea";
import { DigitalFlicker } from "../ui/glitch-text";

export function SecureContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [logs, setLogs] = useState([
    { time: "22:04:12", text: "NODE_HANDSHAKE_INITIATED", type: "primary" },
    { time: "22:04:13", text: "SSL_CERT_VERIFIED [OK]", type: "default" },
    { time: "22:04:15", text: "LISTENING_FOR_PAYLOAD...", type: "default" },
  ]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;

      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }
    };

    loadGSAP();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLogs = [
      ...logs,
      {
        time: new Date().toLocaleTimeString("en-GB", { hour12: false }),
        text: `TRANSMITTING: ${formData.subject || "DATA_PAYLOAD"}...`,
        type: "primary",
      },
      {
        time: new Date().toLocaleTimeString("en-GB", { hour12: false }),
        text: "ENCRYPTION_HANDSHAKE_COMPLETE",
        type: "primary",
      },
    ];
    setLogs(newLogs);
  };

  return (
    <div className="w-full" ref={sectionRef}>
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 border border-primary-fixed-dim rounded-full flex items-center justify-center opacity-20">
          <div className="w-80 h-80 border border-primary-fixed-dim rounded-full" />
          <div className="absolute w-full h-px bg-primary-fixed-dim" />
          <div className="absolute w-px h-full bg-primary-fixed-dim" />
        </div>
      </div>

      <div className="max-w-2xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary-fixed-dim font-bold font-mono text-code-sm">
              [ MODULE: COMM_LINK ]
            </span>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <h1 className="font-heading text-headline-xl text-primary-fixed-dim mb-4 uppercase tracking-tighter animate-flicker">
            Establish Connection
          </h1>
          <p className="text-on-surface-variant font-body-md max-w-lg">
            Input your credentials and transmission data. All communications are
            routed through encrypted subterranean nodes.
          </p>
        </div>

        {/* CLI Form Container */}
        <div className="relative border border-outline-variant p-8 bg-surface-container-lowest">
          {/* Corner Decorations */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-fixed-dim" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary-fixed-dim" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary-fixed-dim" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-fixed-dim" />

          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* Input: Name */}
            <div className="relative">
              <label
                className="block font-mono text-primary-fixed-dim mb-2"
                htmlFor="name"
              >
                &gt; USER_IDENTIFIER:
              </label>
              <DigitalFlicker className="flex items-baseline gap-2 w-full">
                <TerminalInput
                  id="name"
                  name="name"
                  placeholder="Enter alphanumeric ID..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </DigitalFlicker>
            </div>

            {/* Input: Email */}
            <div className="relative group">
              <label
                className="block font-mono text-primary-fixed-dim mb-2"
                htmlFor="email"
              >
                &gt; RETURN_NODE_ADDR:
              </label>
              <DigitalFlicker className="flex items-baseline gap-2 w-full">
                <TerminalInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@node.network"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </DigitalFlicker>
            </div>

            {/* Input: Subject */}
            <div className="relative group">
              <label
                className="block font-mono text-primary-fixed-dim mb-2"
                htmlFor="subject"
              >
                &gt; PKT_HEADER:
              </label>
              <DigitalFlicker className="flex items-baseline gap-2 w-full">
                <TerminalInput
                  id="subject"
                  name="subject"
                  placeholder="Requesting system access..."
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </DigitalFlicker>
            </div>

            {/* Input: Message */}
            <div className="relative group">
              <label
                className="block font-mono text-primary-fixed-dim mb-2"
                htmlFor="message"
              >
                &gt; DATA_PAYLOAD:
              </label>
              <DigitalFlicker className="flex items-baseline gap-2 w-full">
                <TerminalTextarea
                  id="message"
                  name="message"
                  placeholder="Begin transmission..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </DigitalFlicker>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <TerminalButton
                type="submit"
                className="w-full md:w-auto px-12 py-4 flex items-center justify-center gap-4"
              >
                [EXECUTE_MESSAGE]_
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
              </TerminalButton>
            </div>
          </form>

          {/* Security Indicator */}
          <div className="mt-12 flex items-center justify-between border-t border-outline-variant pt-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-primary-fixed-dim animate-pulse" />
                <div className="w-1.5 h-1.5 bg-primary-fixed-dim/40" />
                <div className="w-1.5 h-1.5 bg-primary-fixed-dim/20" />
              </div>
              <span className="font-mono text-[10px] text-primary-fixed-dim tracking-[0.2em]">
                SECURITY_ENCRYPTION_ACTIVE
              </span>
            </div>
            <div className="text-[10px] text-on-surface-variant font-mono">
              LEVEL_4_AUTH_REQUIRED
            </div>
          </div>
        </div>

        {/* Terminal Readout */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="border border-outline-variant bg-surface-container-low p-4">
            <div className="font-mono text-label-sm text-on-surface-variant mb-2">
              SYSTEM_LOG
            </div>
            <div className="text-[10px] font-mono space-y-1">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={
                    log.type === "primary"
                      ? "text-primary-fixed-dim"
                      : "text-on-surface-variant"
                  }
                >
                  {log.time} - {log.text}
                </div>
              ))}
            </div>
          </div>
          <div className="border border-outline-variant bg-surface-container-low p-4">
            <div className="font-mono text-label-sm text-on-surface-variant mb-2">
              ENCRYPTION_KEY
            </div>
            <div className="text-[10px] font-mono text-primary-fixed-dim break-all leading-tight opacity-60">
              8F-E2-01-99-BC-4D-3A-A1-00-5F-2E-9D-8C-4B-01-22-AA-BB-CC-DD-EE-FF-00-11-22-33-44-55-66-77-88-99
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
