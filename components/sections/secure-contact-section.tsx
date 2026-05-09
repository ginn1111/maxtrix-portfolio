"use client";

import { useState } from "react";
import Link from "next/link";
import { TerminalButton } from "@/components/terminal/terminal-button";
import { TerminalInput } from "@/components/terminal/terminal-input";
import { TerminalTextarea } from "@/components/terminal/terminal-textarea";

export function SecureContactSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLogs = [
      ...logs,
      { time: new Date().toLocaleTimeString("en-GB", { hour12: false }), text: `TRANSMITTING: ${formData.subject || "DATA_PAYLOAD"}...`, type: "primary" },
      { time: new Date().toLocaleTimeString("en-GB", { hour12: false }), text: "ENCRYPTION_HANDSHAKE_COMPLETE", type: "primary" },
    ];
    setLogs(newLogs);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface relative overflow-x-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 border border-primary-fixed-dim rounded-full flex items-center justify-center opacity-20">
          <div className="w-80 h-80 border border-primary-fixed-dim rounded-full" />
          <div className="absolute w-full h-px bg-primary-fixed-dim" />
          <div className="absolute w-px h-full bg-primary-fixed-dim" />
        </div>
      </div>

      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin py-unit border-b border-outline-variant bg-background h-16">
        <div className="flex items-center gap-4">
          <span className="font-heading text-headline-lg font-bold text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,230,57,0.8)]">
            GIN_OS
          </span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            TERMINAL
          </Link>
          <Link
            href="/projects"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            PROJECTS
          </Link>
          <Link
            href="/specs"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            SPECS
          </Link>
          <Link
            href="/contact"
            className="font-heading text-headline-md uppercase tracking-tighter text-primary-fixed border-b border-primary-fixed pb-1"
          >
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:bg-primary-container hover:text-on-primary-container p-2">
            settings_input_component
          </span>
          <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:bg-primary-container hover:text-on-primary-container p-2">
            terminal
          </span>
          <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:bg-primary-container hover:text-on-primary-container p-2">
            power_settings_new
          </span>
        </div>
      </header>

      {/* Side Nav Bar */}
      <aside className="fixed left-0 top-0 h-full z-40 pt-20 flex flex-col border-r border-outline-variant bg-background w-64 hidden lg:flex">
        <div className="px-6 py-4 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 border border-primary-fixed-dim flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-fixed-dim">account_circle</span>
            </div>
            <div>
              <div className="font-mono text-code-sm uppercase text-primary-fixed-dim font-bold">OPERATOR_01</div>
              <div className="text-[10px] text-on-surface-variant">SECURE_SESSION_ACTIVE</div>
            </div>
          </div>
          <div className="text-[10px] text-primary-fixed-dim animate-pulse">IP: 127.0.0.1 // NODE: 04</div>
        </div>
        <nav className="flex-1">
          <Link
            className="flex items-center gap-3 font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all"
            href="/"
          >
            <span className="material-symbols-outlined">terminal</span>
            <span>ROOT_ACCESS</span>
          </Link>
          <Link
            className="flex items-center gap-3 font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all"
            href="/projects"
          >
            <span className="material-symbols-outlined">account_tree</span>
            <span>DATA_NODES</span>
          </Link>
          <Link
            className="flex items-center gap-3 font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all"
            href="/specs"
          >
            <span className="material-symbols-outlined">memory</span>
            <span>SYS_DIAGNOSTICS</span>
          </Link>
          <Link
            className="flex items-center gap-3 font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all"
            href="/contact"
          >
            <span className="material-symbols-outlined">lock</span>
            <span>ENCRYPT_MSG</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-outline-variant">
          <TerminalButton className="w-full text-sm py-2">[INITIATE_PING]_</TerminalButton>
        </div>
        <div className="mt-auto p-2">
          <Link
            className="flex items-center gap-3 font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed px-4 py-2"
            href="/"
          >
            <span className="material-symbols-outlined">logout</span>
            <span>LOGOUT</span>
          </Link>
          <Link
            className="flex items-center gap-3 font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed px-4 py-2"
            href="/"
          >
            <span className="material-symbols-outlined">help</span>
            <span>HELP</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-margin lg:ml-64 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-2xl w-full">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary-fixed-dim font-bold font-mono text-code-sm">[ MODULE: COMM_LINK ]</span>
              <div className="h-px flex-1 bg-outline-variant" />
            </div>
            <h1 className="font-heading text-headline-xl text-primary-fixed-dim mb-4 uppercase tracking-tighter animate-flicker">
              Establish Connection
            </h1>
            <p className="text-on-surface-variant font-body-md max-w-lg">
              Input your credentials and transmission data. All communications are routed through encrypted subterranean nodes.
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
              <div className="relative group">
                <label className="block font-mono text-primary-fixed-dim mb-2" htmlFor="name">
                  &gt; USER_IDENTIFIER:
                </label>
                <div className="flex items-baseline gap-2 border-b border-outline-variant group-focus-within:border-primary-fixed-dim transition-all">
                  <span className="text-primary-fixed-dim opacity-50 group-focus-within:opacity-100">&gt;</span>
                  <TerminalInput
                    id="name"
                    name="name"
                    placeholder="Enter alphanumeric ID..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="flex-1 animate-flicker"
                  />
                </div>
              </div>

              {/* Input: Email */}
              <div className="relative group">
                <label className="block font-mono text-primary-fixed-dim mb-2" htmlFor="email">
                  &gt; RETURN_NODE_ADDR:
                </label>
                <div className="flex items-baseline gap-2 border-b border-outline-variant group-focus-within:border-primary-fixed-dim transition-all">
                  <span className="text-primary-fixed-dim opacity-50 group-focus-within:opacity-100">&gt;</span>
                  <TerminalInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="user@node.network"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Input: Subject */}
              <div className="relative group">
                <label className="block font-mono text-primary-fixed-dim mb-2" htmlFor="subject">
                  &gt; PKT_HEADER:
                </label>
                <div className="flex items-baseline gap-2 border-b border-outline-variant group-focus-within:border-primary-fixed-dim transition-all">
                  <span className="text-primary-fixed-dim opacity-50 group-focus-within:opacity-100">&gt;</span>
                  <TerminalInput
                    id="subject"
                    name="subject"
                    placeholder="Requesting system access..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>

              {/* Input: Message */}
              <div className="relative group">
                <label className="block font-mono text-primary-fixed-dim mb-2" htmlFor="message">
                  &gt; DATA_PAYLOAD:
                </label>
                <div className="flex items-start gap-2 border-b border-outline-variant group-focus-within:border-primary-fixed-dim transition-all">
                  <span className="text-primary-fixed-dim opacity-50 group-focus-within:opacity-100 mt-1">&gt;</span>
                  <TerminalTextarea
                    id="message"
                    name="message"
                    placeholder="Begin transmission..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <TerminalButton type="submit" className="w-full md:w-auto px-12 py-4 flex items-center justify-center gap-4">
                  [EXECUTE_MESSAGE]_
                  <span className="material-symbols-outlined text-[18px]">send</span>
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
                <span className="font-mono text-[10px] text-primary-fixed-dim tracking-[0.2em]">SECURITY_ENCRYPTION_ACTIVE</span>
              </div>
              <div className="text-[10px] text-on-surface-variant font-mono">LEVEL_4_AUTH_REQUIRED</div>
            </div>
          </div>

          {/* Terminal Readout */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border border-outline-variant bg-surface-container-low p-4">
              <div className="font-mono text-label-sm text-on-surface-variant mb-2">SYSTEM_LOG</div>
              <div className="text-[10px] font-mono space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className={log.type === "primary" ? "text-primary-fixed-dim" : "text-on-surface-variant"}>
                    {log.time} - {log.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-outline-variant bg-surface-container-low p-4">
              <div className="font-mono text-label-sm text-on-surface-variant mb-2">ENCRYPTION_KEY</div>
              <div className="text-[10px] font-mono text-primary-fixed-dim break-all leading-tight opacity-60">
                8F-E2-01-99-BC-4D-3A-A1-00-5F-2E-9D-8C-4B-01-22-AA-BB-CC-DD-EE-FF-00-11-22-33-44-55-66-77-88-99
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-margin py-2 text-[10px] border-t border-outline-variant bg-background">
        <div className="flex gap-6 items-center">
          <span className="font-mono text-label-sm font-bold text-primary-fixed-dim">GIN_OS</span>
          <span className="font-mono text-label-sm tracking-widest text-on-surface-variant">© 1999-2024 ALL_RIGHTS_RESERVED.</span>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            className="font-mono text-label-sm tracking-widest text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all hover:underline decoration-dotted underline-offset-4"
            href="/"
          >
            PRIVACY_PROTOCOL
          </Link>
          <Link
            className="font-mono text-label-sm tracking-widest text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all hover:underline decoration-dotted underline-offset-4"
            href="/"
          >
            ENCRYPTION_STANDARDS
          </Link>
          <Link
            className="font-mono text-label-sm tracking-widest text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all hover:underline decoration-dotted underline-offset-4"
            href="/"
          >
            CREDITS
          </Link>
        </div>
      </footer>

      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 0.97; }
          5% { opacity: 0.95; }
          10% { opacity: 0.99; }
          15% { opacity: 0.92; }
          20% { opacity: 1; }
          25% { opacity: 0.96; }
          30% { opacity: 1; }
          70% { opacity: 0.98; }
          72% { opacity: 0.92; }
          75% { opacity: 0.99; }
          80% { opacity: 0.96; }
          85% { opacity: 1; }
          90% { opacity: 0.94; }
          100% { opacity: 1; }
        }
        .animate-flicker {
          animation: flicker 0.15s infinite;
        }
      `}</style>
    </div>
  );
}