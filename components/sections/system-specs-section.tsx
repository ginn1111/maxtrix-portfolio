"use client";

import { useEffect, useState } from "react";
import { DataRow } from "@/components/terminal/data-row";
import { Chip } from "@/components/terminal/chip";

export function SystemSpecsSection() {
  const [uptime, setUptime] = useState(847);
  const [memory, setMemory] = useState(64.2);
  const [processes, setProcesses] = useState(247);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1);
      setMemory((prev) => Math.round((prev + Math.random() * 0.1) * 10) / 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-primary opacity-50 mb-2 tracking-wider">
            // SYSTEM SPECIFICATIONS
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary glow">
            SYSTEM SPECS
          </h1>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Static info */}
          <div className="space-y-6">
            <div className="border border-outline p-6">
              <div className="font-mono text-xs text-primary opacity-50 mb-4 tracking-wider">
                // IDENTITY MATRIX
              </div>
              <div className="space-y-4">
                <DataRow label="USER_ID" value="ADMIN-001" />
                <DataRow label="CLEARANCE" value="LEVEL 5" />
                <DataRow label="STATUS" value={<Chip variant="primary">ACTIVE</Chip>} />
              </div>
            </div>

            <div className="border border-outline p-6">
              <div className="font-mono text-xs text-primary opacity-50 mb-4 tracking-wider">
                // NETWORK VECTOR
              </div>
              <div className="space-y-4">
                <DataRow label="NODE" value="MATRIX-NODE-01" />
                <DataRow label="PROTOCOL" value="ENCRYPTED" />
                <DataRow label="LATENCY" value="12ms" />
              </div>
            </div>
          </div>

          {/* Right column - Live metrics */}
          <div className="space-y-6">
            <div className="border border-outline p-6">
              <div className="font-mono text-xs text-primary opacity-50 mb-4 tracking-wider">
                // REAL-TIME METRICS
              </div>
              <div className="space-y-4">
                <DataRow label="UPTIME" value={`${uptime}:23:41`} />
                <DataRow label="MEMORY" value={`${memory} GB`} />
                <DataRow label="PROCESSES" value={processes} />
                <DataRow label="THREATS" value="0" />
              </div>
            </div>

            <div className="border border-outline p-6">
              <div className="font-mono text-xs text-primary opacity-50 mb-4 tracking-wider">
                // SECURITY STATUS
              </div>
              <div className="space-y-4">
                <DataRow label="FIREWALL" value="ENGAGED" />
                <DataRow label="ENCRYPTION" value="AES-256" />
                <DataRow label="SCAN" value="COMPLETE" />
                <DataRow label="THREAT LEVEL" value={<Chip variant="primary">NOMINAL</Chip>} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer metrics */}
        <div className="mt-12 border-t border-outline pt-8">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="font-mono">
              <div className="text-xs text-primary opacity-50 mb-1">THREATS BLOCKED</div>
              <div className="text-2xl font-bold text-primary glow">0</div>
            </div>
            <div className="font-mono">
              <div className="text-xs text-primary opacity-50 mb-1">DATA TRANSFERRED</div>
              <div className="text-2xl font-bold text-primary glow">847 GB</div>
            </div>
            <div className="font-mono">
              <div className="text-xs text-primary opacity-50 mb-1">UPTIME</div>
              <div className="text-2xl font-bold text-primary glow">{uptime}H</div>
            </div>
            <div className="font-mono">
              <div className="text-xs text-primary opacity-50 mb-1">SYSTEM LOAD</div>
              <div className="text-2xl font-bold text-primary glow">12%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}